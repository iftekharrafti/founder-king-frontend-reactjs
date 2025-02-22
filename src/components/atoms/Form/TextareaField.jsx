import React from "react";

const TextareaField = ({
  name,
  label,
  placeholder,
  className,
  register,
  icon: Icon,
  rows = 4,
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-global-primary font-medium">{label}</label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-4 text-teal-500">
            <Icon />
          </div>
        )}

        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={rows}
          className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full 
            ${Icon ? "pl-10" : ""}`}
        />
      </div>
    </div>
  );
};

export default TextareaField;
