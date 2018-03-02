'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.TEXT
      },
      username: {
        type: Sequelize.STRING(45),
      },
      fullname: {
        type: Sequelize.STRING(45)
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(15),
        unique:true
      },
      email: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(300)
      },
      job: {
        type: Sequelize.STRING(45)
      },
      isVip: {
        type: Sequelize.INTEGER
      },
      gold_number: {
        type: Sequelize.INTEGER
      },
      date_register: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Users');
  }
};