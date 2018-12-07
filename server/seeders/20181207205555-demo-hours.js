'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hours', [{
      title: 'Store Hours',
      addressLine1: '123 Foothill Blvd',
      addressLine2: 'Apt #3',
      phone: '123-445-2234',
      email: 'troll@demo.com',
      mondayOpen: '8:00am',
      mondayClose: '8:00am',
      tuesdayOpen: '8:00am',
      tuesdayClose: '8:00am',
      wednesdayOpen: '8:00am',
      wednesdayClose: '8:00am',
      thursdayOpen: '8:00am',
      thursdayClose: '8:00am',
      fridayOpen: '9:00am',
      fridayClose: '8:00am',
      saturdayOpen: '9:00am',
      saturdayClose: '5:00am',
      sundayOpen: '9:00am',
      sundayClose: '5:00am',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hours', null, {});
  }
};
