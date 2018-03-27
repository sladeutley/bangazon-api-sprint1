
'use strict';

const { Router } = require('express');
const router = Router();
const { getAllDepartments, getOneDepartment, addOneDepartment, editDepartments } = require('../controllers/departmentCtrl.js');

router.get(`/departments`, getAllDepartments);
router.get(`/departments/:id`, getOneDepartment);
router.post(`/departments`, addOneDepartment)
router.put('/departments/:id', editDepartments);
module.exports = router;