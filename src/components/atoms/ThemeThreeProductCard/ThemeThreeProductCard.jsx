import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const ThemeThreeProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
            {/* Main Card Container with Glass Effect */}
            <div className="relative md:p-5">
                {/* Wishlist Button with Floating Effect */}
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute md:top-6 top-2 md:right-6 right-1 z-20 backdrop-blur-md bg-white/30 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white"
                >
                    {isWishlisted ? (
                        <FaHeart className="text-red-500 text-xl animate-pulse" />
                    ) : (
                        <FaRegHeart className="text-gray-700 text-xl" />
                    )}
                </button>

                {/* Stock Badge with Gradient */}
                <div className="absolute md:top-6 top-2 md:left-6 left-1 z-20">
                    <span
                        className={`md:px-4 px-2 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${
                            product.inStock 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
                        }`}
                    >
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>

                {/* Image Container with Advanced Hover Effects */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                    <img
                        src={product?.mainImage}
                        alt={product?.name}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:opacity-0"
                    />
                    <img
                        src={product?.hoverImage}
                        alt={`${product?.name} Hover`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform scale-125 opacity-0 group-hover:scale-110 group-hover:opacity-100"
                    />
                </div>

                {/* Product Info Section with Glass Effect */}
                <div className="relative space-y-4 px-2 md:px-0">
                    {/* Title with Gradient Effect */}
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 line-clamp-2">
                        {product?.name}
                    </h3>

                    {/* Price Section with Modern Layout */}
                    <div className="flex items-end gap-3">
                        <span className="text-2xl font-bold text-indigo-600">
                            ৳{product?.discountedPrice.toFixed(2)}
                        </span>
                        <span className="text-gray-400 line-through text-sm pb-1">
                            ৳{product?.mainPrice.toFixed(2)}
                        </span>
                    </div>

                    {/* Enhanced Rating Display */}
                    <div className="flex items-center gap-1 bg-gray-50 p-2 rounded-full w-fit">
                        {[...Array(5)].map((_, i) => (
                            <FaStar 
                                key={i} 
                                className={`transition-all duration-300 ${
                                    i < Math.floor(product.rating) 
                                    ? "text-yellow-400 scale-110" 
                                    : "text-gray-200"
                                }`} 
                            />
                        ))}
                        <span className="text-gray-600 text-sm ml-2 font-medium">
                            ({product.rating.toFixed(1)})
                        </span>
                    </div>

                    {/* Add to Cart Button with Gradient and Animation */}
                    <button 
                        className={`w-full py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                            product.inStock 
                            ? 'bg-theme-primary hover:bg-theme-primary-hover text-white shadow-lg hover:shadow-xl' 
                            : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                    >
                        <FaShoppingCart className="text-lg group-hover:animate-bounce" />
                        <span className="tracking-wide">
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

export default ThemeThreeProductCard;