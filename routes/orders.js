'use strict';
const { Router } = require('express');
const orderRouter = Router();

const { getAllOrders, getOneOrder } = require('../controllers/orderCtrl');

orderRouter.get('/orders', getAllOrders);
orderRouter.get('/orders/:id', getOneOrder);


module.exports = orderRouter;