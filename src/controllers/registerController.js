const registerService = require("../services/registerServices");

const registerController = {
  registerUser: async (req, res) => {
    const {
      email,
      password,
      birthDate,
    } = req.body
    registerService.validateRegisterEmail(email);
    registerService.validateRegisterPassword(password);
    registerService.validateFormatBirthDate(birthDate);
    await registerService.userExists(email);
    await registerService.registerUser(req.body);
    return res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  }
}

module.exports = registerController;