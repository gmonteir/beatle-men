'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentInfo = sequelize.define('PaymentInfo', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    expMonth: DataTypes.INTEGER,
    expYear: DataTypes.INTEGER,
    cvv: DataTypes.INTEGER
  }, {});
  PaymentInfo.associate = function(models) {
    // associations can be defined here
    PaymentInfo.belongsTo(models.UserAccount);
  };
  return PaymentInfo;
};