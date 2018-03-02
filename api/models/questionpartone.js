'use strict';
module.exports = (sequelize, DataTypes) => {
  var QuestionPartOne = sequelize.define('QuestionPartOne', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    photo: {
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
    idPartOne: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partones',
        key: 'id'
      },
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionPartOne;
};