"use strict";

const { Router } = require("express");
const router = Router();
const {
  getPaymentTypes,
  getOnePaymentType,
  addPaymentType,
  editPaymentType,
  deleteOnePaymentType
} = require("../controllers/paymentTypeCtrl");

router.get("/paymentTypes", getPaymentTypes);
router.get("/paymentTypes/:id", getOnePaymentType);
router.post("/paymentTypes", addPaymentType);
router.put("/paymentTypes/:id", editPaymentType);
router.delete("/paymentTypes/:id", deleteOnePaymentType);

module.exports = router;