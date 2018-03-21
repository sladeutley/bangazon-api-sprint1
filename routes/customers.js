const { Router } = require('express');
const custRouter = Router();
const { getAllCustomers, getOneCustomer } = require('../controllers/custCtrl');


custRouter.get("/customers", getAllCustomers);
custRouter.get('/customers/:custId', getOneCustomer);

module.exports = custRouter;



