'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    firstName: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {});
  Review.associate = (models) => {
    // associations can be defined here
    Review.belongsTo(models.Item);
  };
  return Review;
};
