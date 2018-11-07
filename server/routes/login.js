const express = require('express');
const Auth = require('./authenticator');

const router = express.Router();
router.route('/').post((req, res) => {
  const { email, password } = req.body;
  Auth.login(email, password).then(
    session => {
      if (session) {
        session.getUserAccount().then(user => {
          res.json({ user_id: user.id });
        });
      } else {
        res.json({ error: 'you are not logged in' });
      }
    },
    error => {
      res.status(400).json({ error: error.message });
    }
  );
});

module.exports = router;