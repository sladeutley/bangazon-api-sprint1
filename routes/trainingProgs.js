'use strict';
const { Router } = require('express');
const orderRouter = Router();

const { getAllPrograms, getOneProgram, addOneProgram, editProgram, deleteProgram } = require('../controllers/trainingProgCtrl');

orderRouter.get('/trainingProgs', getAllPrograms);
orderRouter.get('/trainingProgs/:id', getOneProgram);

orderRouter.post('/trainingProgs/', addOneProgram);
orderRouter.put('/trainingProgs/:id', editProgram);
orderRouter.delete('/trainingProgs/:id', deleteProgram);

module.exports = orderRouter;