import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true, index: true },
    razorpayPaymentId: { type: String, required: true, unique: true, index: true },
    razorpayOrderId: { type: String, required: true, index: true },
    razorpaySignature: { type: String, required: true },
    paymentMethod: { type: String, enum: ["RAZORPAY"], default: "RAZORPAY", required: true },
    status: { type: String, enum: ["SUCCESS", "FAILED"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", PaymentSchema);
