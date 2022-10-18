const express = require('express');
const commentController = require('../controllers/commentUserController');

const { Router } = express;

const router = Router();

router.post('/commentuser', commentController.registerComment);
router.get('/comments', commentController.listAllComments)

module.exports = router