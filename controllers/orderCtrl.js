'use strict';

const { getAll, getOne, addOne, editOne, deleteOne } = require('../models/Order');
const Order = require("../models/Order");

// Get all orders
module.exports.getAllOrders = (req, res, next) => {
  getAll()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => {
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
        let error = new Error("Order not found");
        next(error);
      }
    })
    .catch(err => next(err));
};

// Post one order
module.exports.addOneOrder = (req, res, next) => {
  addOne(req.body)
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};

// Put/edit one order
module.exports.editOrder = (req, res, next) => {
  editOne(req.params.id, req.body)
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};

// Delete one order
module.exports.deleteOrder = (req, res, next) => {
  deleteOne(req.params.id)
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};




