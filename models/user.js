"use strict";

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    profile: {
      type: DataTypes.ENUM("Mover", "Customer", "Admin"),
      defaultValue: "Customer",
      allowNull: false
    }
  }, {
      timestamps:true
  });

  User.associate = function(models) {
    // associations can be defined here
    //User.hasMany(models.AuthToken);
  };

  return User;
};
