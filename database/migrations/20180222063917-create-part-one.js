'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PartOnes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11)
      },
      information: {
        type: Sequelize.TEXT
      },
      direction: {
        type: Sequelize.TEXT
      },
      picture_example: {
        type: Sequelize.TEXT
      },
      answer_example: {
        type: Sequelize.TEXT
      },
      full_audio: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('PartOnes');
  }
};