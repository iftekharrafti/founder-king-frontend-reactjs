import React from 'react';

const Typography = ({ 
  variant = 'p', 
  children, 
  className = '',
  ...props 
}) => {
  const getComponent = () => {
    switch (variant) {
      case 'h1':
        return <h1 className={`md:text-4xl text-xl font-bold ${className}`} {...props}>{children}</h1>;
      case 'h2':
        return <h2 className={`md:text-3xl text-xl font-bold ${className}`} {...props}>{children}</h2>;
      case 'h3':
        return <h3 className={`md:text-2xl text-lg font-semibold ${className}`} {...props}>{children}</h3>;
      case 'h4':
        return <h4 className={`text-xl font-semibold ${className}`} {...props}>{children}</h4>;
      case 'h5':
        return <h5 className={`text-lg font-medium ${className}`} {...props}>{children}</h5>;
      case 'h6':
        return <h6 className={`text-base font-medium ${className}`} {...props}>{children}</h6>;
      case 'p':
        return <p className={`text-base ${className}`} {...props}>{children}</p>;
      case 'span':
        return <span className={`${className}`} {...props}>{children}</span>;
      default:
        return <p className={`text-base ${className}`} {...props}>{children}</p>;
    }
  };

  return getComponent();
};

export default Typography;