import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import signupBanner from "../assets/signup-banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      // Using Vite proxy -> http://localhost:5000/api/forgot-password in dev
      await axios.post("/api/forgot-password", { email });
      toast.success("Password reset link sent if the email exists.");
      navigate("/login");
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Failed to send reset email";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Visual left side */}
          <div className="hidden lg:block">
            <img
              className="w-full h-[520px] object-cover rounded-md shadow-sm"
              alt="shopping visual"
              src={signupBanner}
            />
          </div>

          {/* Form right side */}
          <div className="max-w-md w-full ml-auto">
            <h2 className="text-3xl font-semibold">Forgot Password</h2>
            <p className="text-gray-600 mt-2">Enter your email to receive a reset link</p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full ${submitting ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"} text-white rounded-md py-3 font-medium cursor-pointer`}
              >
                {submitting ? "Sending..." : "Send Reset Link"}
              </button>

              <p className="text-center text-sm text-gray-600">
                Remembered your password?{" "}
                <Link to="/login" className="text-black font-medium underline-offset-4 hover:underline cursor-pointer">Back to Login</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ForgotPassword;
