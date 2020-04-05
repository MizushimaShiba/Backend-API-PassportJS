'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catalogue = sequelize.define('Catalogue', {
    name: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    img_url: DataTypes.STRING
  }, {});
  Catalogue.associate = function(models) {
    // associations can be defined here
  };
  return Catalogue;
};