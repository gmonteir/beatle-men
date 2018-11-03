'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
  }, {});
  ProductCategory.associate = function(models) {
    ProductCategory.hasOne(models.Item);
    ProductCategory.hasOne(models.Category);
    // associations can be defined here
  };
  return ProductCategory;
};