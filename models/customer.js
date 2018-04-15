'use strict';

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define("Customer", {
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
       validate:{
        isCreditCard: true
       }
    },

  }, {
      timestamps:true
  });

  Customer.associate = function(models) {
    Customer.belongsTo(models.User);
    Customer.hasMany(models.ImageStore);  //ask Joey
    Customer.hasMany(models.Order);
  };

  return Customer;
};
