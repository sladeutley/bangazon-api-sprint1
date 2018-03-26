const { getAll, getOne, addOne, editOne, deleteOne } = require("../models/Computers");

module.exports.getComputers = (req, res, next) => {
  getAll()
    .then(comps => {
      res.status(200).json(comps);
    })
    .catch(err => next(err));
};

module.exports.getOneComputer = (req, res, next) => {
  getOne(req.params.id)
    .then(comps => {
      res.status(200).json(comps);
    })
    .catch(err => next(err));
};

module.exports.addOneComputer = (req, res, next) => {
  addOne(req.body)
    .then(comps => {
      res.status(200).json(comps);
    })
    .catch(err => next(err));
};

module.exports.editComputerInfo = (req, res, next) => {
  editOne(req.params.id, req.body)
    .then(comps => {
      res.status(200).json(comps);
    })
    .catch(err => next(err));
};

module.exports.deleteOneComputer = (req, res, next) => {
  deleteOne(req.params.id)
    .then(comps => {
      res.status(200).json(comps);
    })
    .catch(err => next(err));
};