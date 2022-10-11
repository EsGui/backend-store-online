const { User } = require('../models');

const userServices = {
  validationData: (email, password) => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regexEmail.test(email) || password.length < 6) {
      const error = new Error('Email ou senha inválido!');
      error.name = 'ValidationError';
      throw error;
    }
  },

  emptyFields: (email, password) => {
    if (!email || !password) {
      const error = new Error('Email e senha são obrigatórios!');
      error.name = 'ValidationError';
      throw error;
    }
  },

  validateUserBd: async (email, password) => {
    const userBd = await User.findAll();
    const userExists = userBd.some((user) => user.email === email && user.password === password);
    if (!userExists) {
      const error = new Error('Email não cadastrado!');
      error.name = 'ValidationError';
      throw error;
    }
  },

  listUser: async () => {
    const users = await User.findAll();
    return users
  }
}

module.exports = userServices;