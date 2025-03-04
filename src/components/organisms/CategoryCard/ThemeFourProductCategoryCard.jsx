import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ThemeFourProductCategoryCard = ({ category }) => {
    return (
        <div>
            <div className="max-w-xs relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-orange-400">
                {/* Image Container */}
                <div className="relative">
                    <img
                        src={category.imageUrl}
                        alt={category?.name}
                        className="w-full h-64 object-cover"
                    />

                    {/* Category Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
                        <Link to="/category">
                            <h2 className="text-gray-800 font-medium text-lg">{category?.name}</h2></Link>
                    </div>
                </div>

                {/* Hover Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-theme-primary hover:bg-theme-primary hover:text-white p-3 rounded-full flex items-center gap-2 font-medium transition-colors duration-300">
                        <span>View Collection</span>
                        <BsArrowRight />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ThemeFourProductCategoryCard;