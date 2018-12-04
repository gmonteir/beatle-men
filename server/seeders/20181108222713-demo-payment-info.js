'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PaymentInfos', [{
      UserAccountId: 1,
      name: 'John Fox',
      number: '4945466776688911',
      expMonth: 7,
      expYear: 22,
      cvv: 432,
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02'
    }], {}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaymentInfos', null, {});
  }
};
