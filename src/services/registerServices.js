const { User } = require('../models');

const registerService = {
  validateRegisterEmail: (email) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regexEmail.test(email)) {
      const error = new Error('Email inválido');
      error.name = 'ValidationError';
      throw error;
    }
  },

  validateRegisterPassword: (password) => {
    if (password.length < 6) {
      const error = new Error('A senha deve ter no minimo 6 caracteres');
      error.name = 'ValidationError';
      throw error;
    }
  },

  validateFormatBirthDate: (birthDate) => {
    if (birthDate.length === 10) {
      if (birthDate[2] !== '/') {
        const error = new Error('Data inválida');
        error.name = 'ValidationError';
        throw error;
      } if (birthDate[5] !== '/') {
        const error = new Error('Data inválida');
        error.name = 'ValidationError';
        throw error;
      }
    }
  },

  userExists: async (email) => {
    const userExists = await User.findAll();
    const userExistsDb = userExists.some((user) => user.email === email);
    if (userExistsDb) {
      const error = new Error('E-mail já cadastrado');
      error.name = 'ConflictError';
      throw error;
    }
  },

  registerUser: async (body) => {
    const userRegister = await User.create(body);
    return userRegister;
  }
};

module.exports = registerService;