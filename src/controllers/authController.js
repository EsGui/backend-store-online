const authService = require("../services/authService");
const { User } = require('../models');

const authController = {
  validateToken: async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({ message: "Token not found!" })
    }
    const dataToken = authService.authToken(authorization);
    const userLogged = await User.findOne({ where: { email: dataToken.data.email } });
    return res.status(200).json({ ...userLogged.dataValues, status: 200 });
  },
};

module.exports = authController;