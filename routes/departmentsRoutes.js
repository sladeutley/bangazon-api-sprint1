
'use strict';

const { Router } = require('express');
const router = Router();
const { getAllDepartments } = require('../controllers/departmentsCtrl.js');

router.get('/departments', getAllDepartments);
// router.get('/product-types/:id', getSpecProductType);
// router.post('/product-types', addOneProductType);
// router.put('/product-types/:id', editProductTypeInfo);
// router.delete('/product-types/:id', deleteProductTypeInfo);

module.exports = router;