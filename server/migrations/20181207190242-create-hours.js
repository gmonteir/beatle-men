'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      addressLine1: {
        type: Sequelize.STRING
      },
      addressLine2: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mondayOpen: {
        type: Sequelize.STRING
      },
      mondayClose: {
        type: Sequelize.STRING
      },
      tuesdayOpen: {
        type: Sequelize.STRING
      },
      tuesdayClose: {
        type: Sequelize.STRING
      },
      wednesdayOpen: {
        type: Sequelize.STRING
      },
      wednesdayClose: {
        type: Sequelize.STRING
      },
      thursdayOpen: {
        type: Sequelize.STRING
      },
      thursdayClose: {
        type: Sequelize.STRING
      },
      fridayOpen: {
        type: Sequelize.STRING
      },
      fridayClose: {
        type: Sequelize.STRING
      },
      saturdayOpen: {
        type: Sequelize.STRING
      },
      saturdayClose: {
        type: Sequelize.STRING
      },
      sundayOpen: {
        type: Sequelize.STRING
      },
      sundayClose: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hours');
  }
};