const { Router } = require('express');
const custRouter = Router();
const { getAllCustomers, getOneCustomer, addOneCustomer } = require('../controllers/custCtrl');


custRouter.get("/customers", getAllCustomers);
custRouter.get("/customers/:custId", getOneCustomer);
custRouter.post("/customers", addOneCustomer);

module.exports = custRouter;



