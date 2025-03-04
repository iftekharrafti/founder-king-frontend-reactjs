import React from 'react';
import ThemeFiveProductCard from '../../atoms/ProductCard/ThemeFiveProductCard';

const ThemeFiveProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="transform transition-all duration-300 hover:scale-[1.02]">
                    <ThemeFiveProductCard product={product} />
                </div>
            ))}
        </div>
    );
};

export default ThemeFiveProductGrid;