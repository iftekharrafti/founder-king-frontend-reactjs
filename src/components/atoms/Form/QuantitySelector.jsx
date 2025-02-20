import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const QuantitySelector = ({ name, className, setValue, getValues }) => {
  const handleIncrease = () => {
    setValue(name, (getValues(name) || 1) + 1);
  };

  const handleDecrease = () => {
    setValue(name, Math.max(1, (getValues(name) || 1) - 1));
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleDecrease}
        className="bg-secondary text-white p-2 rounded-md"
      >
        <FiMinus />
      </button>
      <div className="w-12 text-center border border-gray-300 p-2 rounded-md bg-white">
        {getValues(name) || 1}
      </div>
      <button
        type="button"
        onClick={handleIncrease}
        className="bg-primary text-white p-2 rounded-md"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;
