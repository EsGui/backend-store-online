const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());