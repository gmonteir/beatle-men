const express = require('express');
const { UserAccount } = require('../models');

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    const { firstName,lastName,email,password,accountType } = req.body;
    UserAccount.findOne({where: { email } }).then(user => {
      if(user){
        res.status(401).json({error: 'email in use'});
      }
      else{
        const newUserAccount = UserAccount.build({
          firstName,
          lastName,
          email,
          password,
          accountType
        });
        newUserAccount.save().then(() => {
          res.json(newUserAccount);
        });
      }
    })

  });


module.exports = router;