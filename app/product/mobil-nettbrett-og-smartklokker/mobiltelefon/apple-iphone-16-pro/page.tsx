import ProductPage from "../../../../components/ProductPage";

const page = () => {
    return (
        <div>
            <ProductPage 
            specifications={{
                display: '6,7" Super Retina XDR OLED',
                description: 'iPhone 16 Pro smarttelefon er utstyrt med super-kapabel Apple Intelligence, trippelt kameraoppsett i profesjonell kvalitet, og en utrolig kraftig A18 Pro-prosessor. Et stort batteri og flere lademuligheter garanterer en langvarig opplevelse.',
                processor: 'Apple A18 Pro',
                storage: '256GB',
                camera: '48MP + 12MP + 12MP',
                battery: '4500mAh',
            }}
            product={{
                id: 2,
                imageSrc: "/iphone16pro_sort-titanium.avif",
                imageAlt: "Apple iPhone 16 Pro 256GB (sort titanium)",
                name: "Apple iPhone 16 Pro 256GB",
                description: 'Smarttelefon, 6,7" Super Retina XDR, A18 Pro chip, 48MP kamera, USB-C, IP68',
                color: "Sort Titanium",
                price: "14 990,-",
                href: "/product/mobil-nettbrett-og-smartklokker/mobiltelefon/apple-iphone-16-pro",
                rating: 4.5
            }}
            />
        </div>
    )
}; 

export default page;