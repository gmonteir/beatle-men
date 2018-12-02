'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Announcements', [{
      title: 'This is the title',
      message: 'This is the announcement',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Announcements', null, {});
  }
};
