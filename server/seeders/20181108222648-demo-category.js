'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [{
        label: 'bike',
        parentID: -1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'parts',
        parentID: -1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'accessories',
        parentID: -1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'road',
        parentID: 1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'mountain',
        parentID: 1,
        createdAt: '2016-08-09 04:05:02',
        updatedAt: '2016-08-09 04:05:02',
      },
      {
        label: 'electric',
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
