import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStore } from "../context/Store";

export default function Checkout() {
  const { cart } = useStore();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    payment: "cod", // 'card' | 'cod'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const placeOrder = (e) => {
    e.preventDefault();
    alert("Order placed (demo). Hook this to your backend.");
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-sm text-gray-500">
        Home / <span className="text-gray-800">Checkout</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Billing details */}
        <section className="lg:col-span-7">
          <h1 className="text-xl font-semibold mb-4">Billing Details</h1>
          <form onSubmit={placeOrder} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="+1 555 555 5555"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-600 mb-2">Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="Street address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Country</label>
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="Country"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">ZIP/Postal Code</label>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-gray-50"
                  placeholder="ZIP"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">Payment Method</p>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={form.payment === "card"}
                  onChange={handleChange}
                />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                <span>Cash on Delivery</span>
              </label>
            </div>

            <button type="submit" className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
              Place Order
            </button>
          </form>
        </section>

        {/* Order summary */}
        <aside className="lg:col-span-5">
          <div className="border rounded-md p-6 space-y-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="divide-y">
              {cart.map((it) => (
                <div key={it.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src={it.img} alt={it.title} className="w-14 h-14 object-cover rounded" />
                    <div>
                      <p className="text-sm">{it.title}</p>
                      <p className="text-xs text-gray-500">Qty: {it.qty}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">${it.price * it.qty}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="flex items-center justify-between font-semibold pt-2 border-t">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
