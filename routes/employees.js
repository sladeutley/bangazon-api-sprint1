const { Router } = require('express');
const empRouter = Router();
const { getAllEmployees, getOneEmployee, addOneEmployee, editEmployee } = require('../controllers/employeeCtrl');


empRouter.get("/employees", getAllEmployees);
empRouter.get("/employees/:empId", getOneEmployee);
empRouter.post("/employees", addOneEmployee);
empRouter.put("/employees/:empId", editEmployee);

module.exports = empRouter;

