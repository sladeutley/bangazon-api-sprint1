const { Router } = require('express');
const dirRouter = Router();
const { getProducts } = require('../controllers/productsCtrl');

dirRouter.get('/products', getProducts);

module.exports = dirRouter;