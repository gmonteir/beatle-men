const express = require('express');
const { UserAccount, Address, PaymentInfo } = require('../models');

const router = express.Router();

router.route('/createuser').post((req, res) => {
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
        accountType
      });
      newUserAccount.save().then(() => {
        res.json(newUserAccount);
      });
    }
  })
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

router.route('/addaddress').post((req, res) => {
  const { email, password, street1, street2, city, state, zip } = req.body;
  UserAccount.findOne({where: { email: email, password: password } }).then(user => {
    Address.findOne({where: { UserAccountId: user.id, street1: street1, street2: street2, city: city, state: state, zip: zip } }).then(address => {
      if (address) {
        res.status(400).json({ error: 'error' });
      } else {
        const newAddress = Address.build({
          UserAccountId: user.id,
          street1: street1,
          street2: street2,
          city: city,
          state: state,
          zip: zip
        })
        newAddress.save().then(() => {
          res.json(newAddress);
        })
      }
    })
  })
});

router.delete('/removeaddress/:id').post((req, res) => {
  const { email, password } = req.body;
  const idToDelete = req.params.id;
  UserAccount.findOne({where: { email: email, password: password } }).then(() => {
    Address.findById(idToDelete).then(address => {
      address.destroy().then(() => {
        res.json({ delete: true });
      });
    });
  })
});

router.route('/addcard').post((req, res) => {
  const { email, password, firstName, lastName, number, cvv, month, year } = req.body;
  UserAccount.findOne({where: { email: email, password: password } }).then(user => {
    const fullName = firstName + ' ' + lastName;
    PaymentInfo.findOne({where: { UserAccountId: user.id, name: fullName, number: number, expMonth: month, expYear: year, cvv: cvv } }).then(card => {
      if (card) {
        res.status(400).json({ error: 'error' });
      } else {
        const newCard = PaymentInfo.build({
          UserAccountId: user.id,
          name: fullName,
          number: number,
          expMonth: month,
          expYear: year,
          cvv: cvv
        })
        newCard.save().then(() => {
          res.json(newCard);
        })
      }
    })
  })
});

router.route('/removecard/:id').delete((req, res) => {
  const { email, password } = req.body;
  const idToDelete = req.params.id;
  UserAccount.findOne({where: { email: email, password: password } }).then(() => {
    PaymentInfo.findById(idToDelete).then(card => {
      card.destroy().then(() => {
        res.json({ delete: true });
      });
    });
  })
});


module.exports = router;