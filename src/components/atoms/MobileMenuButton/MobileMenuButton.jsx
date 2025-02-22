import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors duration-300"
    >
      {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
    </button>
  );
};

export default MobileMenuButton;