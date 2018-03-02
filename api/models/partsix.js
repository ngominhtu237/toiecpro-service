'use strict';
module.exports = (sequelize, DataTypes) => {
  var PartSix = sequelize.define('PartSix', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING(11),
    },
    information: {
      type: DataTypes.TEXT
    },
    direction: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PartSix;
};