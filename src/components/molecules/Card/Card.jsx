import React from "react";

const Card = ({ children, className }) => {
  // Check if className contains a background color class (bg-*)
  const hasBgColor = /\bbg-\S+/.test(className);
  return (
    <div
      className={`p-8 rounded-2xl shadow-lg border border-gray-100 
      transition-transform duration-300 hover:-translate-y-2
      ${hasBgColor ? "" : "bg-white"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
