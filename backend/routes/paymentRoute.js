import express from "express";
import { createOrder, verifyPayment } from "../controller/paymentController.js";
import auth from "../middleware/auth.js"; // Optional: Protect routes

const router = express.Router();

router.post("/payment/create-order", auth, createOrder);
router.post("/payment/verify", verifyPayment);

export default router;
