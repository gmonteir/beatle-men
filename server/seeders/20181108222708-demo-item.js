'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Bronson',
      price: 3999.99,
      quantity: 4,
      description: 'Description',
      specifications: '24 inch wheels',
      image: 'images\\home-slideshow-3.jpg',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  },
};
