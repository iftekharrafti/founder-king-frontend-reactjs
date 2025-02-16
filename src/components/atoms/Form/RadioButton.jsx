import React from "react";

const RadioButton = ({ name, value, label, className, register }) => {

  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        {...register(name)}
        type="radio"
        value={value}
        className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
      />
      <span className="text-secondary">{label}</span>
    </label>
  );
};

export default RadioButton;
