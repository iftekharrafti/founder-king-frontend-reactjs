import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ placeholder = "Search for products" }) => {
  return (
    <div className="relative flex-grow max-w-3xl mx-4 hidden md:block">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 
        focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
        transition-all duration-300 outline-none"
      />
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchInput;