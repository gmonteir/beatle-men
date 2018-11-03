'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    expiration: DataTypes.DATE
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
    Session.belongsTo(models.UserAccount);
  };
  return Session;
};