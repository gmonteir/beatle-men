const express = require('express');

const { Review } = require('../models');
const { Item } = require('../models');

const router = express.Router();

router
  .route('/')
  // get all reviews
  .get((req, res) => {
    Review.findAll({ where: { ItemId: req.query.ItemId } })
      .then((reviews) => {
        res.json({
          reviews: reviews || [],
        });
      });
  })

  // create a review
  .post((req, res) => {
    // title and message are both passed as strings
    const { firstName, rating, description, itemId } = req.body;
    Item.findById(itemId).then((item) => {
      Review.build({
        firstName,
        rating,
        description,
      }).save().then((review) => {
        review.setItem(item);
        review.save();
        res.json(review);
      });
    });
  });

  router
.route('/:id')
// delete a given review
.delete((req, res) => {
  const idToDelete = req.params.id;
  Review.findById(idToDelete).then((review) => {
    review.destroy().then(() => {
      res.json({ delete: true });
    });
  });
});
module.exports = router;

