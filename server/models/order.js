'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.UserAccount);
    Order.hasMany(models.OrderItem);
    Order.belongsTo(models.PaymentInfo);
    Order.belongsTo(models.Address);
  };
  return Order;
};