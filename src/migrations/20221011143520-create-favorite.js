'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING,
        field: 'name_product'
      },
      price: {
        type: Sequelize.INTEGER,
      },
      imageProduct: {
        type: Sequelize.STRING,
        field: 'image_product'
      },
      productId: {
        type: Sequelize.STRING,
        field: 'product_id',
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favorites');
  }
};