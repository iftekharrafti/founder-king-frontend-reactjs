import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import ThemeTwoIconButton from "../../atoms/IconButton/ThemeTwoIconButton";

const ThemeTwoNavActions = () => {
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
      <ThemeTwoIconButton icon={BiSearch} />
      <ThemeTwoIconButton icon={BsCart3} badge="1" />
      <ThemeTwoIconButton icon={FiUser} />
    </div>
  );
};

export default ThemeTwoNavActions;
