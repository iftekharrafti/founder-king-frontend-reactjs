import React, { useState } from 'react';
// import SearchInput from '../atoms/SearchInput/SearchInput';
import { Link } from 'react-router-dom';
import MobileMenuButton from '../../atoms/MobileMenuButton/MobileMenuButton';
import NavActions from '../../molecules/NavActions/NavActions';
import NavLinks from '../../molecules/NavLinks/NavLinks';
import SearchInput from '../../atoms/SearchInput/SearchInput';

const ThemeThreeNavbar = () => {
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            
            {/* Actions */}
            <div className="hidden md:block">
              <NavActions />
            </div>

            {/* Logo */}
            <Link to="/theme/2" className="flex-shrink-0">
              <img
                src="https://themetwo.com/logo.png"
                alt="Theme 2"
                className="h-10 w-auto"
              />
            </Link>

            {/* Search */}
            <SearchInput />

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <NavLinks
            links={links}
            linkClassName="px-3 py-4 text-sm font-medium"
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-gray-100">
          <div className="px-4 py-3">
            <NavActions />
          </div>
        </div>
      )}
    </header>
  );
};

export default ThemeThreeNavbar;