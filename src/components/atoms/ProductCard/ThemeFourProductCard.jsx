import React from 'react';
import { FaStar, FaRegStar, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThemeFourProductCard = ({ product }) => {
    const rating = Math.floor(Math.random() * 5) + 1;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-teal-300" />);
        }
    }
    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-100 group">
            <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="flex-grow">
                <h3 className="text-gray-700 font-medium mb-1 truncate text-theme-primary group-hover:text-theme-primary-hover transition-colors duration-300">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h3>
                <div className="flex">
                    {stars}
                </div>
                <div className="text-gray-800 font-semibold">
                    ৳ {product.price}
                </div>
            </div>
        </div>
    );
};

export default ThemeFourProductCard;