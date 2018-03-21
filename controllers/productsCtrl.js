const { getAll } = require("../models/Products");

module.exports.getProducts = (req, res, next) => {
console.log("hello?")  
  getAll()
    .then(prods => {
      res.status(200).json(prods);
    })
    .catch(err => next(err));
};
