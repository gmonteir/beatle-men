'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [{
        label: 'Bike',
        parentID: -1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'Parts',
        parentID: -1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'Accessories',
        parentID: -1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'Road',
        parentID: 1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'Mountain',
        parentID: 1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'Electric',
        parentID: 1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
