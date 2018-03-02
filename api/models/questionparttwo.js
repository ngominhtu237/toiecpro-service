'use strict';
module.exports = (sequelize, DataTypes) => {
  var QuestionPartTwo = sequelize.define('QuestionPartTwo', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    optionA: {
      type: DataTypes.TEXT
    },
    optionB: {
      type: DataTypes.TEXT
    },
    optionC: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.STRING(5)
    },
    idPartTwo: {
      type: DataTypes.STRING(11),
      references: {
        model: 'parttwos',
        key: 'id'
      },
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionPartTwo;
};