import React from 'react';
import { FiStar, FiAward, FiTruck } from 'react-icons/fi';
import Typography from '../../../atoms/Typography/Typography';

const ThemeOneProductInfo = ({ product }) => {
    const { title, description, price, rating, availability } = product;

    return (
        <div className="space-y-4">
            <div>
                <Typography variant="h2" className="text-neutral-dark mb-2">
                    {title}
                </Typography>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <FiStar
                                key={i}
                                className={`${i < Math.floor(rating) ? 'fill-yellow-500' : ''}`}
                            />
                        ))}
                    </div>
                    <Typography variant="span" className="text-gray-500">
                        ({rating})
                    </Typography>
                </div>
            </div>

            <Typography variant="h3" className="text-secondary font-bold">
                ${price.toFixed(2)}
            </Typography>

            <Typography className="text-gray-600">
                {description}
            </Typography>

            <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2">
                    <FiAward className="text-primary" />
                    <Typography>Premium Quality</Typography>
                </div>
                <div className="flex items-center gap-2">
                    <FiTruck className="text-primary" />
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

export default ThemeOneProductInfo;