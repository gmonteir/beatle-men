'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserAccountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserAccounts',
          key: 'id'
        }
      },
      PaymentInfoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentInfos',
          key: 'id'
        }
      },
      AddressId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses',
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};