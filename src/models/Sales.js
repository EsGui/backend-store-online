const ProductModel = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sales', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      productName: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      usedProduct: DataTypes.STRING,
      newProduct: DataTypes.STRING,
      description: DataTypes.STRING,
      imageProduct: DataTypes.STRING,
      category: DataTypes.STRING,
      sellerId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
    }, {
      underscored: true,
    });
  
    return Sales;
  };
  
  module.exports = ProductModel