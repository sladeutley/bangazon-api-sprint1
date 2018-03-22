const { getAll, getOne, addOne, editOne, deleteOne } = require("../models/Products");

module.exports.getProducts = (req, res, next) => {
  getAll()
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};

module.exports.getOneProduct = (req, res, next) => {
  getOne(req.params.id)
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};

module.exports.addOneProduct = (req, res, next) => {
  addOne(req.body)
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};

module.exports.editProductInfo = (req, res, next) => {
  editOne(req.params.id, req.body)
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};

module.exports.deleteOneProduct = (req, res, next) => {
  deleteOne(req.params.id)
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};