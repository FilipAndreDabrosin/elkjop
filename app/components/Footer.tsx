import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#041753] text-gray-200">
        <div className="container mx-auto py-14 px-6">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
            <div className="lg:col-span-4 col-span-12">
              <a href="/" className="col-span-2">
                <Image
                  src="/elkjop_logo_footer.svg"
                  width={150}
                  height={100}
                  alt="Elkjøp logo"
                />
              </a>
              <p className="mt-6  text-xs text-gray-400">
                ©2025 Elkjøp Norge AS. Alle rettigheter reservert <br />
                Org nr.: NO947 054 600MVA
              </p>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12">
              <h5 className="tracking-wide font-semibold">
                Elkjøp
              </h5>
              <ul className="list-none mt-6 space-y-2">
                <li>
                  <a
                    href="/om-oss"
                    className="transition-all ease-in-out"
                  >
                    Om oss
                  </a>
                </li>
                <li>
                  <a
                    href="/kontakt-oss"
                    className="transition-all ease-in-out"
                  >
                    Kontakt oss
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12">
              <h5 className="tracking-wide  font-semibold">
                Informasjon
              </h5>
              <ul className="list-none mt-6 space-y-2">
                <li>
                  <a
                    href="/finn-butikk"
                    className=" transition-all ease-in-out"
                  >
                    Finn butikk
                  </a>
                </li>
                <li>
                  <a
                    href="/kundeklubb"
                    className="transition-all ease-in-out"
                  >
                    Kundeklubb
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 md-col-span-4 col-span-12"></div>
          </div>
        </div>
        
      </footer>
    </div>
  );
};
export default Footer;
