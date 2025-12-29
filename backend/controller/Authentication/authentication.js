import dotenv from "dotenv";
import User from "../../models/User.js";
import sendWelcomeEmail from "../../utils/sendWelcomeEmail.js";
import crypto from "crypto";
import sendResetPasswordEmail from "../../utils/sendResetPasswordEmail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  // Find user
  const checkUser = await User.findOne({ email });

  if (!checkUser) {
    return res.status(401).json({ message: "User not found" });
  }

  // Password check (plain text – see note below)
  const isMatch = await bcrypt.compare(password, checkUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }
  const token = jwt.sign(
    { userId: checkUser._id, email: checkUser.email }, // payload
    process.env.JWT_SECRET,                  // secret
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  // Success response
  return res.status(200).json({
    message: "Login successful",
    token
  });
};

export const signup = async (req, res) => {
  // return res.send("pattabi")
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "Signup successful",
      userId: user._id,
    });
    // Fire-and-forget styled welcome email (does not block response)
    sendWelcomeEmail({ to: email, name }).catch((err) => {
      console.error("Welcome email failed:", err?.message || err);
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



