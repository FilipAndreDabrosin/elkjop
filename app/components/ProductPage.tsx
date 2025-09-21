"use client";
import Image from "next/image";
import { Product, ProductPhoneSpecifications } from "../types/Product";
import { Rating, Typography } from "@material-tailwind/react";
import { useCart } from "../hooks/useCart";

// Ville lagt til en fargevelger, men har ikke fått tid til å se på det enda.

type ProductPageProps = {
  product: Product;
  specifications: ProductPhoneSpecifications;
};

const ProductPage: React.FC<ProductPageProps> = ({
  product,
  specifications,
}) => {
  const { addToCart } = useCart();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Produkt Bilde */}
        <div className="flex justify-center">
          <div className=" rounded-lg p-8 border border-gray-100">
            <Image
              src={product.imageSrc}
              width={300}
              height={500}
              alt={product.imageAlt}
              className="object-contain m-2"
            />
          </div>
        </div>

        {/* Produkt Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-[Montserrat]">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2">
              {/* @ts-expect-error: Rating component bruker jsx. */}
              <Rating
                value={Math.floor(product.rating)}
                readonly
                className="flex items-center gap-1"
                placeholder=""
              />
              {/* @ts-expect-error: Rating component bruker jsx. */}
              <Typography className="text-gray-600">
                ({product.rating} av 5)
              </Typography>
            </div>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          </div>

          {/* Rating */}

          {/* Price */}
          <div>
            <p className="text-3xl font-bold text-">{product.price}</p>
          </div>

          {/* Product Description */}
          <div className="prose">
            <h3 className="text-lg font-semibold mb-2">Beskrivelse</h3>
            <p className="text-gray-700">{specifications.description}</p>
          </div>
          {/* Add to Cart Button */}
          <div className="pt-4">
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-[#6AA334] hover:bg-[#5b8d2d] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Legg i handlekurv
            </button>
          </div>

          {/* Spesifikasjoner */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">Spesifikasjoner</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-600">Skjerm:</span>
                <p>{specifications.display}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Lagring:</span>
                <p>{specifications.storage}</p>
              </div>

              <div>
                <span className="font-medium text-gray-600">Kamera:</span>
                <p>{specifications.camera}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Batteri:</span>
                <p>{specifications.battery}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Prossesor:</span>
                <p>{specifications.processor}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Farge</span>
                <p>{product.color}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
