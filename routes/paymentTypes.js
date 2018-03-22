"use strict";

const { Router } = require("express");
const router = Router();
const {
  getPaymentTypes,
  getOnePaymentType
} = require("../controllers/paymentTypeCtrl");

router.get("/paymentTypes", getPaymentTypes);
router.get("/paymentTypes/:id", getOnePaymentType);
router.put("/paymentTypes/:id", editNewPaymentType)
router.post("/paymentTypes", addPaymentType);
router.delete("/paymentTypes/:id", deletePaymentType);

module.exports = router;