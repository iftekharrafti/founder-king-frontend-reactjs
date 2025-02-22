import React from "react";

const Checkbox = ({ name, label, className, register }) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        {...register(name)}
        type="checkbox"
        className="w-4 h-4 text-global-primary focus:ring-primary border-gray-300 rounded"
      />
      <span className="text-global-secondary">{label}</span>
    </label>
  );
};

export default Checkbox;
