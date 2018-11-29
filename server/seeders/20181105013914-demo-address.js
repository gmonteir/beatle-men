'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      userAccountId: 1,
      street1: '1 Foothill Blvd.',
      street2: 'Apt #2',
      city: 'San Luis Obispo',
      state: 'CA',
      zip: 93405,
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02'
    }], {});    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
