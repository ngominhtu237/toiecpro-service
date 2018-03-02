'use strict';
module.exports = (sequelize, DataTypes) => {
  var QuestionPartFive = sequelize.define('QuestionPartFive', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    first_part_question: {
      type: DataTypes.STRING
    },
    last_part_question: {
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
    idPartFive: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partfives',
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
  return QuestionPartFive;
};