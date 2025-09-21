"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import { useCart } from "../hooks/useCart";

const NavBar = () => {
  const { getTotalItems } = useCart();
  return (
    <nav className="w-full shadow-xs bg-white">
      <div className="mx-auto md:max-w-[1600px] w-full flex py-2 px-4 items-center">
        <Link href="/">
          <Image
            src="/Elkjop_logo_blue.png"
            alt="Elkjøp Logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="ml-auto flex">
          <div className="flex items-center justify-items-start w-[210%]">
            <SearchBar />
          </div>
          <div className="align-center flex items-center">
            <HamburgerMenu />
          </div>
        </div>
        <div className="ml-auto flex justify-between">
          <div className="flex flex-col items-center justify-end hover:cursor-pointer text-center ">
            <Image
              src="/person-outline.svg"
              alt="Bruker ikon"
              width={30}
              height={30}
            />
            <p className="pl-2 pr-4 text-sm text-[#041753]">Logg inn</p>
          </div>
          <Link href="/handlekurv">
            <div className="flex flex-col items-center justify-end hover:cursor-pointer text-center relative">
              <div className="relative">
                <Image
                  src="/cart-outline.svg"
                  alt="Handlekurv ikon"
                  width={30}
                  height={30}
                />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#6AA334] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              <p className="pl-2 pr-4 text-sm text-[#041753]">Handlekurv</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
