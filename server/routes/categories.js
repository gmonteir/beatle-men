const express = require('express');
const { Category } = require('../models');

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    const { label } = req.body;
    newCategory = Category.build({
      label
    });
    newCategory.save().then(() => {
      res.json(newCategory)
    });
  });

  module.exports = router;