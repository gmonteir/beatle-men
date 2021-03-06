const express = require('express');

const { Item } = require('../models');
const { OrderItem } = require('../models');
const { Category } = require('../models');

const router = express.Router();

router
  .route('/')

  .get((req, res) => {
    Item.findAll().then((items) => {
      res.json({
        items: items || [],
      });
    });
  })

  .post((req, res) => {
    const {
      name,
      price,
      quantity,
      description,
      specifications,
      labels,
    } = req.body;

    // create new item in db
    const newItem = Item.build({
      name,
      price,
      quantity,
      description,
      specifications,
      image: req.file.path,
    });

    // after the item is saved, start adding categories
    newItem.save().then(() => {
      // labels are in a comma separated string
      const labelsSplit = labels.split(',');
      // for each label passed, create association between category and item
      for (let i = 0; i < labelsSplit.length; i += 1) {
        const label = labelsSplit[i];
        Category.findOne({ where: { label } }).then((category) => {
          newItem.addCategory(category);
          newItem.save();
        });
      }
      res.json(newItem);
    });
  });

router
  .route('/:id')
  // get a specific item
  .get((req, res) => {
    const givenId = req.params.id;
    Item.findById(givenId).then((item) => {
      res.json(item);
    });
  })

  // update a given item
  .put((req, res) => {
    const { name, price, quantity, description, specifications } = req.body;
    //const image = req.file.path;
    Item.findById(req.params.id).then((item) => {
      const itemToUpdate = item;
      itemToUpdate.name = name;
      itemToUpdate.price = price;
      itemToUpdate.quantity = quantity;
      itemToUpdate.description = description;
      itemToUpdate.specifications = specifications;
      //itemToUpdate.image = image;
      itemToUpdate.save().then((updatedItem) => {
        res.json(updatedItem);
      });
    });
  })
  
  // delete a given item
  .delete((req, res) => {
    const idToDelete = req.params.id;
    Item.findById(idToDelete).then((item) => {
      OrderItem.findAll({where: {itemId: item.id}}).then((orderItems) => {
        if(orderItems.length != 0){
          res.json({ delete: false});
        }
        else{
          item.destroy().then(() => {
            res.json({ delete: true });
          });
        }
      });
    });
  });

module.exports = router;
