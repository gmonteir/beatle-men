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
        accountType: 'admin',
        image: 'images\\home-slideshow-3.jpg',
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserAccounts', null, {});
  }
};
