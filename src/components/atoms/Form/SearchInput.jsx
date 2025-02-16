import React from "react";
import { useFormContext } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ name, placeholder = "Search...", className, register }) => {

  return (
    <div className={`relative ${className}`}>
      <input
        {...register(name)}
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
    </div>
  );
};

export default SearchInput;
