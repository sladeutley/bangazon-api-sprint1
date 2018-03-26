'use strict';
const { getAll, getOne } = require('../models/departmentModel.js');

module.exports.getAllDepartments = (req, res, next) => {
  console.log('getAllDepartments');
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