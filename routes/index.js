const { Router } = require('express');
const router = Router();

router.use(require('./products'));

module.exports = router;