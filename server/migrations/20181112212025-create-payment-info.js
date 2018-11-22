'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserAccountId: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: 'UserAccounts',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      expMonth: {
        type: Sequelize.INTEGER
      },
      expYear: {
        type: Sequelize.INTEGER
      },
      ccv: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('PaymentInfos');
  }
};