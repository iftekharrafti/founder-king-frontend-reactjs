import React from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Image from '../../atoms/Images/Image';

const WishlistItem = ({ item }) => {
    const onClick = () => {
        // Handle wishlist item removal
        console.log(`Removed ${item.name} from wishlist`);
    };

    return (
        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-5">
                {/* Product Image */}
                <div className="w-28 h-28 rounded-lg overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-indigo-600 font-bold text-lg">${item.price.toFixed(2)}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                    <button
                        onClick={onClick}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                        <FaTrash className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default WishlistItem;