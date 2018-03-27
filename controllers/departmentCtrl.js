'use strict';
const { getAll, getOne, addOne, editOne } = require('../models/departmentModel.js');

module.exports.getAllDepartments = (req, res, next) => {
  getAll()
  .then( (departments) => {
    res.status(200).json(departments);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getOneDepartment = ({params: {id}}, res, next) => {
  getOne(id)
  .then((departments) => {
    res.status(200).json(departments);
  })
  .catch((err) =>{
    next(err);
  });
};

module.exports.addOneDepartment = (req, res, next) => {
  addOne(req.body)
  .then((departments) => {
    res.status(200).json(departments);
  })
  .catch((err) =>{
    next(err);
  });
};

module.exports.editDepartments = (req, res, next) => {
  editOne(req.params.id, req.body)
    .then(departments => {
      res.status(200).json(departments);
    })
    .catch(err => next(err));
};