
'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./product-typesRoute'));
router.use(require('./customers'));
router.use(require('./orders'));
router.use(require('./paymentTypes'));
router.use(require('./products'));
router.use(require('./trainingProgs'));
router.use(require('./computers'));
router.use(require('./departmentsRoutes'));


module.exports = router;

