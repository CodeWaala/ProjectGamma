"use strict";
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define(
    "Order",
    {
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

  Order.associate = function(models) {
    //Order belongs to Customer and to Mover when accepted
    Order.belongsTo(models.Customer);
    //Order.belongsToMany(models.Mover, {through : "MoverOrders"});
    Order.belongsTo(models.Mover);
  };

  return Order;
};
