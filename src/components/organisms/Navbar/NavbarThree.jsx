import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavbarThree = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');
    const [notifications] = useState([
        { id: 1, text: "New message received", isRead: false },
        { id: 2, text: "Your subscription is expiring", isRead: false },
        { id: 3, text: "Update available", isRead: true }
    ]);

    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Feature',
            link: '/feature'
        },
        {
            name: 'Theme',
            link: '/theme'
        },
        {
            name: 'Pricing',
            link: '/pricing'
        },
        {
            name: 'Faq',
            link: '/faq'
        }
    ];

    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 font-bold text-xl">
                        <Link to="/" className="text-primary font-bold text-xl"> 
                            Founder King
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Search Bar */}
                        <div className={`relative ${isSearchOpen ? 'w-64' : 'w-8'} transition-all duration-300`}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className={`bg-gray-800 rounded-full py-1 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
                                    } transition-all duration-300`}
                            />
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:text-blue-400 text-primary"
                            >
                                <BiSearchAlt2 size={16} className="text-primary" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex space-x-6">
                            {navItems.map((item) => (
                                <Link to={item.link}
                                    key={item}
                                    onClick={() => setActiveNav(item)}
                                    className={`${activeNav === item
                                        ? 'text-primary font-semibold'
                                        : 'text-gray-100 hover:text-primary'
                                        } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
                                    className="relative hover:text-blue-400 transition-colors"
                                >
                                    <IoIosNotifications size={20} className="text-primary" />
                                    {notifications.some(n => !n.isRead) && (
                                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                                    )}
                                </button>

                                {/* Notification Dropdown */}
                                {isNotificationDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                                        {notifications.map(notification => (
                                            <div
                                                key={notification.id}
                                                className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${!notification.isRead ? 'bg-gray-700/50' : ''
                                                    }`}
                                            >
                                                <p className="text-sm text-primary">{notification.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* User Profile */}
                            <button className="hover:text-blue-400 transition-colors">
                                <BiUserCircle size={20} className="text-primary" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden hover:text-blue-400 transition-colors"
                    >
                        {isMobileMenuOpen ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 space-y-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-gray-800 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex flex-col space-y-4">
                            <a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
                            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                            <a href="#analytics" className="hover:text-blue-400 transition-colors">Analytics</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavbarThree;