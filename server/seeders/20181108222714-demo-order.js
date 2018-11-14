'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      status: 'unordered',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02',
      UserAccountId: 1
    }], {});   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
