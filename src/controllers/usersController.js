const jwtService = require("../services/jwtServices");
const userServices = require("../services/userServices");

const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    userServices.emptyFields(email, password);
    userServices.validationData(email, password);
    await userServices.validateUserBd(email, password);
    const token = jwtService.createToken({ email });
    return res.status(200).json({ token });
  },

  listUser: async (_req, res) => {
    const users = await userServices.listUser();
    return res.status(200).json(users);
  },
}

module.exports = userController;