'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    label: DataTypes.STRING,
    parentID: DataTypes.INTEGER,
  }, {});
  Category.associate = (models) => {
    // associations can be defined here
    Category.belongsToMany(models.Item, { through: models.ProductCategory });
  };
  return Category;
};
