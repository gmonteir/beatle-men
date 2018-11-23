const express = require('express');
const { Item } = require('../models');
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
      image,
      labels,
    } = req.body;

    // create new item in db
    const newItem = Item.build({
      name,
      price,
      quantity,
      description,
      image,
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

module.exports = router;
