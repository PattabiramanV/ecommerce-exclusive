import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["CREATED", "PAID", "FAILED"],
      default: "CREATED",
      required: true,
    },
    razorpayOrderId: { type: String, required: true, index: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
