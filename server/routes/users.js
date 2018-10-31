const express = require('express');
const authenticated = require('./authenticated');
const { UserAccount } = require('../models');

const router = express.Router();

router
  .route('/')
  .all(authenticated)

  // create  todo
  .post((req, res) => {
    const { firstName, lastName, email, password, address, accountType } = req.body;
    const newUserAccount = UserAccount.build({
      firstName,
      lastName,
      email,
      password,
      address,
      accountType
    });
    newUserAccount.setUserAccount(req.authenticatedUser);
    newUserAccount.save().then(() => {
      res.json(newUserAccount);
    });
  });

module.exports = router;
