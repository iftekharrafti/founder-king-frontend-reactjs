import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
  link,
}) => {
  const hasTextColor = /\btext-(black|white|gray|red|blue|green|yellow|purple|pink|indigo|cyan|teal|lime|amber|orange|brown|slate|stone|neutral|zinc|emerald|fuchsia|rose)/.test(className);
  return (
    <>
      {link ? (
        <Link to={link}>
          <button
            type={type}
            className={`bg-global-secondary hover:bg-gray-700 px-4 py-2 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${hasTextColor ? "" : "text-white"} ${className}`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          className={`bg-global-secondary hover:bg-gray-700 px-4 py-2 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed ${hasTextColor ? "" : "text-gray-300"} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default SecondaryButton;
