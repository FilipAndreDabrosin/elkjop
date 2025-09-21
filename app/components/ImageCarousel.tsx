"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  { src: "/kundeklubb-weekly-campaign.avif", href: "/" },
  { src: "/feel-good-weekly-campaign.avif", href: "/" },
  {
    src: "/pixel-launch-weekly-campaign.avif",
    href: "/product/mobil-nettbrett-og-smartklokker/mobiltelefon/google-pixel-10",
  },
];

const ImageCarousel = () => {
  // Tracker hvilket bilde som vises
  const [current, setCurrent] = useState(0);
  // Timer som bytter bilde hvert 4. sekund
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-128 overflow-hidden bg-white">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative h-full"
            style={{
              width: `${100 / images.length}%`,
            }}
          >
            <Link href={img.href}>
              <Image
                src={img.src}
                alt={`Carousel image ${idx + 1}`}
                fill
                className="object-cover cursor-pointer"
                priority={idx === 0}
              />
            </Link>
          </div>
        ))}
      </div>
      {/* Prikkene på bunnen av bildet for å navigere mellom bilder */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
