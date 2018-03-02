'use strict';
module.exports = (sequelize, DataTypes) => {
  var QuestionPartSix = sequelize.define('QuestionPartSix', {
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
    idPartSix: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partsixes',
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
  return QuestionPartSix;
};