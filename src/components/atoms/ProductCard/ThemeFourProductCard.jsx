import React from 'react';
import { FaStar, FaRegStar, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThemeFourProductCard = ({ product }) => {
    return (
        <div className="max-w-xs transition-all duration-300 rounded-lg overflow-hidden shadow-2xl hover:shadow-md hover:border hover:border-gray-300">
            <div className="relative">
                <img
                    src={product.mainImage}
                    alt="Fusion Chair"
                    className="w-full h-64 object-cover"
                />
            </div>

            <div className="p-4">
                <Link to={`/product/${product.id}`}>
                    <h1 className="text-gray-500 text-base font-semibold mb-1">{product.name}</h1>
                </Link>

                <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                        <FaRegStar key={i} className="text-theme-primary text-sm" />
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <span className="font-bold text-gray-800">BDT {product?.discountedPrice} </span>
                        <span className="text-gray-400 line-through text-sm">BDT {product?.mainPrice}</span>
                    </div>

                    <button className="bg-theme-primary hover:bg-blue-600 text-white p-2 rounded-full">
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeFourProductCard;