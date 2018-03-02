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
      },
      idPartTwo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'parttwos',
          key: 'id'
        },
        allowNull: false
      },
      idPartThree: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partthrees',
          key: 'id'
        },
        allowNull: false
      },
      idPartFour: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partfours',
          key: 'id'
        },
        allowNull: false
      },
      idPartFive: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partfives',
          key: 'id'
        },
        allowNull: false
      },
      idPartSix: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partsixes',
          key: 'id'
        },
        allowNull: false
      },
      idPartSeven: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partsevens',
          key: 'id'
        },
        allowNull: false
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