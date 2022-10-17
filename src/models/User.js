const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name'
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
      },
      imageUser: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      birthDate: { 
        type: DataTypes.STRING,
        field: 'birth_date',
      },
      phone: DataTypes.STRING,
      cep: DataTypes.STRING,
      genre: {
        type: DataTypes.STRING,
      },
      state: DataTypes.STRING,
      city: DataTypes.STRING,
    }, {
      underscored: true,
    });

    User.associate = (db) => {
      User.hasMany(db.Product, { as: 'product', foreignKey: 'userId' });
      User.belongsToMany(db.CommentUser, { as: 'comment', foreignKey: 'id', through: 'comment_user' });
      User.hasMany(db.Favorites, { as: 'productFavorite', foreignKey: 'userId' });
      User.hasMany(db.Cart, { as: 'cartProductsUserId', foreignKey: 'userId' });
      /* User.hasMany(db.Cart, { as: 'cartProductsSellerId', foreignKey: 'sellerId' }); */
      User.hasMany(db.Sales, { as: 'salesProductsSeller', foreignKey: 'sellerId' });
      User.hasMany(db.Sales, { as: 'salesProductsBuyer', foreignKey: 'buyerId' });
    }
  
    return User;
  };
  
  module.exports = UserModel;