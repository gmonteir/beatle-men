'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Order, {through: models.OrderItem})
  };
  return Item;
};