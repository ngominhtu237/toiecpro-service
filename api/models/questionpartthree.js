'use strict';
module.exports = (sequelize, DataTypes) => {
  var QuestionPartThree = sequelize.define('QuestionPartThree', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    question_name: {
      type: DataTypes.STRING
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
    optionD: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.STRING(5)
    },
    idPartThree: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partthrees',
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
  return QuestionPartThree;
};