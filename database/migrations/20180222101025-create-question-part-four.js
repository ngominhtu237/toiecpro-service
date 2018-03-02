'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuestionPartFours', {
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
      idPartFour: {
        type: Sequelize.INTEGER,
        references: {
          model: 'partfours',
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
    return queryInterface.dropTable('QuestionPartFours');
  }
};