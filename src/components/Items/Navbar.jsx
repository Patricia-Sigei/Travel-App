import React, { useState, useEffect } from "react";
import { CloseIcon, MenuIcon } from "../UI/Icons";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Watch for scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-blue-800 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-32 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="logo.png" alt="Logo" className="h-16 rounded-full" />
          <div>
            <p
              className={`text-xl font-bold transition-colors ${
                scrolled ? "text-blue-800" : "text-white"
              }`}
            >
              Doogsan Enterprises
            </p>
            <p
              className={`text-xs transition-colors ${
                scrolled ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Your Trusted Travel Agency
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-green-500">Home</li>
          <li className="cursor-pointer hover:text-green-500">About</li>
          <li className="cursor-pointer hover:text-green-500">Services</li>
          <li className="cursor-pointer hover:text-green-500">Destinations</li>
          <li className="cursor-pointer hover:text-green-500">Contact</li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-colors ${
            scrolled ? "bg-white text-blue-800" : "bg-teal-200 text-black"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
