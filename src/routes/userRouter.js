const express = require('express');

const { Router } = express;

const router = Router();

router.post('/login');
router.get('/users');

module.exports = router