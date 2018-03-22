'use strict';
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));
router.use(require('./orders'));



module.exports = router;


