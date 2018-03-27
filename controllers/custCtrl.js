'use strict';

const { getAll, getOne, addOneCustomer, editCust, getCustomersWhoDontBuyStuff } = require('../models/Customer');

// if query params of 'customers/?active=false is there, only get customers who don't buy stuff, otherwise get all customers
module.exports.getAllCustomers = (req, res, next) => {
  if ((req.query.active === "false")) {
    getCustomersWhoDontBuyStuff()
      .then(cust => {
        res.status(200).json(cust);
      })
      .catch(err => next(err));
  } else if (req.url === '/customers') {
    getAll()
      .then(cust => {
        res.status(200).json(cust);
      })
      .catch(err => next(err));
  }
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
  addOneCustomer(req.body)
    .then(cust => {
      res.status(200).json(cust);
    })
    .catch(err => next(err));
};

module.exports.editCust = (req, res, next) => {
  let custId= req.params.custId;
  editCust(custId, req.body)
    .then(cust => {
      res.status(200).json(cust);
    })
    .catch(err => next(err));
};
