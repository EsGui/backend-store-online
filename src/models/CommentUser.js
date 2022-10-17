const UserModel = (sequelize, DataTypes) => {
    const CommentUser = sequelize.define('CommentUser', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      commentProduct: {
        type: DataTypes.STRING,
        field: 'comment_product'
      },
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    }, {
      underscored: true,
    });

    CommentUser.associate = (db) => {
      CommentUser.belongsToMany(db.User, { as: 'user', foreignKey: 'id', through: 'CommentUser' });
      /* CommentUser.belongsToMany(db.Product, { as: 'product', foreignKey: 'id', through: 'CommentUser' }); */
      CommentUser.hasOne(db.Product, { as: 'product', foreignKey: 'id' });
    }
  
    return CommentUser;
  };
  
  module.exports = UserModel;