"use client"
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ name, label, placeholder, type = "text", className, register }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 mb-2 ${className}`}>
      {label && <label className="text-primary font-medium">{label}</label>}
      {type === "password" ? (
        <div className="relative">
          <input
            {...register(name)}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 
            hover:text-purple-600 transition-colors duration-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      ) : (
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      )}
    </div>
  );
};

export default InputField;
