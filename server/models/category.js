'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    label: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.Item, {through: models.ProductCategory});
  };
  return Category;
};