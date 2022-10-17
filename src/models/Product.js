const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
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
      userId: {
        type: DataTypes.INTEGER,
      },
    }, {
      underscored: true,
    });


  Product.associate = (db) => {
    Product.belongsToMany(db.User, { as: 'user', foreignKey: 'id', through: 'products' });
    Product.hasMany(db.CommentUser, { as: 'commentIdUser', foreignKey: 'productId' })
  }
  
    return Product;
  };
  
  module.exports = ProductModel