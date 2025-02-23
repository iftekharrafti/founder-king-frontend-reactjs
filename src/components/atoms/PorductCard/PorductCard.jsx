import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    return (
        <div className="group relative bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-2xl">
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
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">
                <img
                    src={product?.mainImage}
                    alt="Product"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
                />
                <img
                    src={product?.hoverImage}
                    alt="Product Hover"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform scale-125 opacity-0 group-hover:scale-110 group-hover:opacity-100"
                />
            </div>
            <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 mt-4 line-clamp-2">
                    {product?.name}
                </h3>
                <div className="text-xl font-bold text-indigo-600">
                    ৳{product?.price.toFixed(2)}
                </div>
                <button className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-700 transform hover:scale-[1.02] active:scale-[0.98]">
                    <FaShoppingCart className="text-lg" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;