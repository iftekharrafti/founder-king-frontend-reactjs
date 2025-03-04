import { FaTshirt } from "react-icons/fa"; 
import { GiWoodenChair } from "react-icons/gi";
import React, { useState } from "react";
import NavLinks from "../../molecules/NavLinks/NavLinks";
import ThemeTwoNavActions from "../../molecules/NavActions/ThemeTwoNavActions";
import ThemeTwoMobileMenu from "../../molecules/MobileMenu/ThemeTwoMobileMenu";
import NavLink from "../../atoms/NavLink/NavLink";

const ThemeFiveNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { text: "HOME", href: "#", isActive: true },
        { text: "Men's Fashion", href: "#", isActive: false },
        { text: "Women's Fashion", href: "#", isActive: false },
        { text: "Boys's Fashion", href: "#", isActive: false },
        {
            text: "Wardrobe",
            href: "#",
            isActive: false,
            dropdownItems: [
                { text: "Gift Sets", href: "#" },
                { text: "Islamic Items", href: "#" },
                { text: "Books", href: "#" },
                { text: "Accessories", href: "#" },
            ],
        },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Left - Logo */}
                    <div className="flex items-center gap-2">
                        <FaTshirt className="text-2xl md:text-3xl text-primary" />
                        <span className="text-lg md:text-xl font-bold">Fashion</span>
                    </div>

                    {/* Middle - Navigation Links */}
                    <div className="hidden lg:flex space-x-6">
                        <NavLinks linkClassName="px-2 py-2 font-medium text-sm" links={links} />
                    </div>

                    {/* Right - Actions */}
                    <div className="hidden lg:flex items-center">
                        <ThemeTwoNavActions />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <ThemeTwoMobileMenu onToggle={() => setIsOpen(!isOpen)} />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 bg-white">
                        <div className="flex flex-col space-y-3 px-2">
                            {links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    href={link.href}
                                    isActive={link.isActive}
                                    dropdownItems={link.dropdownItems}
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default ThemeFiveNavbar;
