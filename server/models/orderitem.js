'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
    OrderItem.hasOne(models.Item);
    OrderItem.belongsTo(models.Order);
  };
  return OrderItem;
};