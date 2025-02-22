import React from "react";

const PriceTag = ({ price, originalPrice }) => {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-5xl font-bold text-global-primary">৳{price}</span>
      {originalPrice && (
        <span className="text-xl text-gray-400 line-through">
          ৳{originalPrice}
        </span>
      )}
    </div>
  );
};

export default PriceTag;
