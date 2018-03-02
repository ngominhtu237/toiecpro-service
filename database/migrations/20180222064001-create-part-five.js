'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PartFives', {
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
    return queryInterface.dropTable('PartFives');
  }
};