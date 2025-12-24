import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStore } from "../context/Store";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";
import { BeatLoader } from "react-spinners";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, addToWishlist } = useStore();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [selectedImg, setSelectedImg] = useState("");
  const [size, setSize] = useState("M");
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["#000000", "#DB4444", "#00A3FF", "#38A169"]; // black, red, blue, green

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Since we don't have a single product endpoint yet in controller/routes,
        // we will fetch all and find (not efficient but matches current API state)
        // OR I should ideally create a getProductById endpoint.
        // For now, I'll assume I can filter the list from the ALL endpoint or implement the single endpoint quickly.
        // Actually, best practice is to have a single endpoint. 
        // I'll update the controller next. For now, let's try to fetch list and find.
        // Wait, I can implement logic here to handle filtering if the API returns all.

        const { data } = await axiosInstance.get('/products');
        if (data.success) {
          const found = data.products.find(p => p._id === id || p.id == id);
          if (found) {
            setProduct({
              ...found,
              id: found._id, // Normalize ID
              img: found.images?.[0]?.url || "https://placehold.co/600x600"
            });
            setSelectedImg(found.images?.[0]?.url || "https://placehold.co/600x600");
          }
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen flex justify-center items-center"><BeatLoader /></div>;
  if (!product) return <div className="h-screen flex justify-center items-center">Product not found</div>;

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-sm text-gray-500">
        <p>
          Account / {product.category} / <span className="text-gray-800">{product.name}</span>
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {/* Gallery */}
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-1 flex md:flex-col gap-4 order-2 md:order-1">
            {/* If we had multiple images, map them here. Using the main image repeated for demo if only 1 */}
            {[product.img, product.img, product.img].map((t, i) => (
              <button
                key={i}
                className={`rounded-md overflow-hidden border w-20 h-20 shrink-0 ${selectedImg === t ? "border-black" : "border-gray-200"
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
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>

          {/* Rating and stock */}
          <div className="mt-3 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < (product.rating || 0) ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-gray-500">({product.reviewCount || 0} reviews)</span>
            <span className="text-green-600 border-l pl-3 ml-2">In Stock</span>
          </div>

          <p className="mt-4 text-2xl font-semibold">${product.price}</p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
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
                    className={`px-3 py-1.5 border rounded-md text-sm ${size === s ? "bg-red-500 text-white border-red-500" : "border-gray-300"
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
              <button onClick={() => addToWishlist(product)} className="p-3 border rounded-md hover:bg-gray-50" aria-label="Wishlist">
                <span className="text-xl">❤</span>
              </button>
            </div>

            {/* Delivery/Return cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="border rounded-md p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <span className="text-lg">🚚</span>
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
                    <span className="text-lg">🔄</span>
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

      <Footer />
    </>
  );
}
