import React from 'react';
import { FiStar, FiAward, FiTruck } from 'react-icons/fi';
import Typography from '../../../atoms/Typography/Typography';

const ThemeTwoProductInfo = ({ product }) => {
    const { title, description, price, rating, availability } = product;

    return (
        <div className="space-y-6 p-4 bg-white rounded-lg shadow-md">
            {/* Product Title */}
            <Typography variant="h2" className="text-neutral-dark font-semibold">
                {title}
            </Typography>

            {/* Price & Rating */}
            <div className="flex items-center justify-between">
                <Typography variant="h3" className="text-secondary font-bold text-xl">
                    ${price.toFixed(2)}
                </Typography>
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FiStar
                            key={i}
                            className={`text-yellow-500 ${i < Math.floor(rating) ? 'fill-yellow-500' : 'opacity-30'}`}
                        />
                    ))}
                    <Typography variant="span" className="text-gray-500 text-sm">
                        ({rating})
                    </Typography>
                </div>
            </div>

            {/* Description */}
            <Typography className="text-gray-600 text-sm leading-relaxed">
                {description}
            </Typography>

            {/* Icons & Features */}
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <FiAward className="text-primary text-lg" />
                    <Typography>Premium Quality</Typography>
                </div>
                <div className="flex items-center gap-2">
                    <FiTruck className="text-primary text-lg" />
                    <Typography>Free Shipping</Typography>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${availability ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <Typography>{availability ? 'In Stock' : 'Out of Stock'}</Typography>
                </div>
            </div>
        </div>
    );
};

export default ThemeTwoProductInfo;
