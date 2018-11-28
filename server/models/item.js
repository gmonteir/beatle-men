'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    specifications: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  Item.associate = (models) => {
    // associations can be defined here
    Item.belongsToMany(models.Order, { through: models.OrderItem });
    Item.belongsToMany(models.Category, { through: models.ProductCategory });
  };
  return Item;
};
