import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <div className="mt-4">
        <article>
          <div className="">
            <ImageCarousel />
          </div>
        </article>
    </div>
  );
}
