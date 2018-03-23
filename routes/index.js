const { Router } = require('express');
const router = Router();

router.use(require('./paymentTypes'));

module.exports = router;