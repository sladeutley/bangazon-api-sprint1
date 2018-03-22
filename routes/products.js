
const { Router } = require("express");
const prodsRouter = Router();
const { getProducts, getOneProduct, addOneProduct, editProductInfo, deleteOneProduct } = require("../controllers/productsCtrl");

prodsRouter.get(`/products`, getProducts);
prodsRouter.get(`/products/:id`, getOneProduct);
prodsRouter.post(`/products`, addOneProduct); //its fines they're the same route
prodsRouter.put(`/products/:id`, editProductInfo);
prodsRouter.delete(`/products/:id`, deleteOneProduct);

module.exports = prodsRouter;
