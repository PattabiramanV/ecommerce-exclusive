import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStore } from "../context/Store";

const suggestions = [1, 2, 3, 4];

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart, moveAllWishlistToCart } = useStore();
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Wishlist ({wishlist.length})</h1>
          <button onClick={moveAllWishlistToCart} className="px-4 py-2 border rounded-md hover:bg-gray-50">Move All To Bag</button>
        </div>

        {/* Items grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden group">
              <div className="relative bg-gray-50 aspect-square">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 duration-200" />
                {item.badge && (
                  <span className="absolute left-3 top-3 bg-red-500 text-white text-xs px-2 py-1 rounded">{item.badge}</span>
                )}
                <button
                  title="Remove"
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute right-3 top-3 p-2 bg-white/90 rounded-full shadow hover:bg-white"
                >
                  🗑️
                </button>
                <button onClick={() => addToCart(item, 1)} className="absolute left-0 right-0 bottom-0 bg-black text-white text-sm py-2 opacity-90 hover:opacity-100">
                  Add To Cart
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm line-clamp-2 min-h-[2.5rem]">{item.title}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-red-500 font-semibold">${item.price}</span>
                  {item.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Just For You */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-4 h-7 bg-red-500 rounded" />
              <h2 className="text-lg font-semibold">Just For You</h2>
            </div>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">See All</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {suggestions.map((i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <div className="relative bg-gray-50 aspect-square">
                  <img src={`https://picsum.photos/seed/just${i}/600/600`} alt="suggestion" className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm">Suggested Product {i}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="w-full px-4 py-2 border rounded-md hover:bg-gray-50">Add To Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
