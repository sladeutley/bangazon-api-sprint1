// http://localhost:8080/api/v1/movies/${id}
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));


module.exports = router;


