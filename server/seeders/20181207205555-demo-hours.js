'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hours', [{
      title: 'Foxcycle San Luis Obispo',
      addressLine1: '123 Foothill Blvd',
      addressLine2: 'Apt #3',
      phone: '123-445-2234',
      email: 'customer@foxcycle.com',
      mondayOpen: '10:00AM',
      mondayClose: '8:00PM',
      tuesdayOpen: '10:00AM',
      tuesdayClose: '8:00PM',
      wednesdayOpen: '10:00AM',
      wednesdayClose: '8:00PM',
      thursdayOpen: '10:00AM',
      thursdayClose: '8:00PM',
      fridayOpen: '10:00AM',
      fridayClose: '8:00PM',
      saturdayOpen: '10:00AM',
      saturdayClose: '6:00PM',
      sundayOpen: '10:00AM',
      sundayClose: '6:00PM',
      createdAt: '2016-08-09 04:05:02',
      updatedAt: '2016-08-09 04:05:02',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hours', null, {});
  }
};
