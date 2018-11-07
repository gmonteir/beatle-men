const express = require('express');
const { Item } = require('../models');

const router = express.Router();

router
  .route('/')
  .post((req, res) => { 
    const { name,price,quantity,description,image } = req.body;
    newItem = Item.build({
      name,
      price,
      quantity,
      description,
      image
    });
    newItem.save().then(() => {
      res.json(newItem)
    });
  });

  module.exports = router;