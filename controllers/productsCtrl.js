const { getAll, getOne } = require("../models/Products");

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
