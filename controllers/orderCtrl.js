'use strict';

const { getAll, getOne } = require('../models/Order');
const Order = require("../models/Order");

// Get all orders
module.exports.getAllOrders = (req, res, next) => {
  getAll()
  .then( (orders) => {
    res.status(200).json(orders);
  })
  .catch( (err) => {
    next(err);
  });
};

// Get one order
module.exports.getOneOrder = ({ params: { id } }, res, next) => {
  Order.getOne(id)
    .then(order => {
      if (order) {
        res.status(200).json(order);
      } else {
        let error = new Error("Order not found")
        next(error)
      };
    })
    .catch(err => next(err));
};

// Post one order
module.exports.addOneOrder = (req, res, next) => {
  console.log('req.body',req.body);
  addOne(req.body)
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};