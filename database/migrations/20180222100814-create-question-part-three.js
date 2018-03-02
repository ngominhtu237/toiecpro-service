'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionPartThrees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_name: {
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
      idPartThree: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partthrees',
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
    return queryInterface.dropTable('QuestionPartThrees');
  }
};