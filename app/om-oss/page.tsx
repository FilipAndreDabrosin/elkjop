import Image from "next/image";

// Om oss side. Jeg ville forbedret hvordan siden så ut hvis jeg hadde hatt mer tid.

const Page = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold py-6 ">OM ELKJØP</h1>
      <div className="mb-4">
        <Image
          src={"/elkjop-ansatte.avif"}
          alt={"Elkjøp Ansatte"}
          height={800}
          width={1600}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">DETTE ER ELKJØP</h2>
        <p>
          Elkjøp ble grunnlagt i Norge i 1962 og har siden den gang har Elkjøp
          vokst til å bli en solid markedsleder innen forbrukerelektronikk og
          hvitevarer i Norden. Konsernet består av rundt 11 000 engasjerte
          medarbeidere som opererer under merkevarene Elkjøp og Elkjøp
          Phonehouse i Norge, Elgiganten og Elgiganten Phonehouse i Sverige,
          Elgiganten i Danmark og Gigantti i Finland. Elko på Island, Elding på
          Færøyene og Pisiffik på Grønland. I Norge er vi godt over 4000
          medarbeidere og har rundt 150 butikker.
          <br />
          <br />
          Vi i Elkjøp jobber hardt hver dag for å berike forbrukernes liv
          gjennom teknologi, enten de kommer til oss på nett eller besøker
          butikkene våre. Vi gjør dette ved å løse teknologiproblemer og dekke
          sentrale menneskelige behov på tvers av en rekke områder, inkludert
          underholdning, produktivitet, kommunikasjon, mat, sikkerhet og helse.
        </p>
      </div>
    </div>
  );
};

export default Page;
