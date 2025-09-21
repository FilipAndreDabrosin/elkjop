import ProductPage from "../../../../components/ProductPage";

const page = () => {
    return (
        <div>
            <ProductPage 
            specifications={{
                display: '6,3" OLED',
                description: 'Google Pixel 10 5G har et 48MP vidvinkelkamera med Super Res Zoom-funksjon, samt en svært livaktig 6,3" OLED-skjerm og 12GB RAM for smidig multitasking, alt innkapslet i slitesterkt Corning Gorilla Glass Victus 2 som beskytter enheten.',
                processor: ' Tensor G4-processor',
                storage: '256GB',
                camera: '50MP',
                battery: '4700mAh',
            }}
            product={{
                id: 1,
                imageSrc: "/pixel10-obsidian.avif",
                imageAlt: "Google Pixel 10 5G 256 (obsidian)",
                name: "Google Pixel 10 5G 256",
                description: 'Smarttelefon, 6,3" OLED, 12GB RAM, 48+10,8+12 og 10,5MP kamera, IP68/IP69',
                color: "Obsidian",
                price: "11 290,-",
                href: "/product/mobil-nettbrett-og-smartklokker/mobiltelefon/google-pixel-10",
                rating: 4.0
            }}
            />
        </div>
    )
}; 

export default page;