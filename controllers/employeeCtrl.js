'use strict';
const { getAll } = require('../models/Customer');
const { getOne } = require('../models/Customer');
const { addOneEmployee, editEmployee } = require('../models/Employee');

module.exports.getAllEmployees = (req, res, next) => {
    getAll()
    .then( (emp) => {
        res.status(200).json(emp);
    })
    .catch( (err) => next(err));
};

module.exports.getOneEmployee = (req, res, next) => {
    let empId= req.params.empId;
    getOne(emp)
    .then( (emp) => {
      res.status(200).json(emp);
    })
    .catch( (err) => {
      next(err);
    });
  };

  module.exports.addOneEmployee = (req, res, next) => {
  addOneEmployee(req.body)
    .then(emp => {
      res.status(200).json(emp);
    })
    .catch(err => next(err));
};

module.exports.editEmployee = (req, res, next) => {
  let empId= req.params.empId;
  editEmployee(empId, req.body)
    .then(emp => {
      res.status(200).json(emp);
    })
    .catch(err => next(err));
};
