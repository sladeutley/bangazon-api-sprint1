const { Router } = require('express');
const custRouter = Router();
const { getAllCustomers, getOneCustomer, addOneCustomer, changeCust } = require('../controllers/custCtrl');


custRouter.get("/customers", getAllCustomers);
custRouter.get("/customers/:custId", getOneCustomer);
custRouter.post("/customers", addOneCustomer);
custRouter.put("/customers/:custId", changeCust);

module.exports = custRouter;



