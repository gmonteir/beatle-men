'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    itemId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {});
  ProductCategory.associate = (models) => {
    ProductCategory.belongsTo(models.Item);
    ProductCategory.belongsTo(models.Category);
    // associations can be defined here
  };
  return ProductCategory;
};
