import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WishlistButton = ({ count = 0 }) => {
    return (
        <Link to="/wishlist">
            <button className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors duration-300">
                <FaHeart className="text-2xl" />
                {count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs 
        w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                        {count}
                    </span>
                )}
            </button>
        </Link>
    );
};

export default WishlistButton;