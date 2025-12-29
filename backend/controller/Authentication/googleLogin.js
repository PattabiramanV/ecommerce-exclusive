import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../../models/User.js";
import dotenv from "dotenv";
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;

        // 1️⃣ Verify Google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name } = payload;
   
        // 2️⃣ Find or create user
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email,
                password: "GOOGLE_AUTH",
            });
        }

        // 3️⃣ Create YOUR JWT
        const jwtToken = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ token: jwtToken });

    } catch (error) {
        res.status(401).json({ message: "Invalid Google token" });
    }
};


