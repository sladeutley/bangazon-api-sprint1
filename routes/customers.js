const { Router } = require('express');
const custRouter = Router();
const { getAllCustomers, getOneCust } = require('../controllers/custCtrl');


movieRouter.get("/movies", getAllCustomers);
movieRouter.get('/movies/:movieId', getOneCust);

module.exports = custRouter;