'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      firstName: 'Joey',
      rating: 1,
      description: 'good product',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02',
      ItemId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  },
};
