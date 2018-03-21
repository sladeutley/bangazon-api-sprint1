'use strict';
const { getAll } = require('../models/Customer');
const { getOne } = require('../models/Customer');


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

