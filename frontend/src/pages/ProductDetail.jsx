import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStore } from "../context/Store";

const thumbnails = [
  "https://images.unsplash.com/photo-1606813907291-76bbd48f2f9e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606813907291-76bbd48f2f9e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600573472591-ee6c8a1d2196?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606813907306-bd9c0d9a9e8d?q=80&w=1200&auto=format&fit=crop",
];

const related = [
  {
    id: 1,
    title: "HAVIT HV - G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 88,
    img: "https://images.unsplash.com/photo-1619682817481-9f5cb1f650d8?q=80&w=1200&auto=format&fit=crop",
    badge: "40%",
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 75,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    badge: "-24%",
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 99,
    img: "https://images.unsplash.com/photo-1587202372775-98927b415b9b?q=80&w=1200&auto=format&fit=crop",
    badge: "-30%",
  },
  {
    id: 4,
    title: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 45,
    img: "https://images.unsplash.com/photo-1612197527762-6429b3a5ba34?q=80&w=1200&auto=format&fit=crop",
    badge: "-20%",
  },
];

export default function ProductDetail() {
  const { addToCart, addToWishlist } = useStore();
  const [selectedImg, setSelectedImg] = useState(thumbnails[0]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#000000", "#DB4444", "#00A3FF", "#38A169"]; // black, red, blue, green

  const product = {
    id: 999,
    title: "Havic HV G-92 Gamepad",
    price: 192,
    img: selectedImg,
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-sm text-gray-500">
        <p>
          Account / Gaming / <span className="text-gray-800">Havic HV G-92 Gamepad</span>
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-1 flex md:flex-col gap-4 order-2 md:order-1">
            {thumbnails.map((t, i) => (
              <button
                key={i}
                className={`rounded-md overflow-hidden border w-20 h-20 shrink-0 ${
                  selectedImg === t ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedImg(t)}
              >
                <img src={t} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="col-span-5 md:col-span-4 order-1 md:order-2">
            <div className="aspect-square w-full bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
              <img src={selectedImg} alt="selected" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Havic HV G-92 Gamepad</h1>

          {/* Rating and stock */}
          <div className="mt-3 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 4 }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.73z"/></svg>
              ))}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.48 3.499a.75.75 0 011.04 0l2.196 2.196a.75.75 0 00.531.22h3.109a.75.75 0 01.53 1.28l-2.246 2.246a.75.75 0 00-.22.53v3.11a.75.75 0 01-1.28.53l-2.246-2.246a.75.75 0 00-.53-.22h-3.11a.75.75 0 01-.53-1.28l2.246-2.246a.75.75 0 00.22-.53V3.72a.75.75 0 01.22-.53z"/></svg>
            </div>
            <span className="text-gray-500">(150 reviews)</span>
            <span className="text-green-600">In Stock</span>
          </div>

          <p className="mt-4 text-2xl font-semibold">$192.00</p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            PlayStation 5 controller skin high quality vinyl with air channel adhesive for easy bubble free install, mess free removal.
          </p>

          {/* Color selector */}
          <div className="mt-6 border-t border-b py-6 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-24 text-gray-500">Colours:</span>
              <div className="flex items-center gap-3">
                {colors.map((c) => (
                  <span key={c} className="w-6 h-6 rounded-full border border-gray-200" style={{ backgroundColor: c }}></span>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="flex items-center gap-4">
              <span className="w-24 text-gray-500">Size:</span>
              <div className="flex items-center gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-1.5 border rounded-md text-sm ${
                      size === s ? "bg-red-500 text-white border-red-500" : "border-gray-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  className="px-3 py-2 text-lg disabled:opacity-50"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty === 1}
                >
                  -
                </button>
                <span className="px-4 py-2 border-l border-r">{qty}</span>
                <button className="px-3 py-2 text-lg" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <button onClick={() => addToCart(product, qty)} className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">Buy Now</button>
              <button onClick={() => addToWishlist(product)} className="p-3 border rounded-md hover:bg-gray-50" aria-label="Wishlist" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21s-6.716-4.403-9.193-8.01C.533 10.158 1.165 7.5 3.32 6.2 5.474 4.9 8.1 5.6 9.6 7.5c1.5-1.9 4.126-2.6 6.28-1.3 2.155 1.3 2.787 3.958.513 6.79C18.716 16.597 12 21 12 21z"/></svg>
              </button>
            </div>

            {/* Delivery/Return cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-md p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600"><path d="M3 7a1 1 0 011-1h10l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/></svg>
                  </div>
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v6l4 2"/></svg>
                  </div>
                  <div>
                    <p className="font-medium">Return Delivery</p>
                    <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h2 className="text-lg font-semibold mb-6">Related Item</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {related.map((r) => (
            <div key={r.id} className="group border rounded-lg overflow-hidden">
              <div className="relative bg-gray-50 aspect-square overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 duration-200" />
                {r.badge && (
                  <span className="absolute left-3 top-3 text-xs px-2 py-1 rounded bg-red-500 text-white">{r.badge}</span>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm line-clamp-2 min-h-[2.5rem]">{r.title}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-red-500 font-semibold">${r.price}</span>
                  <span className="text-gray-400 line-through text-sm">${r.oldPrice}</span>
                </div>
                <p className="mt-1 text-xs text-yellow-600">★★★★★ <span className="text-gray-500">({r.rating})</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
