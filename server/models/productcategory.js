'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
  }, {});
  ProductCategory.associate = function(models) {
    ProductCategory.belongsTo(models.Item);
    ProductCategory.belongsTo(models.Category);
    // associations can be defined here
  };
  return ProductCategory;
};