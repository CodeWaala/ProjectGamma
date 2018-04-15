'use strict';

module.exports = (sequelize, DataTypes) => {
  var ImageStore = sequelize.define("ImageStore", {
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
  }, {
      timestamps : true
  });

  ImageStore.associate = function(models){
      //images belongs to order table
      ImageStore.belongsTo(models.Customer);
  }

  return ImageStore;
};
