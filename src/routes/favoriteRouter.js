const express = require('express');
const favoritesController = require('../controllers/favoriteController');

const { Router } = express;

const router = Router();

router.get('/favoritesuser', favoritesController.allFavorite);
router.post('/createfavorite', favoritesController.createFavorite);
router.post('/deletefavorite/:id', favoritesController.deleteFavorite);

module.exports = router