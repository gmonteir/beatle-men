'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentInfo = sequelize.define('PaymentInfo', {
    name: DataTypes.STRING
  }, {});
  PaymentInfo.associate = function(models) {
    // associations can be defined here
  };
  return PaymentInfo;
};