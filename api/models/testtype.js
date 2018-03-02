'use strict';
module.exports = (sequelize, DataTypes) => {
  var TestType = sequelize.define('TestType', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING(11)
    },
    type_name: {
      type: DataTypes.STRING
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TestType;
};