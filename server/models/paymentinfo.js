'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentInfo = sequelize.define('PaymentInfo', {
    name: DataTypes.STRING,
<<<<<<< HEAD
    number: DataTypes.INTEGER,
    expMonth: DataTypes.INTEGER,
    expYear: DataTypes.INTEGER,
    cvv: DataTypes.INTEGER
=======
    number: DataTypes.STRING,
    expMonth: DataTypes.INTEGER,
    expYear: DataTypes.INTEGER,
    ccv: DataTypes.INTEGER
>>>>>>> master
  }, {});
  PaymentInfo.associate = function(models) {
    // associations can be defined here
    PaymentInfo.belongsTo(models.UserAccount);
  };
  return PaymentInfo;
};