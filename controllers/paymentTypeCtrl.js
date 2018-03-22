'use strict';

const {
  getAllPaymentTypes,
  getOnePaymentType,
  addNewPaymentType,
  editPaymentType
  deleteOnePaymentType
} = require("../models/paymentTypes");

//Get all Payment Types
module.exports.getPaymentTypes = (req, res, next) => {
  getAllPaymentTypes()
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => {
      next(err);
    });
};

//Get One Payment Type
module.exports.getOnePaymentType = ({ params: { id } }, res, next) => {
  getOnePaymentType(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

//Delete One Payment Type
module.exports.deletePaymentType = ({ params: { id } }, res, next) => {
  deleteOnePaymentType(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

//Add New Payment Type
module.exports.addNewPaymentType = (req, res, next) => {
  console.log('req.body',req.body);
  addNewPaymentType(req.body)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};


module.exports.editPaymentType = (req, res, next) => {
  editPaymentType(req.body, req.params.id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};




