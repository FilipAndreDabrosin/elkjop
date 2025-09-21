"use client";

import { useCart } from "../hooks/useCart";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();
  {
    /* Hvis carten er tom viser den dette */
  }
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Handlekurv</h1>
        <div className="text-center py-16">
          <h2 className="text-xl text-gray-600 mb-4">Din handlekurv er tom</h2>
          <p className="text-gray-500 mb-6">
            Legg til produkter for å begynne å handle
          </p>
          <Link
            href="/"
            className="bg-[#6AA334] hover:bg-[#61962f] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Fortsett å handle
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Handlekurv ({getTotalItems()} produkter)
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              {/* Product Bilde */}
              <div className="flex-shrink-0">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={80}
                  height={80}
                  className="object-contain bg-gray-50 rounded"
                />
              </div>

              {/* Litt info om produktet */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">Farge: {item.color}</p>
                <p className="font-bold text-gray-900">{item.price}</p>
              </div>

              {/* For å endre antall rett inne i handlekurv siden */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className=" p-2"
                title="Fjern fra handlekurv"
              >
                <Image
                  src="/trash-outline.svg"
                  alt="Fjern ikon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summerer carten */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Totalt:</span>
          <span className="text-2xl font-bold text-gray-900">
            {getTotalPrice()}
          </span>
        </div>
        {/* Knappen ville ført deg til en kasse side, men det har jeg rett og slett ikke tid til å få laget og jeg vil heller prioritere andre ting på nettsiden*/}
        <div className="space-y-3">
          <button className="w-full bg-[#6AA334] hover:bg-[#5d902d] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Gå til kassen
          </button>
          <Link
            href="/"
            className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Fortsett å handle
          </Link>
        </div>
      </div>
    </div>
  );
}
