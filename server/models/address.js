'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.user, { foreignKey: 'userId' });
  };
  return Address;
};
