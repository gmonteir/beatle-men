const express = require('express');
const { Order } = require('../models');
const { Item } = require('../models');
const { UserAccount } = require('../models');
const { Address } = require('../models');
const { PaymentInfo } = require('../models');
const { OrderItem } = require('../models');
const router = express.Router();

router

  .route('/')
  .get((req, res) => {
    Order.findAll().then((orders) => {
      res.json({
        orders: orders || [],
      });
    });
  })

  .post((req, res) => {
    // userId is the id of the user placing the order
    // info contains the items and quantities in an array
    const { userId, info, PaymentInfoId, AddressId} = req.body;
    const infoArr = info;
    //create a new order
    const order = Order.build({
      status: 'open',
    });
    order.save().then(() =>{
      UserAccount.findById(userId).then((user) => {
        Address.findById(AddressId).then((address) => {
          PaymentInfo.findById(PaymentInfoId).then((payment) => {
            order.setUserAccount(user).then(() => {
              order.setAddress(address).then(() => {
                order.setPaymentInfo(payment).then(() => {
                  Promise.all(infoArr["items"].map( function(itemId, i) {
                    return Item.findById(itemId).then((item) => {
                      return item.addOrder(order, { through: { price: item.price, quantity: infoArr["quantities"][i] } }).then(() => {
                        const itemToUpdate = item;
                        itemToUpdate.quantity = itemToUpdate.quantity - infoArr["quantities"][i];
                        return itemToUpdate.save();
                      });
                    });
                  }));
                  res.json(order);
                });
              });
            });
          });
        });
      });
    });
  });





router
  .route('/:id')
  // get a specific order
  .get((req, res) => {
    const givenId = req.params.id;
    Order.findById(givenId).then((order) => {
      res.json(order);
    });
  })

  // update a given order
  .put((req, res) => {
    const { status } = req.body;
    Order.findById(req.params.id).then((order) => {
      const orderToUpdate = order;
      orderToUpdate.status = status;
      orderToUpdate.save().then((updatedOrder) => {
        res.json(updatedOrder);
      });
    });
  })
  
  // delete a given order
  .delete((req, res) => {
    const idToDelete = req.params.id;
    Order.findById(idToDelete).then((order) => {
      order.destroy().then(() => {
        res.json({ delete: true });
      });
    });
  });

  router
  .route('/:id/customer')
  .get((req, res) => {
    Order.findAll({where: { UserAccountId: req.params.id }}).then((orders) => {

      Promise.all(orders.map(function(order){
        return OrderItem.findAll({ where: { orderId: order.id } }).then((orderItems) => {
          return orderItems;
        });
      })).then((returnedOrderItems) => {
        Promise.all(returnedOrderItems.map(function(orderItemsFromOrder){
          return Promise.all(orderItemsFromOrder.map(function(orderItemFromArr){
            return Item.findById(orderItemFromArr.ItemId).then((item) => {
              return item;
            });
          }));
        })).then((returnedItems) => {
          res.json({orders, orderItemsArr: returnedOrderItems, itemsArr: returnedItems});
        });
      });
    });
  });



module.exports = router;


