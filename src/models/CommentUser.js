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
  
    return CommentUser;
  };
  
  module.exports = UserModel;