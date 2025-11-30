import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-10">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-black cursor-pointer">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">404 Error</li>
          </ol>
        </nav>

        {/* Centered content */}
        <section className="text-center py-10 sm:py-16 lg:py-24">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">404 Not Found</h1>
          <p className="text-gray-600 mt-5">Your visited page not found. You may go home page.</p>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium cursor-pointer"
            >
              Back to home page
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
