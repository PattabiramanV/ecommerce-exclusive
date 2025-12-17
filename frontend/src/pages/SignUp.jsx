import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import signupBanner from "../assets/signup-banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const SignUp = () => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function createAccountFun(e) {
    e.preventDefault();
    const { name, email, password } = userData;

    // Basic validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json","Authorization": `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Signup failed");
      }

      toast.success("Account created! Please log in.");
      setUserData({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
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
            <h2 className="text-3xl font-semibold">Create an account</h2>
            <p className="text-gray-600 mt-2">Enter your details below</p>

            <form className="mt-8 space-y-5" onSubmit={createAccountFun}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                  
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                  
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                  
                />
              </div>

              <button type="submit" disabled={submitting} className={`w-full ${submitting ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"} text-white rounded-md py-3 font-medium cursor-pointer`}>
                {submitting ? "Creating..." : "Create Account"}
              </button>

              <button type="button" className="w-full border rounded-md py-3 flex items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer">
                <img className="w-5 h-5" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                <span>Sign up with Google</span>
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have account?{" "}
                <Link href="#" to="/login" className="text-black font-medium underline-offset-4 hover:underline cursor-pointer">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
