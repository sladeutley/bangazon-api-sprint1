const { Router } = require('express');
const custRouter = Router();
const { getAllCustomers, getOneCustomer, addOneCustomer, editCust } = require('../controllers/custCtrl');


custRouter.get("/customers", getAllCustomers);
custRouter.get("/customers/:custId", getOneCustomer);
custRouter.post("/customers", addOneCustomer);
custRouter.put("/customers/:custId", editCust);

module.exports = custRouter;



