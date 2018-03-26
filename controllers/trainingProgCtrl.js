'use strict';

const { getAll, getOne, addOne, editOne, deleteOne } = require('../models/TrainingProg');
const TrainingProg = require("../models/TrainingProg");

// Get all training programs
module.exports.getAllPrograms = (req, res, next) => {
  getAll()
    .then(programs => {
      res.status(200).json(programs);
    })
    .catch(err => {
      next(err);
    });
};

// Get one training program
module.exports.getOneProgram = ({ params: { id } }, res, next) => {
  TrainingProg.getOne(id)
    .then(program => {
      if (program) {
        res.status(200).json(program);
      } else {
        let error = new Error("Training Program not found");
        next(error);
      }
    })
    .catch(err => next(err));
};

// Post one training program
module.exports.addOneProgram = (req, res, next) => {
  addOne(req.body)
    .then(program => {
      res.status(200).json(program);
    })
    .catch(err => next(err));
};

// Put/edit one training program
module.exports.editProgram = (req, res, next) => {
  editOne(req.params.id, req.body)
    .then(programs => {
      res.status(200).json(programs);
    })
    .catch(err => next(err));
};

// Delete one training program
module.exports.deleteProgram = (req, res, next) => {
  deleteOne(req.params.id)
    .then(program => {
      res.status(200).json(program);
    })
    .catch(err => next(err));
};

