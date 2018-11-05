'use strict';
const models = require('../models');
const User = models.User;

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserAccounts', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'troll@demo.com',
        password: 'secure',
        accountType: 'User',
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
