
const { Router } = require("express");
const prodsRouter = Router();
const { getProducts, getOneProduct, addOneProduct } = require("../controllers/productsCtrl");

prodsRouter.get(`/products`, getProducts);
prodsRouter.get(`/products/:id`, getOneProduct);
prodsRouter.post(`/products`, addOneProduct); //its fines they're the same route

module.exports = prodsRouter;
