"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputWithIconField = ({ name, label, placeholder, type = "text", className, register, icon: Icon }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-primary font-medium">{label}</label>}

      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500">
            <Icon />
          </div>
        )}

        <input
          {...register(name)}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full 
            ${Icon ? "pl-10" : ""}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 
            hover:text-purple-600 transition-colors duration-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputWithIconField;
