'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./product-typesRoute.js'));
router.use(require('./customers'));
router.use(require('./orders'));
router.use(require('./products'));

module.exports = router;

