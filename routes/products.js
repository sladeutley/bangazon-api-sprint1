const { Router } = require('express');
const dirRouter = Router();
const { getProducts, getOneProduct } = require('../controllers/productsCtrl');

dirRouter.get('/products', getProducts);
dirRouter.get(`/products/:id`, getOneProduct);

module.exports = dirRouter;