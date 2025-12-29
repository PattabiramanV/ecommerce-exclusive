

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import User from "./models/User.js";
import sendWelcomeEmail from "./utils/sendWelcomeEmail.js";
// import jwt from "jsonwebtoken";
import auth from "./middleware/auth.js";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import paymentRoute from "./routes/paymentRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", authRoute);
app.use("/api", productRoute);
app.use("/api", paymentRoute);

connectDB();




// server.js




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// app.get("/", auth, (req, res) => {
//   res.send("Server running with ES Modules");
// });

// app.post("/api/users", async (req, res) => {
//   const user = await User.create(req.body);
//   res.json(user);
//   // res.send("pp")
// });



// app.get("/api/profile", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });