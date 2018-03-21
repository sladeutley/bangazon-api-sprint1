'use strict';
const { getAll } = require('../models/Customer');
const { getOne } = require('../models/Customer');


module.exports.getCustomers = (req, res, next) => {
    getAll()
    .then( (direx) => {
        res.status(200).json(direx);
    })
    .catch( (err) => next(err));
};

module.exports.getOneCustomer = (req, res, next) => {
    let dirId= req.params.dirId;
    getOne(Id)
    .then( (direx) => {
      res.status(200).json(direx);
    })
    .catch( (err) => {
      next(err);
    });
  };