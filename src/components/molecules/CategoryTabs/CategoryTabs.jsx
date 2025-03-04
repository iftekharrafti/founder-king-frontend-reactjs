import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
            {categories.map((category) => (
                <button
                    className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 border-b-2 hover:text-primary ${activeCategory === category.id
                        ? 'text-primary border-theme-primary'
                        : 'text-gray-600 border-transparent hover:border-gray-300'
                        }`}
                    onClick={() => onCategoryChange(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;