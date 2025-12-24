import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/Store";

const ProductCard = ({
    product,
    showDiscount = false,
    discountPercentage = 0,
    showNew = false
}) => {
    const { addToCart, addToWishlist } = useStore();

    // Default values if product fields are missing
    const {
        id,
        name,
        price = 0,
        oldPrice = 0,
        rating = 0,
        reviewCount = 0,
        image,
        _id
    } = product || {};

    // Use _id if available (MongoDB), otherwise fallback to id
    const productId = _id || id;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({ ...product, id: productId });
    };

    return (
        <div className="border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 bg-white relative">
            <Link to={`/product/${productId}`} className="block">
                {/* Image Container */}
                <div className="relative bg-gray-50 aspect-square overflow-hidden">
                    <img
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 duration-200"
                        src={image || "https://placehold.co/600x600?text=No+Image"}
                    />

                    {/* Badges */}
                    {showDiscount && discountPercentage > 0 && (
                        <span className="absolute left-3 top-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{discountPercentage}%
                        </span>
                    )}
                    {showNew && (
                        <span className="absolute left-3 top-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                            NEW
                        </span>
                    )}
                </div>
            </Link>

            {/* Action Buttons (Overlay) */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <button
                    onClick={(e) => { e.preventDefault(); addToWishlist({ ...product, id: productId }) }}
                    className="bg-white p-1.5 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm"
                    aria-label="Add to Wishlist"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </button>
                <Link to={`/product/${productId}`} className="bg-white p-1.5 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm block text-center" aria-label="View Details">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>
            </div>

            {/* Add to Cart Button (Bottom overlay) */}
            <button
                onClick={handleAddToCart}
                className="absolute bottom-[88px] left-0 right-0 bg-black text-white py-2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-medium text-sm z-10"
            >
                Add To Cart
            </button>

            {/* Details */}
            <div className="p-3">
                <Link to={`/product/${productId}`}>
                    <h3 className="text-sm font-medium truncate hover:text-red-500 transition-colors">{name}</h3>
                </Link>
                <div className="mt-1 flex items-center gap-2">
                    <span className="text-red-500 font-semibold">${typeof price === 'number' ? price.toFixed(0) : price}</span>
                    {oldPrice > price && (
                        <span className="text-gray-400 line-through text-sm">${oldPrice.toFixed(0)}</span>
                    )}
                </div>
                <div className="mt-1 flex items-center gap-1">
                    {/* Stars */}
                    <div className="flex text-yellow-500 text-xs">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>{i < rating ? "★" : "☆"}</span>
                        ))}
                    </div>
                    <span className="text-gray-500 text-xs">({reviewCount})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
