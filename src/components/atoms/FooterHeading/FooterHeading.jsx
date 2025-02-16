import React from 'react';

const FooterHeading = ({ children }) => {
  return (
    <h3 className="text-gray-900 font-bold text-lg mb-4 tracking-wider">
      {children}
    </h3>
  );
};

export default FooterHeading;