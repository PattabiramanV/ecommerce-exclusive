import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-10">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-black cursor-pointer">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-700">Contact</li>
          </ol>
        </nav>

        {/* Grid: Info left, Form right */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info panel */}
          <div className="lg:col-span-1 border rounded-md p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4h-5l-3.586-3.586A2 2 0 008.172 18H6a4 4 0 01-4-4V6z"/></svg>
              </div>
              <div>
                <h4 className="font-medium">Call To Us</h4>
                <p className="text-gray-600 text-sm mt-2">We are available 24/7, 7 days a week.</p>
                <p className="text-sm mt-2">Phone: +880611112222</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v2l-10 6L2 6V4zm0 4l10 6 10-6v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"/></svg>
              </div>
              <div>
                <h4 className="font-medium">Write To Us</h4>
                <p className="text-gray-600 text-sm mt-2">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-sm mt-2">Emails: customer@exclusive.com</p>
                <p className="text-sm">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 border rounded-md p-6">
            <form className="space-y-5">
              <div className="grid md:grid-cols-3 gap-4">
                <input type="text" placeholder="Your Name *" className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black" />
                <input type="email" placeholder="Your Email *" className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black" />
                <input type="tel" placeholder="Your Phone *" className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <textarea rows="6" placeholder="Your Message" className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md cursor-pointer">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
