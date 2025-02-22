import React from "react";
import { FaPlus } from "react-icons/fa";

const FaqIcon = ({ isOpen }) => {
  return (
    <div
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-45" : ""
      }`}
    >
      <FaPlus className="text-global-primary text-xl" />
    </div>
  );
};

export default FaqIcon;
