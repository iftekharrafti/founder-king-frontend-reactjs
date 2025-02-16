import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({ children, onClick, className, disabled, type = "button", link }) => {
    return (
        <>
            {
                link ? (
                    <Link to={link}>
                        <button
                            type={type}
                            className={`bg-secondary hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
                            onClick={onClick}
                            disabled={disabled}
                        >
                            {children}
                        </button>
                    </Link>
                ) : (
                    <button
                        type={type}
                        className={`bg-secondary hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                )
            }
        </>

    );
};

export default SecondaryButton;
