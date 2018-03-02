'use strict';
module.exports = (sequelize, DataTypes) => {
  var PartFour = sequelize.define('PartFour', {
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
    },
    full_audio: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PartFour;
};