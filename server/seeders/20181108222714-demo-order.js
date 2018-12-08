'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      status: 'open',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02',
      UserAccountId: 1,
      AddressId: 1,
      PaymentInfoId: 1,
    }], {});   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
