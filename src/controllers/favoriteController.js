const { User, Favorites, Product, Cart, Sales } = require('../models');

const favoritesController = {
  allFavorite: async (_req, res) => {
    try {
      const favorites = await User.findAll({
        include: [
          { model: Favorites, as: 'productFavorite' },
        ],
      });
      return res.status(200).json(favorites);
    } catch (e) {
      console.error(e);
    }

    return res.status(400).json({ message: 'Algo deu errado' })
  },

  createFavorite: async(req, res) => {
    const { 
      nameProduct, 
      price, 
      imageProduct, 
      userId,
      productId,
    } = req.body;
    try {
      /* const favoriteExists = await Favorites.findOne({ where: { productId: Number(productId) } }); */

      const userLogged = await User.findOne({ where: { id: userId }, include: [
        { model: Product, as: 'product' }, 
        { model: Favorites, as: 'productFavorite' },
        { model: Cart, as: 'cartProductsUserId' },
        /* { model: Cart, as: 'cartProductsSellerId' }, */
        { model: Sales, as: 'salesProductsSeller' },
        { model: Sales, as: 'salesProductsBuyer' }
      ] });

      for (let index = 0; index < userLogged.productFavorite.length; index += 1) {
        if (Number(userLogged.productFavorite[index].productId) === Number(productId)) {
          return res.status(200).json({ message: 'O Produto já está no carrinho' })
        }
      }

      /* if (favoriteExists) {
        return res.status(400).json({ message: 'O produto já está favoritado!' })
      } */

      const favoriteCreate = await Favorites.create({ 
        nameProduct, 
        price, 
        imageProduct,
        userId,
        productId,
      })
      return res.status(200).json(favoriteCreate);
    } catch (e) {
      console.error(e);
    }
    return res.status(400).json({ message: 'Algo deu errado!' });
  },

  deleteFavorite: async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    try {
      const favoriteDeleted = await Favorites.destroy({
        where: { id },
      });
  
      return res.status(200).json(favoriteDeleted);
    } catch (e) {
      console.error(e);
    }

    return res.status(400).json({ message: 'Algo deu errado!' })
  }
}

module.exports = favoritesController