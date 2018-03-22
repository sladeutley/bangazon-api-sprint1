'use strict';
const { Router } = require('express');
const orderRouter = Router();

const { getAllOrders, getOneOrder, addOneOrder, editOrder } = require('../controllers/orderCtrl');

orderRouter.get('/orders', getAllOrders);
orderRouter.get('/orders/:id', getOneOrder);

orderRouter.post('/orders/', addOneOrder);
orderRouter.put('/orders/:id', editOrder);

module.exports = orderRouter;