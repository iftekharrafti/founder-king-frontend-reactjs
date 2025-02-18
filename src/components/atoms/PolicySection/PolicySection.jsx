import React from 'react';

const PolicySection = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-600">
        {children}
      </div>
    </div>
  );
};

export default PolicySection;