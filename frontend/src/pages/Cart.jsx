import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useStore } from "../context/Store";

export default function Cart() {
  const { cart: items, updateQty, removeFromCart } = useStore();
  const [coupon, setCoupon] = useState("");

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-sm text-gray-500">
        Home / <span className="text-gray-800">Cart</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 border rounded-t-md bg-gray-50 text-sm text-gray-600">
          <div className="col-span-6">Product</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Quantity</div>
          <div className="col-span-2 text-right">Subtotal</div>
        </div>

        {/* Items */}
        <div className="border-x border-b rounded-b-md divide-y">
          {items.map((it) => (
            <div key={it.id} className="grid grid-cols-12 gap-4 items-center px-4 py-4">
              <div className="col-span-6 flex items-center gap-4">
                <button
                  onClick={() => removeFromCart(it.id)}
                  title="Remove"
                  className="p-1.5 rounded-full bg-red-50 text-red-500 hover:bg-red-100"
                >
                  ✕
                </button>
                <img src={it.img} alt={it.title} className="w-16 h-16 object-cover rounded" />
                <span className="text-sm">{it.title}</span>
              </div>
              <div className="col-span-2">${it.price}</div>
              <div className="col-span-2">
                <select
                  className="border rounded-md px-3 py-2"
                  value={it.qty}
                  onChange={(e) => updateQty(it.id, Number(e.target.value))}
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 text-right font-medium">${it.price * it.qty}</div>
            </div>
          ))}
        </div>

        {/* Actions row */}
        <div className="mt-6 flex items-center justify-between">
          <Link to="/" className="px-4 py-2 border rounded-md hover:bg-gray-50">Return To Shop</Link>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Update Cart</button>
        </div>

        {/* Coupon and totals */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex items-center gap-3">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              type="text"
              placeholder="Coupon Code"
              className="w-full max-w-xs border rounded-md px-3 py-2"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Apply Coupon</button>
          </div>

          <div className="border rounded-md p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b pb-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total:</span>
                <span className="font-semibold">${subtotal}</span>
              </div>
            </div>
            <Link to="/checkout" className="block mt-5 w-full">
              <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
