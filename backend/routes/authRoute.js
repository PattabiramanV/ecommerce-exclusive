import express from "express";
import { login, signup } from "../controller/Authentication/authentication.js";
import { googleLogin } from "../controller/Authentication/googleLogin.js";
import { forgotPassword,resetPassword } from "../controller/Authentication/passwordReset.js";
const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/google-login", googleLogin);
router.post("/auth/forgot-password", forgotPassword);
router.put("/auth/reset-password/:token", resetPassword);

export default router;
