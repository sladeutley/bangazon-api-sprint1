'use strict';

const { getAll } = require('../models/Order');

module.exports.getAllOrders = (req, res, next) => {
  getAll()
  .then( (orders) => {
    res.status(200).json(orders);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneOrder = (req, res, next) => {
  getAll()
  
}