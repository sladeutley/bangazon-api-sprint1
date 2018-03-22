'use strict';
const { Router } = require('express');
const router = Router();
router.use(require('./product-typesRoute.js'));
module.exports = router;