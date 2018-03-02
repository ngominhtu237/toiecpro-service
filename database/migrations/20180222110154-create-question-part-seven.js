'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionPartSevens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_section: {
        type: Sequelize.TEXT
      },
      second_section: {
        type: Sequelize.TEXT
      },
      question_name: {
        type: Sequelize.TEXT
      },
      optionA: {
        type: Sequelize.TEXT
      },
      optionB: {
        type: Sequelize.TEXT
      },
      optionC: {
        type: Sequelize.TEXT
      },
      optionD: {
        type: Sequelize.TEXT
      },
      answer: {
        type: Sequelize.STRING(5)
      },
      idPartSeven: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partsevens',
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
    return queryInterface.dropTable('QuestionPartSevens');
  }
};