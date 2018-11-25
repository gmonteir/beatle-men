const express = require('express');
const multer = require('multer');

const { Item } = require('../models');
const { Category } = require('../models');

const stor = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const filter = (req, file, cb) => {
  if (file.mimetype === 'image/*') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: stor,
  fileFilter: filter,
});

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

module.exports = router;
