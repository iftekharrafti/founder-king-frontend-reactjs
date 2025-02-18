
import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ href, children }) => {
  return (
    <Link 
      to={href}
      className="text-gray-600 hover:text-primary transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default FooterLink;