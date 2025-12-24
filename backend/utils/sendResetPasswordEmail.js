import nodemailer from "nodemailer";
import { resetPasswordEmail } from "./emailTemplates.js";

export default async function sendResetPasswordEmail({ to, resetUrl, siteName = "Exclusive" }) {
    const { subject, html, text } = resetPasswordEmail({ resetUrl, siteName });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"${siteName}" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
        html,
    });
}
