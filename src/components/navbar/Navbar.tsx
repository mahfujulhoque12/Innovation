"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaQuestionCircle, FaBars, FaTimes } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ logo = "Our Logo", contact = "+0081525155" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#our-services" },
    { name: "About Us", href: "#about-us" },
    { name: "Vision", href: "#vision" },
    { name: "Blog", href: "#blog" },
    { name: "Contact Us", href: "#contact-us" },
  ];

  return (
    <div>
      {/* Top Navbar */}
      <section className="bg-gradient-to-r from-[#0C399C] to-[#051477] border-b border-gray-400">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center py-3">
            <p className="text-base text-gray-400 font-semibold flex items-center gap-2 cursor-pointer hover:text-green-500 transition-all duration-200">
              <IoChatboxEllipses size={25} /> Live Chat
            </p>
            <p className="text-base text-gray-400 font-semibold flex items-center gap-2 cursor-pointer hover:text-green-500 transition-all duration-200">
              <FaQuestionCircle size={25} /> Help Center
            </p>
            <p className="text-base text-gray-400 font-semibold flex items-center gap-2 cursor-pointer hover:text-green-500 transition-all duration-200">
              <MdAddIcCall size={25} /> {contact}
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Main Navbar */}
      <section className="bg-gradient-to-r from-[#0C399C] to-[#051477] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">{logo}</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold text-base transition-all duration-200 ${
                    pathname === item.href ? "text-green-200" : "text-gray-200"
                  } hover:text-green-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#051477] text-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-6 mt-10 px-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`font-semibold text-base transition-all duration-200 ${
                  pathname === item.href ? "text-green-200" : "text-gray-200"
                } hover:text-green-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
