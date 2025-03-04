import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ThemeFiveProductCategoryCard = ({ category }) => {
    return (
        <div>
            <div className="relative bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center shadow-md transition duration-300 hover:bg-gray-200 group">
                <img src={category?.image} alt={category.name} className="w-16 h-16 object-contain" />
                <p className="mt-2 text-sm font-semibold">{category.name}</p>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <Link to="/category">
                        <button className="text-white font-semibold py-2 px-4 bg-primary rounded-md">
                            View Collection
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ThemeFiveProductCategoryCard;