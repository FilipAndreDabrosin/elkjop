import FAQAccordion from "../components/FAQAccordion";

const faqs = [
  {
    question: "Hvordan kan jeg kontake kundeservice?",
    answer: "Du kan kontake kundeservice via telefon 21 00 21 21",
  },
  {
    question: "Hvor finner jeg butikkene deres?",
    answer:
      "Du finner en oversikt over alle våre butikker på finn butikk siden.",
  },
  {
    question: "Gjelder angrerett og åpent kjøp når jeg har åpnet produktet?",
    answer:
      "14 dagers angrerett gjelder når du kjøper online, du kan åpne emballasjen og undersøke varen. Hvis du gjør for omfattende undersøkelser, eller varen blir skadet, kan du risikere at du ikke får tilbake hele beløpet. En del av våre produkter og tjenester en unntatt angreretten, se våre salgsbetingelser. ",
  },
  {
    question: "Har dere prisgaranti?",
    answer: "Ja. Vi jobber hardt hver eneste dag for å kunne gi deg markedets laveste priser. Vi etterstreber å alltid være billigst. Lykkes vi ikke, så matcher vi prisen til konkurrentene Komplett, NetOnNet, Skousen, Power i kjøpsøyeblikket. Det eneste du trenger å gjøre er å dokumentere at en av de overnevnte konkurrentene har lavere pris og at varen er tilgjenglig for kjøp til oppgitt pris."
  }
];

const page = () => {
  return (
    <div className="max-w-3xl mx-auto py-4">
      <h1 className="text-4xl font-medium mb-10 w-full text-center">
        Vanlige spørsmål
      </h1>
      <div>
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  );
};

export default page;
