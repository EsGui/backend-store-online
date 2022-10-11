const UserModel = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    imageProduct: {
      type: DataTypes.STRING,
      field: 'image_product'
    },
    nameProduct: {
      type: DataTypes.STRING,
      field: 'name_product'
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id'
    },
    price: {
      type: DataTypes.INTEGER,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id'
    },
    userId: DataTypes.INTEGER,
  }, {
    underscored: true,
  });

  return Cart;
};
  
  module.exports = UserModel;