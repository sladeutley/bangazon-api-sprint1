'use strict';
const { getAll } = require('../models/Customer');
const { getOne } = require('../models/Customer');
const { addOneCustomer } = require('../models/Customer');

module.exports.getAllCustomers = (req, res, next) => {
    getAll()
    .then( (cust) => {
        res.status(200).json(cust);
    })
    .catch( (err) => next(err));
};

module.exports.getOneCustomer = (req, res, next) => {
    let custId= req.params.custId;
    getOne(custId)
    .then( (cust) => {
      res.status(200).json(cust);
    })
    .catch( (err) => {
      next(err);
    });
  };

  module.exports.addOneCustomer = (req, res, next) => {
  console.log('req.body',req.body);
  addOneCustomer(req.body)
    .then(cust => {
      res.status(200).json(cust);
    })
    .catch(err => next(err));
};

