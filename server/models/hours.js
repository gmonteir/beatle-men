'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hours = sequelize.define('Hours', {
    title: DataTypes.STRING,
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    mondayOpen: DataTypes.STRING,
    mondayClose: DataTypes.STRING,
    tuesdayOpen: DataTypes.STRING,
    tuesdayClose: DataTypes.STRING,
    wednesdayOpen: DataTypes.STRING,
    wednesdayClose: DataTypes.STRING,
    thursdayOpen: DataTypes.STRING,
    thursdayClose: DataTypes.STRING,
    fridayOpen: DataTypes.STRING,
    fridayClose: DataTypes.STRING,
    saturdayOpen: DataTypes.STRING,
    saturdayClose: DataTypes.STRING,
    sundayOpen: DataTypes.STRING,
    sundayClose: DataTypes.STRING,
  }, {});
  Hours.associate = (models) => {
    // associations can be defined here
  };
  return Hours;
};