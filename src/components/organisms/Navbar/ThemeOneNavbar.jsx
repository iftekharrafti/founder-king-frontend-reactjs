import React, { useState } from "react";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import MobileMenuButton from "../../atoms/MobileMenuButton/MobileMenuButton";
import NavActions from "../../molecules/NavActions/NavActions";
import NavLinks from "../../molecules/NavLinks/NavLinks";

const ThemeOneNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      text: "HOME",
      href: "#",
      isActive: true,
    },
    {
      text: "ATTAR",
      href: "#",
      dropdownItems: [
        { text: "Arabian Attar", href: "#" },
        { text: "Indian Attar", href: "#" },
        { text: "Organic Attar", href: "#" },
        { text: "Premium Collection", href: "#" },
      ],
    },
    {
      text: "MEN'S CLOTHING",
      href: "#",
      dropdownItems: [
        { text: "T-Shirts", href: "#" },
        { text: "Shirts", href: "#" },
        { text: "Pants", href: "#" },
        { text: "Accessories", href: "#" },
      ],
    },
    {
      text: "PANJABI",
      href: "#",
      dropdownItems: [
        { text: "Premium Panjabi", href: "#" },
        { text: "Regular Fit", href: "#" },
        { text: "Semi Fitted", href: "#" },
        { text: "Wedding Collection", href: "#" },
      ],
    },
    {
      text: "WINTER 2024",
      href: "#",
      dropdownItems: [
        { text: "Jackets", href: "#" },
        { text: "Sweaters", href: "#" },
        { text: "Hoodies", href: "#" },
        { text: "Winter Accessories", href: "#" },
      ],
    },
    {
      text: "FOODS",
      href: "#",
      dropdownItems: [
        { text: "Organic Honey", href: "#" },
        { text: "Dates", href: "#" },
        { text: "Nuts & Dry Fruits", href: "#" },
        { text: "Herbal Products", href: "#" },
      ],
    },
    {
      text: "OTHERS",
      href: "#",
      dropdownItems: [
        { text: "Gift Sets", href: "#" },
        { text: "Islamic Items", href: "#" },
        { text: "Books", href: "#" },
        { text: "Accessories", href: "#" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="https://themeone.com/wp-content/uploads/2023/08/ThemeOne-logo.png"
                alt="Theme 1"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </a>

            {/* Search */}
            <SearchInput />

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />

            {/* Actions */}
            <div className="hidden md:block">
              <NavActions />
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
      <div className="max-w-7xl mx-auto px-4 py-2 relative">
        <NavLinks links={links} isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
};

export default ThemeOneNavbar;
