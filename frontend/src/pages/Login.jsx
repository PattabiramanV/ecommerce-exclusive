import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import signupBanner from "../assets/signup-banner.jpg";

const Login = () => {
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

            <form className="mt-8 space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-3">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md py-3 px-8 font-medium cursor-pointer"
                >
                  Log In
                </button>
                <Link to="#" className="text-red-500 hover:text-red-600 cursor-pointer">
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
