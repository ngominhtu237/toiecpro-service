'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11)
      },
      test_name: {
        type: Sequelize.STRING
      },
      test_description: {
        type: Sequelize.TEXT
      },
      isMainTest: {
        type: Sequelize.BOOLEAN
      },
      isLocked: {
        type: Sequelize.BOOLEAN
      },
      idPartOne: {
        type: Sequelize.STRING(11),
        references: {
          model: 'partones',
          key: 'id'
        }
      },
      idPartTwo: {
        type: Sequelize.STRING(11),
        references: {
          model: 'parttwos',
          key: 'id'
        }
      },
      idPartThree: {
        type: Sequelize.STRING(11),
        references: {
          model: 'partthrees',
          key: 'id'
        }
      },
      idPartFour: {
        type: Sequelize.STRING(11),
        references: {
          model: 'partfours',
          key: 'id'
        }
      },
      idPartFive: {
        type: Sequelize.STRING(11),
        references: {
          model: 'partfives',
          key: 'id'
        }
      },
      idPartSix: {
        type: Sequelize.STRING(11),
        references: {
          model: 'partsixes',
          key: 'id'
        }
      },
      idPartSeven: {
        type: Sequelize.STRING(11),
        references: {
          model: 'partsevens',
          key: 'id'
        }
      },
      isCompleteTest: {
        type: Sequelize.BOOLEAN
      },
      testtype_id: {
        type: Sequelize.STRING(11),
        references: {
          model: 'testtypes',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tests');
  }
};