const express = require('express');
const Auth = require('./authenticator');
const { UserAccount } = require('../models');

const router = express.Router();

router.route('/').post((req, res) => {
  const { email, password } = req.body;
  Auth.login(email, password).then(
<<<<<<< HEAD
    () => {
=======
    (session) => {
>>>>>>> master
      UserAccount.findOne({ where: { email } }).then(user => {
        res.json({ 
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          accountType: user.accountType
        });
      });
    },
    (error) => {
      res.status(400).json({ error: error.message });
    }
  );
});

router.route('/logout').post((req, res) => {
  const { email } = req.body;
  Auth.logout(email).then(() => {
    res.json({ email: email })
  });
});

module.exports = router;