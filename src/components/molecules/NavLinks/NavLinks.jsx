import React from "react";
import NavLink from "../../atoms/NavLink/NavLink";

const NavLinks = ({ links, isMobileMenuOpen, linkClassName }) => {
  return (
    <nav
      className={`lg:flex lg:items-center lg:space-x-2 ${
        isMobileMenuOpen
          ? "block absolute top-full left-0 w-full bg-white shadow-lg border-t lg:border-none lg:static lg:shadow-none lg:w-auto"
          : "hidden lg:block"
      }`}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          isActive={link.isActive}
          dropdownItems={link.dropdownItems}
          linkClassName={linkClassName}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
