import { GiWoodenChair } from "react-icons/gi"; 
import React, { useState } from "react";
import NavLinks from "../../molecules/NavLinks/NavLinks";
import ThemeTwoNavActions from "../../molecules/NavActions/ThemeTwoNavActions";
import ThemeTwoMobileMenu from "../../molecules/MobileMenu/ThemeTwoMobileMenu";
import NavLink from "../../atoms/NavLink/NavLink";
import { GiKnifeFork } from "react-icons/gi";

const ThemeFourNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {
            text: "HOME",
            href: "#",
            isActive: true,
        },
        {
            text: "Table",
            href: "#",
            isActive: false,
        },
        {
            text: "Chair",
            href: "#",
            isActive: false,
        },
        {
            text: "Bed",
            href: "#",
            isActive: false,
        },
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
                <div className="relative flex items-center justify-between h-16">
                    {/* Center - Logo */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                        <div className="flex items-center gap-2">
                            <GiWoodenChair className="text-2xl md:text-3xl text-primary" />
                            <span className="text-lg md:text-xl font-bold">Furniture</span>
                        </div>
                    </div>

                    {/* Mobile Logo */}
                    <div className="flex md:hidden">
                        <div className="flex items-center gap-2">
                            <GiWoodenChair className="text-2xl md:text-3xl text-primary" />
                            <span className="text-lg md:text-xl font-bold">Furniture</span>
                        </div>
                    </div>
                    {/* Left side - Navigation Links */}
                    <div className="hidden lg:flex space-x-4">
                        <NavLinks
                            linkClassName={"px-2 py-2 font-medium text-sm"}
                            links={links}
                            isMobileMenuOpen={isOpen}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <ThemeTwoMobileMenu onToggle={() => setIsOpen(!isOpen)} />
                    </div>



                    {/* Right side - Actions */}
                    <div className="flex items-center">
                        <ThemeTwoNavActions />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 bg-white">
                        <div className="flex flex-col space-y-3 px-2">
                            {/* <NavLinks links={links} isMobileMenuOpen={isOpen} /> */}
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

export default ThemeFourNavbar;
