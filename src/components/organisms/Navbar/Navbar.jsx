import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGeneralSettings } from "../../../context/generalSettingsContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { generalSettings, errorGeneralSettings, isLoadingGeneralSettings } = useGeneralSettings();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Feature",
      link: "/feature",
    },
    {
      name: "Theme",
      link: "/theme",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Faq",
      link: "/faq",
    },
  ];

  const [activeNav, setActiveNav] = useState(() => {
    // Initialize based on current path
    const path = location.pathname;
    if (path === "/") return "Home";
    return navItems.find((item) => item.link === path)?.name || "Home";
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src={generalSettings?.data?.logo}
                alt="Logo"
                className="w-[260px] h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`px-3 py-1 text-xl font-medium transition-colors duration-200 rounded bg-opacity-80 ${
                    activeNav === item.name
                      ? "text-white hover:text-white bg-global-primary font-semibold"
                      : "text-gray-600 hover:text-white hover:bg-global-primary-hover "
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-xl font-medium text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-xl font-medium text-white hover:text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                to={item.link}
                key={item.name}
                onClick={() => {
                  setActiveNav(item.name);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  activeNav === item.name
                    ? "text-global-primary"
                    : "text-gray-600 hover:text-global-primary-hover"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <SecondaryButton link="/login" className="mr-3">
                Login
              </SecondaryButton>
              <PrimaryButton link="/register">Sign Up</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
