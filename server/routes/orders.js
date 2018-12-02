const express = require('express');
const { Order } = require('../models');
const { Item } = require('../models');
const { UserAccount } = require('../models');
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
    const { userId, info} = req.body;
    const infoArr = JSON.parse(info);

    //create a new order
    const order = Order.build({
      status: 'open',
    });
    
    order.save().then(() => {
      UserAccount.findById(userId).then((user) => {
        order.setUserAccount(user);
        order.save().then(() => {
          // create each order item based on the items and quantities given
          for(let i = 0; i < infoArr["items"].length; i++){
            Item.findById(infoArr["items"][i]).then((item) =>{
              item.addOrder(order, { through: { price: item.price, quantity: infoArr["quantities"][i] } });
              item.save();
              // decrement the quantity for the item ordered
              const itemToUpdate = item;
              itemToUpdate.quantity = itemToUpdate.quantity - infoArr["quantities"][i];
              itemToUpdate.save();
            });
          }
        });
      });
      res.json(order);
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


module.exports = router;


