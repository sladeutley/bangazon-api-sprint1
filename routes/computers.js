const { Router } = require("express");
const compRouter = Router();
const { getComputers, getOneComputer, addOneComputer, editComputerInfo, deleteOneComputer } = require("../controllers/compCtrl");

compRouter.get(`/computers`, getComputers);
compRouter.get(`/computers/:id`, getOneComputer);
compRouter.post(`/computers`, addOneComputer); //its fines they're the same route
compRouter.put(`/computers/:id`, editComputerInfo);
compRouter.delete(`/computers/:id`, deleteOneComputer);

module.exports = compRouter;