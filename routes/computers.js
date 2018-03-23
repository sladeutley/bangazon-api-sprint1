const { Router } = require("express");
const compRouter = Router();
const { getComputers, getOneComputer, addOneComputer, editComputerInfo, deleteOneComputer } = require("../controllers/compCtrl");

prodsRouter.get(`/computers`, getcomputers);
prodsRouter.get(`/computers/:id`, getOneComputer);
prodsRouter.post(`/computers`, addOneComputer); //its fines they're the same route
prodsRouter.put(`/computers/:id`, editComputerInfo);
prodsRouter.delete(`/computers/:id`, deleteOneComputer);

module.exports = compRouter;