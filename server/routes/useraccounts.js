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

router.route('/changeemail').post((req, res) => {
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

router.route('/changename').post((req, res) => {
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

router.route('/changepassword').post((req, res) => {
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
        res.status(400);
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
          res.json(newAddress.toJSON());
        })
      }
    })
  })
});

router.route('/removeaddress').post((req, res) => {
  const { email, password, addressId } = req.body;
  UserAccount.findOne({where: { email: email, password: password } }).then(() => {
    Address.findById(addressId).then(address => {
      if (address) {
        address.destroy().then(() => true);
      } else {
        res.status(400).json({ error: 'error' });
      }
    })
  })
});

router.route('/addcard').post((req, res) => {
  const { email, password, firstName, lastName, number, cvv, month, year } = req.body;
  UserAccount.findOne({where: { email: email, password: password } }).then(user => {
    const fullName = firstName + lastName;
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
          res.json(newCard.toJSON());
        })
      }
    })
  })
});

router.route('/removecard').post((req, res) => {
  const { email, password, cardId } = req.body;
  UserAccount.findOne({where: { email: email, password: password } }).then(() => {
    PaymentInfo.findById(cardId).then(card => {
      if (card) {
        card.destroy().then(() => true);
      } else {
        res.status(400).json({ error: 'error' });
      }
    })
  })
});


module.exports = router;