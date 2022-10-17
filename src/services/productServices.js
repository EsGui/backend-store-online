const { Product, User, CommentUser } = require('../models');

const productServices = {
  createProduct: async (body) => {
    const newProduct = await Product.create(body);
    return newProduct;
  },

  listProduct: async () => {
    const allProducts = await Product.findAll({ include: [{ model: User, as: 'user' }] });
    return allProducts;
  },

  listProductSpecific: async (id) => {
    const productSpecific = await Product.findOne({ where: { id }, include: [{ model: User, as: 'user' }, { model: CommentUser, as: 'commentIdUser' }] });
    const allUsers = await User.findAll();
    const result = productSpecific.commentIdUser.map((data2) => ({
      ...data2,
      userComment: allUsers.find((data3) => data2.userId === data3.id),
    }))
    return { 
      ...productSpecific.dataValues, 
      commentIdUser: result.map((data) => ({ 
        comentarios: data.dataValues, userComment: 
        data.userComment,
      })) 
    };
  },

  deleteProduct: async (id) => {
    const productDeleted = await Product.destroy({
      where: { id },
    });
    
    return productDeleted;
  },

  updateProduct: async (body, id) => {
    const [productUpdated] = await Product.update(body, { where: { id } });
    return productUpdated;
  },
};

module.exports = productServices;