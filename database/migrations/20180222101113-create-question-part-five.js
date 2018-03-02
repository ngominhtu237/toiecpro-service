'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionPartFives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_part_question: {
        type: Sequelize.STRING
      },
      last_part_question: {
        type: Sequelize.STRING
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
      idPartFive: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partfives',
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
    return queryInterface.dropTable('QuestionPartFives');
  }
};