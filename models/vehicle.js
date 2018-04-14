module.exports = function(sequelize, DataTypes) {
  const Vehicle = sequelize.define("vehicle", {
    licenseplate: {
      type: DataTypes.STRING(7)
    },
    make: {
      type: DataTypes.String(50)
    },
    year: {
      type: DataTypes.INTEGER
    },
    model: {
      type: DataTypes.STRING(50)
    },
  });

  Vehicle.associate = function(models) {
    Vehicle.belongs(models.mover);
  };

  return Vehicle;
};
