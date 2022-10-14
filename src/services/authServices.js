const jwtService = require("./jwtServices")

const authService = {
  authToken: (token) => {
    const data = jwtService.validateToken(token);

    return data;
  }
}

module.exports = authService;