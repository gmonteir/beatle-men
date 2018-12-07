const express = require('express');
const { OrderItem } = require('../models');
const router = express.Router();


router
  .route('/')
  .get((req, res) => {
    OrderItem.findAll({ where: { orderId: req.query.orderId } }).then((orderItems) => {
      res.json({
        orderItems: orderItems || [],
      });
    });
  });

  
module.exports = router;
