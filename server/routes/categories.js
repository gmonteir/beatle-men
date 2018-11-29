const express = require('express');
const authenticated = require('./authenticated');
const { Category } = require('../models');

const router = express.Router();

router
  .route('/')

  .get((req, res) => {
    Category.findAll().then((categories) => {
      res.json({
        categories: categories || [],
      });
    });
  })

  .post((req, res) => {
    const { label, parentID } = req.body;
    const newCategory = Category.build({
      label,
      parentID,
    });
    newCategory.save().then(() => {
      res.json(newCategory);
    });
  });

router
  .route('/:id')
  .all(authenticated)
  .all((req, res, next) => {
    Category.findOne({
      where: {
        id: req.params.id,
        userId: req.authenticatedUser.id,
      },
    }).then((categories) => {
      if (categories) {
        req.categories = categories;
        next();
      } else {
        res.status(404);
      }
    });
  })

  // get a specific category
  .get((req, res) => {
    res.json(req.categories);
  })

  // update a given category
  .put((req, res) => {
    const { label, parentID } = req.body;
    const categoryToUpdate = req.categories;
    categoryToUpdate.label = label;
    categoryToUpdate.parentID = parentID;
    categoryToUpdate.save().then((updatedCategory) => {
      res.json(updatedCategory);
    });
  })

  .delete((req, res) => {
    const { category } = req;
    category.destroy().then(() => {
      res.json({ delete: true });
    });
  });

module.exports = router;
