'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING,
        field: 'product_name'
      },
      price: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      sold: {
        type: Sequelize.INTEGER,
      },
      usedProduct: {
        type: Sequelize.STRING,
        field: 'used_product'
      },
      newProduct: {
        type: Sequelize.STRING,
        field: 'new_product'
      },
      description: {
        type: Sequelize.STRING
      },
      imageProduct: {
        type: Sequelize.STRING,
        field: 'image_product',
      },
      category: {
        type: Sequelize.STRING,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'buyer_id',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};