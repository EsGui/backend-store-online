const { Cart, User, Product } = require('../models')

const cartController = {
  listCart: async (req, res) => {
    const list = await User.findAll();
    return res.status(200).json(list);
  },

  createProductCart: async (req, res) => {
    const { 
      imageProduct,
      nameProduct,
      price,
      userId,
      productId,
      sellerId,
    } = req.body;

    const cartExists = await Cart.findOne({ where: { productId: Number(productId), userId: Number(userId) } });

    console.log('Produto encontrado ==>>', cartExists)

    if (cartExists) {
      return res.status(400).json({ message: 'O produto já está no carrinho!' })
    }
    
    try {
      const productCart = await Cart.create({ 
        imageProduct,
        nameProduct,
        price,
        userId,
        productId,
        sellerId,
      });
      return res.status(200).json(productCart);
    } catch (e) {
      console.error(e);
    }
  },

  specificProductCart: async (req, res) => {
    const { id } = req.params;
    const specific = Product.findOne({ where: { id } });
    return res.status(200).json(specific);
  },

  deleteProductCart: async (req, res) => {
    const { id } = req.params
    const productDeletedCart = await Cart.destroy({
      where: { id },
    });
    
    return productDeletedCart;
  }
}

module.exports = cartController;
