'use strict';
const { Router } = require('express');
const orderRouter = Router();

const { getAllOrders, getOneOrder, addOneOrder, editOrder, deleteOrder } = require('../controllers/orderCtrl');

orderRouter.get('/orders', getAllOrders);
orderRouter.get('/orders/:id', getOneOrder);

orderRouter.post('/orders/', addOneOrder);
orderRouter.put('/orders/:id', editOrder);
orderRouter.delete('/orders/:id', deleteOrder)

module.exports = orderRouter;