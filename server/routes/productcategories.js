const express = require('express');
const { ProductCategory } = require('../models');

const router = express.Router();

router
  .route('/')

  .get((req, res) => {
    ProductCategory.findAll().then((productCategories) => {
      res.json({
        productCategories: productCategories || [],
      });
    });
  });

router
  .route('/:id')
  .all((req, res, next) => {
    ProductCategory.findOne({
      where: {
        id: req.params.id,
      },
    }).then((productCategory) => {
      if (productCategory) {
        req.productCategory = productCategory;
        next();
      } else {
        res.status(404);
      }
    });
  })

  // get a specific productCategory
  .get((req, res) => {
    res.json(req.productCategory);
  })

  .delete((req, res) => {
    const { productCategory } = req;
    productCategory.destroy().then(() => {
      res.json({ delete: true });
    });
  });

module.exports = router;
