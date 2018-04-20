"use strict";

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define(
    "Customer",
    {
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      phonenum: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      cardnum: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          isCreditCard: true
        }
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

  Customer.associate = function(models) {
    Customer.belongsTo(models.User);
    Customer.hasMany(models.ImageStore); //ask Joey
    Customer.hasMany(models.Order);
  };

  return Customer;
};
