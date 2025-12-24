
import dotenv from "dotenv";
import User from "../../models/User.js";
import sendWelcomeEmail from "../../utils/sendWelcomeEmail.js";
import crypto from "crypto";
import sendResetPasswordEmail from "../../utils/sendResetPasswordEmail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token and save to database
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Set expire time (10 minutes)
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    // Create reset URL
    // frontend URL - adjust port if needed
    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

    try {
      await sendResetPasswordEmail({
        to: user.email,
        resetUrl,
        siteName: "Exclusive",
      });

      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      return res.status(500).json({ message: "Email could not be sent" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const resetPassword = async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Update password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Clear reset token fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};