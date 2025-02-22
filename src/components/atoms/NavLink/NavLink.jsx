import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavLink = ({
  href,
  children,
  isActive,
  dropdownItems = [],
  linkClassName,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const hasDropdown = dropdownItems.length > 0;

  return (
    <div
      className="relative lg:inline-block"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a
        href={href}
        className={` transition-all duration-300 hover:text-theme-primary-hover
        flex items-center justify-between lg:justify-start gap-1 border-b lg:border-none
        ${isActive ? "text-theme-primary" : "text-gray-700"} ${linkClassName}`}
      >
        {children}
        {hasDropdown && (
          <FaChevronDown
            className={`text-xs transition-transform duration-300 
        ${showDropdown ? "rotate-180" : ""}`}
          />
        )}
      </a>

      {hasDropdown && showDropdown && (
        <div
          className={`lg:absolute lg:top-full lg:left-0 w-full lg:w-60 bg-white 
        shadow-lg rounded-lg py-2 transform transition-all duration-300 z-50
        ${
          showDropdown
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
        }`}
        >
          {dropdownItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-6 lg:px-4 py-2 text-gray-700 hover:bg-orange-50 
              hover:text-theme-primary-hover transition-colors duration-300"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;
