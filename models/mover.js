module.exports = function(sequelize, DataTypes) {
  const Mover = sequelize.define("customer", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    },
  });

  return Customer;
};
