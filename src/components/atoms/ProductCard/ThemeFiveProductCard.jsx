import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ThemeFiveProductCard = ({ product }) => {
    const { name, image, originalPrice, discountPrice } = product;

    const handleAddToCart = () => {
        alert(`Added ${name} to cart!`);
    };

    return (
        <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <Link to="/product">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-dark truncate">
                    <Link to="/product">{name}</Link>
                </h3>

                <div className="flex items-center mt-2">
                    <span className="text-gray-500 line-through text-sm">৳{originalPrice}</span>
                    <span className="ml-2 text-secondary font-bold">৳{discountPrice}</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        {Math.round(((originalPrice - discountPrice) / originalPrice) * 100)}% OFF
                    </span>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="mt-4 w-full bg-theme-primary text-white py-2 rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary/90 group"
                >
                    <FiShoppingCart className="group-hover:animate-bounce-slow" />
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ThemeFiveProductCard;