import Image from "next/image";
import SearchBar from "./SearchBar";
import HamburgerMenu from "./HamburgerMenu";


const NavBar = () => {
  return (
    <nav className="">
      <div className="shadow-xs justify-between flex py-2 px-4 align-center">
        <a href="/">
          <Image
            src="/Elkjop_logo_blue.png"
            alt="Elkjøp Logo"
            width={150}
            height={50}
          />
        </a>
        <div className="flex items-center justify-items-start">
          <SearchBar />
        </div>
        <div className="align-center flex items-center">
        <HamburgerMenu />
        </div>
        <div className="flex flex-col items-center justify-end">
            <Image 
            src="/person-outline.svg"
            alt="Bruker ikon"
            width={30}
            height={30}
            />
            <p className="pl-2 pr-4 text-sm text-[#041753]">Logg inn</p>
        </div>
        <div className="flex flex-col items-center justify-end">
            <Image 
            src="/cart-outline.svg"
            alt="Handlekurv ikon"
            width={30}
            height={30}
            />
            <p className="pl-2 pr-4 text-sm text-[#041753]">Handlekurv</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
