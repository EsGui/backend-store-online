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
  
    return User;
  };
  
  module.exports = UserModel;