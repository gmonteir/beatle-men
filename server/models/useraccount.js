'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAccount = sequelize.define('UserAccount', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    accountType: DataTypes.STRING,
    employeeImage: DataTypes.STRING,
  }, {});
  UserAccount.associate = function(models) {
    // associations can be defined here
    UserAccount.hasMany(models.Address);
    UserAccount.hasMany(models.Order);
    UserAccount.hasMany(models.PaymentInfo);
    UserAccount.hasOne(models.Session);
  };
  return UserAccount;
};
