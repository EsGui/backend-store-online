const express = require('express');
const productController = require('../controllers/productsController');

const { Router } = express;

const router = Router();

router.post('/registerproduct', productController.createProduct);
router.get('/products', productController.listProduct);
router.post('/product/:id', productController.listProductSpecific);
router.post('/productsdelete/:id', productController.deleteProduct);
router.post('/productsupdate/:id', productController.updateProduct);

module.exports = router