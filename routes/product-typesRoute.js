
'use strict';

const { Router } = require('express');
const router = Router();
const { getAllProductTypes, getSpecProductType, addOneProductType, editProductTypeInfo, deleteProductTypeInfo } = require('../controllers/prod-typesCtrl.js');

router.get('/product-types', getAllProductTypes);
router.get('/product-types/:id', getSpecProductType);
router.post('/product-types', addOneProductType);
router.put('/product-types/:id', editProductTypeInfo);
router.delete('/product-types/:id', deleteProductTypeInfo);

module.exports = router;
