const express = require('express');
const registerController = require('../controllers/registerController');

const { Router } = express;

const router = Router();

router.post('/register', registerController.registerUser);

module.exports = router