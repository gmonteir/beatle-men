'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAccount = sequelize.define('UserAccount', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    accountType: DataTypes.STRING
  }, {});
  UserAccount.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.address, { foreignKey: 'userId' });
  };
  return UserAccount;
};
