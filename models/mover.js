"use strict";

module.exports = (sequelize, DataTypes) => {
  var Mover = sequelize.define("Mover", {
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    checkingaccount: {
      type: DataTypes.INTEGER
    },
    socialsecuirty: {
      type: DataTypes.INTEGER
    },
    workinghours: {
      type: DataTypes.DECIMAL(8, 2)
    },
    licenseplate: {
      type: DataTypes.STRING(7)
    },
    avgrating: {
      type: DataTypes.DECIMAL(3, 1)
    },
    phonenum: {
      type: DataTypes.STRING(10)
    }
  },{
      timestamps:true
  });

  Mover.associate = function(models) {
    Mover.belongsTo(models.User);
    Mover.hasOne(models.Vehicle);
  };

  return Mover;
};
