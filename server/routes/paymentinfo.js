const express = require('express');

const { UserAccount, PaymentInfo } = require('../models');

const router = express.Router();

router
  .route('/')

  .get((req, res) => {
    PaymentInfo.findAll().then((cards) => {
      res.json({
        cards: cards || [],
      });
    });
  })

  .post((req, res) => {
    const {
      email,
      password,
      firstName,
      lastName,
      number,
      cvv,
      month,
      year
    } = req.body;

    // find user with specified email and password
    UserAccount.findOne({where: { email: email, password: password } }).then(user => {
      const fullName = firstName + ' ' + lastName;
      // check if user already has card in database
      PaymentInfo.findOne({where: { UserAccountId: user.id, name: fullName, number: number, expMonth: month, expYear: year, cvv: cvv } }).then(card => {
        // if card already exists in database, return error
        if (card) {
          res.status(401).json({ error: 'error' });
        } 
        else { // otherwise create new card in db
          const newCard = PaymentInfo.build({
            UserAccountId: user.id,
            name: fullName,
            number: number,
            expMonth: month,
            expYear: year,
            cvv: cvv,
          })

          // save card to db and return it
          newCard.save().then(() => {
            res.json(newCard);
          })
        }
      })
    })

  });

router
  .route('/:id')
  // get a specific card
  .get((req, res) => {
    const givenId = req.params.id;
    PaymentInfo.findById(givenId).then((card) => {
      res.json(card);
    });
  })

  // update a given card
  .put((req, res) => {
    const { firstName, lastName, number, cvv, month, year } = req.body;
    PaymentInfo.findById(req.params.id).then((card) => {
      const cardToUpdate = card;
      cardToUpdate.name = firstName + " " + lastName;
      cardToUpdate.number = number;
      cardToUpdate.cvv = cvv;
      cardToUpdate.expMonth = month;
      cardToUpdate.expYear = year;
      cardToUpdate.save().then((updatedCard) => {
        res.json(updatedCard);
      });
    });
  })
  
  // delete a given card
  .delete((req, res) => {
    const idToDelete = req.params.id;
    PaymentInfo.findById(idToDelete).then((card) => {
      card.destroy().then(() => {
        res.json({ delete: true });
      });
    });
});

router
  .route('/:id/customer')
  // get all cards from user id
  .get((req, res) => {
    const givenId = req.params.id;
    PaymentInfo.findAll({where: { UserAccountId: givenId } }).then((cards) => {
      res.json({
        cards: cards || [],
      });
    });
})

module.exports = router;
