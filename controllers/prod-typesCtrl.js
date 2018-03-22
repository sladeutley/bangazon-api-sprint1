'use strict';
const { getAll, getOne, addOne, editOne, deleteOne } = require('../models/prod-typesModel');

module.exports.getAllProductTypes = (req, res, next) => {
  getAll()
  .then( (productTypes) => {
    res.status(200).json(productTypes);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.getSpecProductType = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (productTypes) =>{
    res.status(200).json(productTypes)
  })
  .catch( (err) => { 
    next(err) }
  ); 
};

module.exports.addOneProductType = (req, res, next) => {
  console.log('req.body',req.body);
  addOne(req.body)
  .then( (productTypes) =>{
    res.status(200).json(productTypes)
  })
  .catch( (err) => { 
    next(err) }
  );    
};

module.exports.editProductTypeInfo = (req, res, next) => {
  editOne(req.params.id, req.body)
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};

module.exports.deleteProductTypeInfo = (req, res, next) => {
  deleteOne(req.params.id)
    .then(prods => {
      res.status(200).json(prods);
      console.log('did it delete?');
    })
    .catch(err => next(err));
};