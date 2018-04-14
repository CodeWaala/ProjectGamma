module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.authtoken);
  };

  return User;
};
