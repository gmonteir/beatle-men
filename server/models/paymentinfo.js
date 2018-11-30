'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentInfo = sequelize.define('PaymentInfo', {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    expMonth: DataTypes.INTEGER,
    expYear: DataTypes.INTEGER,
    ccv: DataTypes.INTEGER
  }, {});
  PaymentInfo.associate = function(models) {
    // associations can be defined here
  };
  return PaymentInfo;
};