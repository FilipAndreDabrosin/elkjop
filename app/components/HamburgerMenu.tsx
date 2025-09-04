"use client";
import React, { useState } from "react";
import Image from "next/image";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center hover:cursor-pointer p-4"
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
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50 text-[#041753] ">
          <p className="text-center shadow-sm font-bold text-xl mb-2">Alle kategorier</p>
          <a href="/pc-og-datautstyr" className="block px-4 py-2 hover:bg-gray-100">
            <div className="flex ">
              <Image
                src="/laptop-icon.avif"
                width={30}
                height={30}
                alt="Laptop icon"
              />
              PC
            </div>
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-100">
            <div className="flex">
              <Image
                src="/gaming-icon.avif"
                width={30}
                height={30}
                alt="Gaming ikon"
              />
              Gaming
            </div>
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            <div className="flex">
              <Image
                src="/mobile-icon.avif"
                width={30}
                height={30}
                alt="Mobil ikon"
              />
              Mobil
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
