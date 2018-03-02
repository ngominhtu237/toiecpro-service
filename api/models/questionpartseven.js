'use strict';
module.exports = (sequelize, DataTypes) => {
  var QuestionPartSeven = sequelize.define('QuestionPartSeven', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    first_section: {
      type: DataTypes.TEXT
    },
    second_section: {
      type: DataTypes.TEXT
    },
    question_name: {
      type: DataTypes.TEXT
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
    idPartSeven: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partsevens',
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
  return QuestionPartSeven;
};