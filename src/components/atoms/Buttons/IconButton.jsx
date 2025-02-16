import React from "react";
import { FiShoppingCart } from "react-icons/fi"; // Example icon

const IconButton = ({ children, icon: Icon, onClick, className, disabled, type = "button" }) => {
    return (
        <button
            type={type}
            className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 px-3 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon size={20} />}
            {children}
        </button>
    );
};

export default IconButton;
