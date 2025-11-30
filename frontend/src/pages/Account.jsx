import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Account() {
  const [form, setForm] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSave = (e) => {
    e.preventDefault();
    // Temporary action: show alert. Hook this to your API later.
    alert("Profile saved (demo). Connect this to your backend.");
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-sm text-gray-500">
        <p>
          Home / <span className="text-gray-800">My Account</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left navigation */}
        <aside className="lg:col-span-3">
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-500 mb-3">Manage My Account</p>
              <ul className="space-y-2">
                <li>
                  <span className="text-red-500 font-medium">My Profile</span>
                </li>
                <li className="text-gray-500">Address Book</li>
                <li className="text-gray-500">My Payment Options</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-500 mb-3">My Orders</p>
              <ul className="space-y-2">
                <li className="text-gray-500">My Returns</li>
                <li className="text-gray-500">My Cancellations</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-500 mb-3">My Wishlist</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="lg:col-span-9">
          <div className="flex items-center justify-end text-sm text-gray-600">
            <span>
              Welcome! <Link to="#" className="text-red-500 clickable">Md Rimel</Link>
            </span>
          </div>

          <div className="mt-4 bg-white border rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-semibold text-red-500">Edit Your Profile</h2>

            <form className="mt-6 space-y-6" onSubmit={onSave}>
              {/* Top row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                    placeholder="Address"
                  />
                </div>
              </div>

              {/* Password changes */}
              <div className="space-y-4">
                <p className="text-gray-600">Password Changes</p>
                <input
                  type="password"
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  placeholder="Current Password"
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                />
                <input
                  type="password"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm New Password"
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-3 py-2 outline-none"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer"
                  onClick={() =>
                    setForm({
                      firstName: "Md",
                      lastName: "Rimel",
                      email: "rimel111@gmail.com",
                      address: "Kingston, 5236, United State",
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    })
                  }
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
