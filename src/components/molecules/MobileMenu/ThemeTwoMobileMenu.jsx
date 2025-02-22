import React from "react";
import { HiMenu } from "react-icons/hi";

const ThemeTwoMobileMenu = ({ onToggle }) => {
  return (
    <button className="lg:hidden p-2 hover:text-primary" onClick={onToggle}>
      <HiMenu className="text-2xl" />
    </button>
  );
};

export default ThemeTwoMobileMenu;
