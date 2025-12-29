import nodemailer from "nodemailer";
import { welcomeEmail } from "./emailTemplates.js";

// Sends a branded HTML welcome email for Exclusive
// Usage: await sendWelcomeEmail({ to: email, name, siteName, websiteUrl })
export default async function sendWelcomeEmail({ to, name = "there", siteName = "Exclusive", websiteUrl = process.env.WEBSITE_URL || "http://localhost:5173" }) {
  const { subject, html, text } = welcomeEmail({ name, siteName, websiteUrl });

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
