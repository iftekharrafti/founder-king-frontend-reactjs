import React, { useState } from "react";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import MobileMenuButton from "../../atoms/MobileMenuButton/MobileMenuButton";
import NavActions from "../../molecules/NavActions/NavActions";
import NavLinks from "../../molecules/NavLinks/NavLinks";
import { Link } from "react-router-dom";
import ThemeTwoIconButton from "../../atoms/IconButton/ThemeTwoIconButton";
import { BiSearch } from "react-icons/bi";

const ThemeSixNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      text: "HOME",
      href: "#",
      isActive: true,
    },
    {
      text: "SHOP",
      href: "#",
    },
    {
      text: "ABOUT",
      href: "#",
    },
    {
      text: "CONTACT",
      href: "#",
    },
  ];

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
          <ThemeTwoIconButton icon={BiSearch} />
            {/* Logo */}
            <Link to="/theme/1" className="flex-shrink-0">
              {/* <img
                src="https://themeone.com/wp-content/uploads/2023/08/ThemeOne-logo.png"
                alt="Theme 1"
                className="h-8 sm:h-10 md:h-12 w-auto"
              /> */}
              Jewelry
            </Link>


            {/* Mobile Menu Button */}
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            {/* Actions */}
            <div className="hidden md:block">
              <NavActions wishlist={false} />
            </div>
          </div>

          {/* Mobile Search - Only visible on small screens */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 
                focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
                transition-all duration-300 outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-2 relative flex justify-center">
        <NavLinks
          linkClassName={"px-4 py-2 font-medium"}
          links={links}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default ThemeSixNavbar;
