const express = require('express');
const authController = require('../controllers/authController');
const { Router } = express;

const router = Router();

router.post('/validatetoken', authController.validateToken);

module.exports = router;
