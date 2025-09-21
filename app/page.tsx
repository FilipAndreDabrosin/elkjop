import ImageCarousel from "./components/ImageCarousel";
import ProductCarousel from "./components/ProductCarousel";

export default function Home() { 
  return (
    <div className="mt-4">
        <article>
          <div className="">
            <ImageCarousel />
          </div>
        </article>
        <article>
          <div>
            <ProductCarousel 
              title={"Utvalgte produkter"}
              products={[
                {
                  id: 1,
                  imageAlt: "Google Pixel 10 5G smarttelefon 12/256 (obsidian)",
                  imageSrc: "/pixel10-obsidian.avif",
                  name: "Google Pixel 10 5G smarttelefon 12/256",
                  description: 'Smarttelefon, 6,3" OLED, 12GB RAM, 48+10,8+12 og 10,5MP kamera, IP68/IP69',
                  color: "Obsidian",
                  price: "11 290,-",
                  href: "/product/mobil-nettbrett-og-smartklokker/mobiltelefon/google-pixel-10",
                  rating: 4.0,
                },
                {
                  id: 2,
                  imageAlt: "Apple iPhone 16 Pro 256GB (sort titanium)",
                  imageSrc: "/iphone16pro_sort-titanium.avif",
                  name: "Apple iPhone 16 Pro 256GB",
                  description: "Smarttelefon, 6,7\" Super Retina XDR, A18 Pro chip, 48MP kamera, USB-C, IP68",
                  color: "Space Black",
                  price: "14 990,-",
                  href: "/product/mobil-nettbrett-og-smartklokker/mobiltelefon/apple-iphone-16-pro",
                  rating: 4.5,
                },
                {
                  id: 3,
                  imageAlt: "Dreame X40 Ultra robotstøvsuger DI1038 (hvit)",
                  imageSrc: "/dreame-x40_hvit.avif",
                  name: "Dreame X40 Ultra robotstøvsuger DI1038 (hvit)",
                  description: "Robotstøvsuger med moppefunksjon, automatisk tømming, 3D kartlegging, WiFi-app",
                  color: "Hvit",
                  price: "9499,-",
                  href: "/products/dreame-x40-ultra",
                  rating: 4.9,
                },
                {
                  id: 4,
                  imageAlt: "Apple Watch SE 2nd Gen 40mm GPS (Stjerneskinn Alu)",
                  imageSrc: "/applewatch_SE2.avif",
                  name: "Apple Watch SE 2nd Gen 40mm GPS (Stjerneskinn Alu)",
                  description: "Smartklokke, Retina-skjerm, GPS, vanntett, pulsmåler, aktivitetsmåling",
                  color: "Stjerneskinn Aluminium",
                  price: "2 687,-",
                  href: "/products/apple-watch-series10",
                  rating: 4.7,
                },
                {
                  id: 5,
                  imageAlt: "Samsung Galaxy S25 128GB (navy)",
                  imageSrc: "/samsung-galaxy-25.avif",
                  name: "Samsung Galaxy S25 128GB",
                  description: "Smarttelefon, 6,2\" Dynamic AMOLED, 50MP kamera, IP68",
                  color: "Navy",
                  price: "11490,-",
                  href: "/products/galaxy-s24-ultra",
                  rating: 5,
                },
                {
                  id: 6,
                  imageAlt: "MacBook Air M3 15-inch 256GB (midnight)",
                  imageSrc: "/macbook-air-m3.avif",
                  name: "MacBook Air M3 15-inch 256GB",
                  description: "Laptop, 15\" Retina-skjerm, Apple M3 chip, 8GB RAM, 256GB SSD, macOS",
                  color: "Midnight",
                  price: "18 990,-",
                  href: "/products/macbook-air-m3",
                  rating: 4.8,
                },
                {
                  id: 7,
                  imageAlt: "Sony WH-1000XM5 Wireless Headphones (sort)",
                  imageSrc: "/sony-xm5.avif",
                  name: "Sony WH-1000XM5 Wireless Headphones",
                  description: "Trådløse hodetelefoner, aktiv støydemping, 30t batteritid, Bluetooth 5.2",
                  color: "Sort",
                  price: "3 990,-",
                  href: "/products/sony-wh1000xm5",
                  rating: 4.4,
                },
                {
                  id: 8,
                  imageAlt: "iPad Pro 12.9-inch M4 2TB (stellarsvart)",
                  imageSrc: "/ipad-pro-m4.avif",
                  name: "iPad Pro 12.9-inch M4 256GB",
                  description: "Nettbrett, 12,9\" Liquid Retina XDR, M4 chip, Face ID, WiFi 6E",
                  color: "Stellar Svart",
                  price: "34 390,-",
                  href: "/products/ipad-pro-m2",
                  rating: 4.5,
                },
                {
                  id: 9,
                  imageAlt: "Nintendo Switch OLED 64GB (neon)",
                  imageSrc: "/switch-oled.avif",
                  name: "Nintendo Switch OLED 64GB",
                  description: "Spillkonsoll, 7\" OLED-skjerm, 64GB lagring, Joy-Con, TV-dock",
                  color: "Neon Rød/Blå",
                  price: "3 490,-",
                  href: "/products/nintendo-switch-oled",
                  rating: 4.3,
                },
                {
                  id: 10,
                  imageAlt: "AirPods Pro 2nd Generation (white)",
                  imageSrc: "/airpods-pro-2.avif",
                  name: "AirPods Pro 2nd Generation",
                  description: "Trådløse ørepropper, aktiv støydemping, MagSafe-lading, Bluetooth 5.3",
                  color: "White",
                  price: "2 790,-",
                  href: "/products/airpods-pro-2",
                  rating: 4.6,
                },
              ]}
            />
          </div>
        </article>
    </div>
  );
}
