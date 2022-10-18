const { Cart, User, Product, Favorites, Sales } = require('../models')

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

    const userLogged = await User.findOne({ where: { id: userId }, include: [
      { model: Product, as: 'product' }, 
      { model: Favorites, as: 'productFavorite' },
      { model: Cart, as: 'cartProductsUserId' },
      /* { model: Cart, as: 'cartProductsSellerId' }, */
      { model: Sales, as: 'salesProductsSeller' },
      { model: Sales, as: 'salesProductsBuyer' }
    ] });

    for (let index = 0; index < userLogged.cartProductsUserId.length; index += 1) {
      if (Number(userLogged.cartProductsUserId[index].productId) === Number(productId)) {
        return res.status(200).json({ message: 'O Produto já está no carrinho' })
      }
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
