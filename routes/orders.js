'use strict';
const { Router } = require('express');
const orderRouter = Router();

const { getAllOrders } = require('../controllers/orderCtrl');

orderRouter.get('/orders', getAllOrders);

module.exports = orderRouter;