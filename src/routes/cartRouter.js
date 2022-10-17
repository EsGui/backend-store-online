const express = require('express');
const cartController = require('../controllers/cartController');

const { Router } = express;

const router = Router();

router.get('/listcart', cartController.listCart);
router.post('/createcart', cartController.createProductCart);
router.post('/listcartspecific/:id', cartController.specificProductCart);
router.post('/listcartsdeleted/:id', cartController.deleteProductCart);

module.exports = router;
