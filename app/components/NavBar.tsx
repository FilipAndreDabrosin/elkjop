import Image from "next/image";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  return (
    <nav className="">
      <div>
        <div className="shadow-xs flex py-2 px-4 align-center shrink-0">
          <a href="/">
            <Image
              src="/Elkjop_logo_blue.png"
              alt="Elkjøp Logo"
              width={150}
              height={50}
            />
          </a>
          <div className="ml-auto flex ">
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

            <a href="/handlekurv">
              <div className="flex flex-col items-center justify-end hover:cursor-pointer text-center">
                <Image
                  src="/cart-outline.svg"
                  alt="Handlekurv ikon"
                  width={30}
                  height={30}
                />
                <p className="pl-2 pr-4 text-sm text-[#041753]">Handlekurv</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
