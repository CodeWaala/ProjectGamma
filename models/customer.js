module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define("customer", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING(50),
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      notEmpty: true
    },
    phonenum: {
      type: DataTypes.STRING(10),
      notEmpty: true
    },
    cardnum: {
      type: DataTypes.BIGINT,
      notEmpty: true,
       validate:{
        isCreditCard: true
       }
    },
  });

  Customer.associate = function(models) {
    Customer.belongsTo(models.User);
  };

  return Customer;
};
