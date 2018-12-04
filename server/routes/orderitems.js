const express = require('express');
const { OrderItem } = require('../models');
const router = express.Router();


router
  .route('/')
  .get((req, res) => {
    const { orderId } = req.body;
    OrderItem.findAll({where: { orderId: orderId }}).then((orderItems) => {
      res.json({
        orderItems: orderItems || [],
      });
    });
  });

  
module.exports = router;
