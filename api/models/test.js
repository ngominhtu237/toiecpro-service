'use strict';
module.exports = (sequelize, DataTypes) => {
  var Test = sequelize.define('Test', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(11)
    },
    test_name: {
      type: DataTypes.STRING
    },
    test_description: {
      type: DataTypes.TEXT
    },
    isMainTest: {
      type: DataTypes.BOOLEAN
    },
    isLocked: {
      type: DataTypes.BOOLEAN
    },
    idPartOne: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partones',
        key: 'id'
      }
    },
    idPartTwo: {
      type: DataTypes.STRING(11),
      references: {
        model: 'parttwos',
        key: 'id'
      }
    },
    idPartThree: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partthrees',
        key: 'id'
      }
    },
    idPartFour: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partfours',
        key: 'id'
      }
    },
    idPartFive: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partfives',
        key: 'id'
      }
    },
    idPartSix: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partsixes',
        key: 'id'
      }
    },
    idPartSeven: {
      type: DataTypes.STRING(11),
      references: {
        model: 'partsevens',
        key: 'id'
      }
    },
    isCompleteTest: {
      type: DataTypes.BOOLEAN
    },
    testtype_id: {
      type: DataTypes.STRING(11),
      references: {
        model: 'testtypes',
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
  return Test;
};