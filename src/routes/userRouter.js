const express = require('express');
const userController = require('../controllers/usersController');

const { Router } = express;

const router = Router();

router.post('/login', userController.login);
router.get('/users', userController.listUser);

module.exports = router