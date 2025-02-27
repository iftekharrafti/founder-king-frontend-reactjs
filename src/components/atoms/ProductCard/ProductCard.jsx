import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="group relative bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-2xl">
            {/* Wishlist Button */}
            <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-110"
            >
                {isWishlisted ? (
                    <FaHeart className="text-red-500 text-xl" />
                ) : (
                    <FaRegHeart className="text-gray-600 text-xl" />
                )}
            </button>

            {/* Stock Badge */}
            <span
                className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold uppercase rounded-lg ${
                    product.inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}
            >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>

            {/* Product Image with Hover Effect */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">
                <img
                    src={product?.mainImage}
                    alt={product?.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
                />
                <img
                    src={product?.hoverImage}
                    alt={`${product?.name} Hover`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-125 opacity-0 group-hover:scale-110 group-hover:opacity-100"
                />
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 mt-4 line-clamp-2">
                    {product?.name}
                </h3>

                {/* Price Section */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-indigo-600">
                        ৳{product?.discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                        ৳{product?.mainPrice.toFixed(2)}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                    <span className="text-gray-600 text-sm ml-1">({product.rating.toFixed(1)})</span>
                </div>

                {/* Add to Cart Button */}
                <button className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-700 transform hover:scale-[1.02] active:scale-[0.98] disabled:bg-gray-400"
                    disabled={!product.inStock}
                >
                    <FaShoppingCart className="text-lg" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
