const authService = require("../services/authServices");
const { User, Product, Favorites, Cart, Sales } = require('../models');

const authController = {
  validateToken: async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({ message: "Token not found!" })
    }
    const dataToken = authService.authToken(authorization);
    const userLogged = await User.findOne({ where: { email: dataToken.data.email }, include: [
      { model: Product, as: 'product' }, 
      { model: Favorites, as: 'productFavorite' },
      { model: Cart, as: 'cartProductsUserId' },
      /* { model: Cart, as: 'cartProductsSellerId' }, */
      { model: Sales, as: 'salesProductsSeller' },
      { model: Sales, as: 'salesProductsBuyer' }
    ] });
    return res.status(200).json({ ...userLogged.dataValues, status: 200, token: authorization });
  },
};

module.exports = authController;