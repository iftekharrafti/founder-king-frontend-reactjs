import React from "react";

const CardContainer = ({ children, className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default CardContainer;
