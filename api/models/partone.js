'use strict';
module.exports = (sequelize, DataTypes) => {
  var PartOne = sequelize.define('PartOne', {
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
    picture_example: {
      type: DataTypes.TEXT
    },
    answer_example: {
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
  return PartOne;
};