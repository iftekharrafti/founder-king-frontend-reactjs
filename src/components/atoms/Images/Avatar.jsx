import React from "react";

const Avatar = ({ src, alt = "User Avatar", size = 50, className = "" }) => {
    return (
        <img
            src={src || '/images/user.jpg'}
            alt={alt}
            width={size}
            height={size}
            className={`!rounded-full border border-gray-300 ${className}`}
        />
    );
};

export default Avatar;
