'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
  }, {});
  OrderItem.associate = (models) => {
    // associations can be defined here
    OrderItem.belongsTo(models.Item);
    OrderItem.belongsTo(models.Order);
  };
  return OrderItem;
};
