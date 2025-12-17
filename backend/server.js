

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.js";
import sendWelcomeEmail from "./utils/sendWelcomeEmail.js";
import jwt from "jsonwebtoken";
import auth from "./middleware/auth.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server running with ES Modules");
});

app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
  // res.send("pp")
});

app.post("/api/login", async (req, res) => {
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
  if (checkUser.password !== password) {
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
});


// server.js
app.post("/api/signup", async (req, res) => {
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

    const user = await User.create({ name, email, password });

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
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
