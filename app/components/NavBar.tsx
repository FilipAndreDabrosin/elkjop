import Image from "next/image";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav>
      <div className="drop-shadow-md justify-between flex px-4 align-center">
        <div>
          <Image
            src="/Elkjop_logo_blue.png"
            alt="Elkjøp Logo"
            width={150}
            height={50}
          />
        </div>
        <div className="flex items-center justify-items-start">
          <SearchBar />
        </div>
        <div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
