const FavoritesModel = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nameProduct: {
      type: DataTypes.STRING,
      field: 'name_product'
    },
    price: {
      type: DataTypes.INTEGER,
    },
    imageProduct: {
      type: DataTypes.STRING,
      field: 'image_product'
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    }
  }, {
    underscored: true,
    timestamps: false,
  });
  
  return Favorites;
};
  
  module.exports = FavoritesModel;