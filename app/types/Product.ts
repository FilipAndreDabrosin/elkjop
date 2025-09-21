// Definerer props for et produkt.


export type ProductPhoneSpecifications = {
  display: string;
  description: string;
  processor: string;
  storage: string;
  camera: string;
  battery: string; 
}



// Brukes i ProductCarousel og delvis i ProductPage
export type Product = {
  id: number;
  imageAlt: string;
  imageSrc: string;
  name: string;
  description: string;
  color: string;
  price: string;
  href: string;
  rating: number;
};