"use client";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                      }`}
        ></span>
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
        ></span>
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                      }`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
          <a href="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
