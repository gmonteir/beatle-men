const express = require('express');
const { UserAccount } = require('../models');

const router = express.Router();

router
  .route('/').post((req, res) => {
    const { firstName,lastName,email,username,password,address,accountType } = req.body;
    const newUserAccount = UserAccount.build({
      firstName,
      lastName,
      email,
      username,
      password,
      address,
      accountType
    });
    newUserAccount.save().then(() => {
      res.json(newUserAccount);
    });
  });

module.exports = router;