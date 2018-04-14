module.exports = function(sequelize, DataTypes) {
  const ImageStore = sequelize.define("imagestore", {
    imagetype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB("long")
    },
    imagesize: {
      type: DataTypes.INTEGER
    },
    imagename: {
      type: DataTypes.STRING
    }
  });

  ImageStore.associate = function(models){
      //images belongs to order table
  }

  return ImageStore;
};
