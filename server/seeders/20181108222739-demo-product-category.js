'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductCategories', [{
      itemId: '1',
      categoryId: '1',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02'
    }], {}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
