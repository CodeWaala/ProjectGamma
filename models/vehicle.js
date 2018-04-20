"use strict";

module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define(
    "Vehicle",
    {
      licenseplate: {
        type: DataTypes.STRING(7),
        allowNull: false
      },
      make: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      model: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
    //   createdAt: {
    //     type: DataTypes.DATE(3),
    //     defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)")
    //   },
    //   updatedAt: {
    //     type: DataTypes.DATE(3),
    //     defaultValue: sequelize.literal(
    //       "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
    //     )
    //   }
    },
    {
      timestamps: false
    }
  );

  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.Mover);
  };

  return Vehicle;
};
