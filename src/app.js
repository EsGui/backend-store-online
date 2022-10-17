// Dependências
const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');
const cors = require('cors');

// Rotas
const userRouter = require('./routes/userRouter');
const registerRouter = require('./routes/registerRouter');
const authRouter = require('./routes/authRouter');
const productsRouter = require('./routes/productsRouter');
const cartRouter = require('./routes/cartRouter');

//middleware de erro
const middlewareError = require('./middlewares/errors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);
app.use(registerRouter);
app.use(authRouter);
app.use(productsRouter);
app.use(cartRouter);
app.use(middlewareError);

app.listen(3001, () => {
  console.log(`Rodando na porta ${ 3001 }`);
});