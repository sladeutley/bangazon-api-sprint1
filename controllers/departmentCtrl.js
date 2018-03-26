'use strict';
const { getAll } = require('../models/prod-typesModel');

module.exports.getAllDeprtments = (req, res, next) => {
  getAll()
  .then( (departments) => {
    res.status(200).json(departments);
  })
  .catch( (err) => {
    next(err);
  });
};