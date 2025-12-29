import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../api/axios";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState(1000);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch all products from API
                const { data } = await axiosInstance.get('/products');
                if (data.success) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Local filtering based on fetched data
    const displayProducts = products.filter(p => p.price <= priceRange);

    return (
        <>
            <Navbar />

            {/* Breadcrumb could go here */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/4 space-y-8 lg:sticky lg:top-32 h-fit">
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Category</h3>
                            <ul className="space-y-3 text-gray-600">
                                {['Woman\'s Fashion', 'Men\'s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby\'s & Toys', 'Groceries & Pets', 'Health & Beauty'].map((c) => (
                                    <li key={c} className="hover:text-red-500 cursor-pointer">{c}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full accent-red-500"
                            />
                            <div className="flex justify-between text-sm mt-2">
                                <span>$0</span>
                                <span>${priceRange}</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Rating</h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map(r => (
                                    <div key={r} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="accent-red-500 w-4 h-4" />
                                        <div className="flex text-yellow-500 text-sm">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i}>{i < r ? "★" : "☆"}</span>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">(Top Rated)</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <p className="text-gray-500">Showing {displayProducts.length} results</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Sort by:</span>
                                <select className="border p-2 rounded text-sm focus:outline-none">
                                    <option>Most Popular</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {loading ? (
                                <div className="col-span-full text-center py-20">Loading products...</div>
                            ) : (
                                displayProducts.map(p => (
                                    <ProductCard
                                        key={p._id}
                                        product={{
                                            ...p,
                                            id: p._id,
                                            image: p.images?.[0]?.url
                                        }}
                                        showNew={p.isNew}
                                    />
                                ))
                            )}
                        </div>

                        {/* Pagination (Mock) */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-10 h-10 border rounded hover:bg-red-500 hover:text-white transition-colors">1</button>
                            <button className="w-10 h-10 border rounded hover:bg-red-500 hover:text-white transition-colors">2</button>
                            <button className="w-10 h-10 border rounded hover:bg-red-500 hover:text-white transition-colors">3</button>
                            <button className="w-10 h-10 border rounded hover:bg-red-500 hover:text-white transition-colors">→</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductListing;
