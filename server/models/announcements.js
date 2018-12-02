'use strict';
module.exports = (sequelize, DataTypes) => {
  const Announcements = sequelize.define('Announcements', {
    title: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Announcements.associate = function(models) {
    // associations can be defined here
  };
  return Announcements;
};