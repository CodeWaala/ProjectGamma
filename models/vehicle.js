'use strict';

module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define("Vehicle", {
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
      allowNull : true
    }
  }, {
      timestamps:true
  });

  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.Mover);
  };

  return Vehicle;
};
