'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'electric bike',
      price: 39.99,
      quantity: 5,
      description: 'big bike',
      specifications: '24 inch wheels',
      image: 'beatle-men/server/images/bullseye-monster-grn-3.jpg',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02'
    }], {});   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
