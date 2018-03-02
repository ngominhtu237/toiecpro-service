'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.TEXT
    },
    username: {
      type: DataTypes.STRING(45),
    },
    fullname: {
      type: DataTypes.STRING(45)
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      unique:true
    },
    email: {
      type: DataTypes.STRING(45)
    },
    address: {
      type: DataTypes.STRING(300)
    },
    job: {
      type: DataTypes.STRING(45)
    },
    isVip: {
      type: DataTypes.INTEGER
    },
    gold_number: {
      type: DataTypes.INTEGER
    },
    date_register: {
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};