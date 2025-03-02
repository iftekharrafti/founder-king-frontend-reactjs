import React from 'react';
import Heading from '../../atoms/Text/Heading';
import ThemeFourProductCard from '../../atoms/ProductCard/ThemeFourProductCard';

const ProductColumn = ({ title, products }) => {
    return (
        <div className="flex-1 px-4">
            <Heading type='sub'>{title}</Heading>
            <div className="w-16 h-1 bg-teal-500 mb-6 transition-all duration-300 hover:w-24 hover:bg-teal-400"></div>
            <div className="space-y-2">
                {products?.map((product, index) => (
                    <ThemeFourProductCard
                        key={index}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductColumn;