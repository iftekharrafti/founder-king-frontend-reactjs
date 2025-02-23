import { AiOutlineMinus } from "react-icons/ai"; 
import React, { useState } from 'react';
import Image from '../Images/Image';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const onIncrease = () => {
        setQuantity(quantity + 1);
    }
    const onDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const onClick = () => {
        console.log("Remove item from cart");
    }

    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-24 h-24 rounded-lg overflow-hidden">
                <Image
                    src={item.image}
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-theme-primary font-bold">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={onDecrease}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                >
                    <FaMinus className="text-red-800" />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                    onClick={onIncrease}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                >
                    <FaPlus className="text-red-800" />
                </button>
            </div>
            <button
                onClick={onClick}
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
                <FaTrash className="text-xl" />
            </button>
        </div>
    );
};

export default CartItem;