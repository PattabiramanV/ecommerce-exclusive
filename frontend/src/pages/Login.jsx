import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import signupBanner from "../assets/signup-banner.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = form;

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);
      // Using Vite proxy: this becomes http://localhost:5000/api/login in dev
      const res = await axios.post(
        "/api/login",
         { email, password },
        { 
          headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
        
        );
      const data = res.data;

      // Example: if backend returns token
      // localStorage.setItem('token', data.token);

      toast.success("Logged in successfully!");
      if (data.token){
        localStorage.setItem('token', data.token);
      }
      navigate("/", { replace: true });
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Login failed";
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
            <h2 className="text-3xl font-semibold">Log in to Exclusive</h2>
            <p className="text-gray-600 mt-2">Enter your details below</p>

            <form className="mt-8 space-y-5" onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`bg-red-500 ${submitting ? "opacity-70" : "hover:bg-red-600"} text-white rounded-md py-3 px-8 font-medium cursor-pointer`}
                >
                  {submitting ? "Logging in..." : "Log In"}
                </button>
                <Link to="/forgot-password" className="text-red-500 hover:text-red-600 cursor-pointer">
                  Forget Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
