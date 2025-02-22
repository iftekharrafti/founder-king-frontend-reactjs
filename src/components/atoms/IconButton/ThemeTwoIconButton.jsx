import React from "react";

const ThemeTwoIconButton = ({ icon: Icon, badge }) => {
  return (
    <button className="relative p-2 hover:text-primary">
      <Icon className="text-xl" />
      {badge && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

export default ThemeTwoIconButton;
