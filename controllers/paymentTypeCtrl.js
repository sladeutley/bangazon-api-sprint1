'use strict';

const {
  getAllPaymentTypes,
  getSinglePaymentType,
  addNewPaymentType,
  editOnePaymentType,
  deleteSinglePaymentType
} = require("../models/paymentTypes");
const {Data} = require ("../models/paymentTypes");

//Get all Payment Types
module.exports.getPaymentTypes = (req, res, next) => {
  getAllPaymentTypes()
    .then(Datas => {
      res.status(200).json(Datas);
    })
    .catch(err => {
      next(err);
    });
};

//Get One Payment Type
module.exports.getOnePaymentType = ({ params: { id } }, res, next) => {
  getSinglePaymentType(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

//Delete One Payment Type
module.exports.deleteOnePaymentType = ({ params: { id } }, res, next) => {
  deleteSinglePaymentType(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

//Add New Payment Type
module.exports.addPaymentType = (req, res, next) => {
  console.log('req.body', req.body);
  addNewPaymentType(req.body)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

//Edit Payment Type
module.exports.editPaymentType = (req, res, next) => {
  editOnePaymentType(req.params.id, req.body)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};




