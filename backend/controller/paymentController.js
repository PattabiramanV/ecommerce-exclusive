import crypto from "crypto";
import razorpay from "../utils/razorpay.js";
import Order from "../models/Order.js";
import Payment from "../models/Payment.js";
import auth from "../middleware/auth.js";
// Create Razorpay Order and persist in DB
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({ success: false, message: "Razorpay not configured" });
    }

    const options = {
      amount: Math.round(amount * 100), // in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const rpOrder = await razorpay.orders.create(options);

    const userId = req.user?.userId; // requires auth middleware
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const orderDoc = await Order.create({
      userId,
      amount,
      status: "CREATED",
      razorpayOrderId: rpOrder.id,
    });

    return res.status(200).json({
      success: true,
      message: "Order created in database",
      orderId: orderDoc._id,
      razorpayOrderId: rpOrder.id,
      amount: rpOrder.amount, // in paise
      currency: rpOrder.currency,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ success: false, message: "Failed to create order" });
  }
};

// Verify Razorpay payment signature, persist Payment and update Order
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: "Missing payment details" });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    if (!isAuthentic) {
      order.status = "FAILED";
      await order.save();
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    // Idempotency: if payment already recorded, return success
    let payment = await Payment.findOne({ razorpayPaymentId: razorpay_payment_id });
    if (!payment) {
      // Signature valid -> record payment and mark order PAID
      payment = await Payment.create({
        orderId: order._id,
        razorpayPaymentId: razorpay_payment_id,
        razorpayOrderId: razorpay_order_id,
        razorpaySignature: razorpay_signature,
        paymentMethod: "RAZORPAY",
        status: "SUCCESS",
      });
    }

    order.status = "PAID";
    await order.save();

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      paymentId: payment._id,
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({ success: false, message: "Payment verification failed" });
  }
};
