const express = require('express');

const { UserAccount, Address } = require('../models');

const router = express.Router();

router
  .route('/')

  .get((req, res) => {
    Address.findAll().then((addresses) => {
      res.json({
        addresses: addresses || [],
      });
    });
  })

  .post((req, res) => {
    const {
      email,
      password,
      street1,
      street2,
      city,
      state,
      zip
    } = req.body;

    // find user with specified email and password
    UserAccount.findOne({where: { email: email, password: password } }).then(user => {
      // check if user already has address in database
      Address.findOne({where: { UserAccountId: user.id, street1: street1, street2: street2, city: city, state: state, zip: zip } }).then(address => {
        // if address already exists in database, return error
        if (address) {
          res.status(400).json({ error: 'error' });
        } 
        else { // otherwise create new address in db
          const newAddress = Address.build({
            UserAccountId: user.id,
            street1: street1,
            street2: street2,
            city: city,
            state: state,
            zip: zip
          })

          // save address to db and return it
          newAddress.save().then(() => { 
            res.json(newAddress);
          })
        }
      })
    })

  });

router
  .route('/:id')
  // get a specific address
  .get((req, res) => {
    const givenId = req.params.id;
    Address.findById(givenId).then((address) => {
      res.json(address);
    });
  })

  // update a given address
  .put((req, res) => {
    const { street1, street2, city, state, zip } = req.body;
    Address.findById(req.params.id).then((address) => {
      const addressToUpdate = address;
      addressToUpdate.street1 = street1;
      addressToUpdate.street2 = street2;
      addressToUpdate.city = city;
      addressToUpdate.state = state;
      addressToUpdate.zip = zip;
      addressToUpdate.save().then((updatedAddress) => {
        res.json(updatedAddress);
      });
    });
  })
  
  // delete a given address
  .delete((req, res) => {
    const idToDelete = req.params.id;
    Address.findById(idToDelete).then((address) => {
      address.destroy().then(() => {
        res.json({ delete: true });
      });
    });
  });

module.exports = router;
