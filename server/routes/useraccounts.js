const express = require('express');
const { UserAccount } = require('../models');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    UserAccount.findAll().then((users) => {
      res.json({
        users: users || [],
      });
    });
  })

  .post((req, res) => {
    const { firstName,lastName,email,password,accountType } = req.body;
    UserAccount.findOne({where: { email } }).then(user => {
      if (user) {
        res.status(401).json({error: 'email in use'});
      }
      else {
        const newUserAccount = UserAccount.build({
          firstName,
          lastName,
          email,
          password,
          accountType,
          image: (req.file !== null) ? req.file.path : null,
        });
        
        newUserAccount.save().then(() => {
          res.json(newUserAccount);
        });
      }
    })
});

router.route('/:id')
  // delete a given item
  .delete((req, res) => {
    const idToDelete = req.params.id;
    UserAccount.findById(idToDelete).then((user) => {
      user.destroy().then(() => {
        res.json({ delete: true });
      });
    });
});

router.route('/changeemail').put((req, res) => {
  const { currentEmail, newEmail, currentPassword } = req.body;
  UserAccount.findOne({where: { email: currentEmail, password: currentPassword } }).then(user => {
    if (user) {
      user.email = newEmail;
      user.save().then(() => {
        res.json({ email: newEmail });
      })
    } else {
      res.status(400).json({ error: 'error' });
    }
  })
});

router.route('/changename').put((req, res) => {
  const { currentEmail, newFirstName, newLastName, currentPassword } = req.body;
  UserAccount.findOne({where: { email: currentEmail, password: currentPassword } }).then(user => {
    if (user) {
      user.firstName = newFirstName;
      user.lastName = newLastName;
      user.save().then(() => {
        res.json({ firstName: newFirstName, lastName: newLastName });
      })
    } else {
      res.status(400).json({ error: 'error' });
    }
  })
});

router.route('/changepassword').put((req, res) => {
  const { currentEmail, newPassword, currentPassword } = req.body;
  UserAccount.findOne({where: { email: currentEmail, password: currentPassword } }).then(user => {
    if (user) {
      user.password = newPassword;
      user.save().then(() => {
        res.json({ password: newPassword });
      })
    } else {
      res.status(400).json({ error: 'error' });
    }
  })
});


module.exports = router;