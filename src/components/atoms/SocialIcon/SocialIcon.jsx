import React from "react";

const SocialIcon = ({ href, children }) => {
  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center
      hover:bg-purple-100 hover:text-global-primary-hover transition-all duration-300
      transform hover:scale-110"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
