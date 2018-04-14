module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("order", {
    orderstatus: {
      type: DataTypes.ENUM("accepted", "canceled", "pending", "completed"),
      defaultValue: "pending"
    },
    toaddress: {
      type: DataTypes.STRING(50)
    },
    fromaddress: {
      type: DataTypes.STRING(50)
    },
    expectedprice: {
      type: DataTypes.DECIMAL(8, 2)
    },
    totaldistance: {
      type: DataTypes.INTEGER
    },
    totaltime: {
      type: DataTypes.NUMERIC
    },
  });

  Order.associate = function(models) {
    //Order belongs to Customer and to Mover when accepted
  };

  return Order;
};
