'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    CatalogueId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};