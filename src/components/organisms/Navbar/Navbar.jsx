"use client"
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState } from 'react';
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";
import Image from "@/components/atoms/Images/Image";
import SecondaryButton from "@/components/atoms/Buttons/SecondaryButton";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Home');

    const navItems = ['Home', 'Feature', 'Theme', 'Pricing', 'FAQ'];

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
                            <Image src="/images/logo.png" alt="Logo" className="w-[190px] h-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveNav(item)}
                                    className={`${activeNav === item
                                        ? 'text-primary font-semibold'
                                        : 'text-gray-600 hover:text-primary'
                                        } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <SecondaryButton link="/login">Login</SecondaryButton>
                        <PrimaryButton link="/register">
                            Sign Up
                        </PrimaryButton>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
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
                            <button
                                key={item}
                                onClick={() => {
                                    setActiveNav(item);
                                    setIsOpen(false);
                                }}
                                className={`${activeNav === item
                                    ? 'text-primary'
                                    : 'text-gray-600 hover:text-primary'
                                    } block px-3 py-2 text-base font-medium w-full text-left`}
                            >
                                {item}
                            </button>
                        ))}
                        <div className="pt-4 space-y-2">
                            <SecondaryButton className="mr-3">
                                Login
                            </SecondaryButton>
                            <PrimaryButton>
                                Sign Up
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;