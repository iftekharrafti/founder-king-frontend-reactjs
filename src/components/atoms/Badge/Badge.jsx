
import React from "react";

const Badge = ({ text, type = "default" }) => {
  const badgeColors = {
    new: "bg-green-500 text-white",
    sale: "bg-red-500 text-white",
    outOfStock: "bg-gray-500 text-white",
    default: "bg-secondary text-white",
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded ${badgeColors[type]}`}>
      {text}
    </span>
  );
};

export default Badge;
