
'use strict';

const { Router } = require('express');
const router = Router();
const { getAllDepartments, getOneDepartment } = require('../controllers/departmentCtrl.js');

router.get(`/departments`, getAllDepartments);
router.get(`/departments/:id`, getOneDepartment);

module.exports = router;