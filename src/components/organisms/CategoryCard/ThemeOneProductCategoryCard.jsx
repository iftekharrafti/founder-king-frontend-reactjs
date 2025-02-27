import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ThemeOneProductCategoryCard = ({ category }) => {
    return (
        <div>
            <div className="relative h-[250px] rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={category?.imageUrl}
                        alt="Category"
                        className="w-full h-full object-cover object-center rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-xl" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transform transition-transform duration-500 group-hover:scale-105">
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                        {category?.name}
                    </h3>
                    <button className="group relative z-10 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-theme-primary hover:text-gray-900 transform hover:scale-105 active:scale-95">
                        Buy Now
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeOneProductCategoryCard;