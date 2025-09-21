"use client";

import { useState, useRef } from "react";
import { Minus, Plus } from "lucide-react";


// Object for FAQ
interface FAQ {
  question: string;
  answer: string;
}

const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <ul>
      {/* Looper over hvert spørmål */}
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          selected={selected}
          setSelected={setSelected}
          index={index}
        />
      ))}
    </ul>
  );
};

export default FAQAccordion;

// Props for hver accordion item
interface AccordionItemProps {
  faq: FAQ;
  selected: number | null;
  setSelected: (index: number | null) => void;
  index: number;
}

const AccordionItem = ({
  faq,
  selected,
  setSelected,
  index,
}: AccordionItemProps) => {
  // Sjekker om den er åpen eller lukket
  const isOpen = selected === index;
  const Icon = isOpen ? Minus : Plus;

  // For å hindre overflow på svaret.
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <li className="border-b">
      <button
        onClick={() => setSelected(isOpen ? null : index)}
        className={
          "cursor-pointer w-full flex justify-between items-center py-10 text-lg font-semibold  "
        }
      >
        {faq.question}
        <Icon size={20} />
      </button>
      <div
        className="overflow-hidden transistion-all duration-300 "
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div ref={contentRef} className="pb-10">
          {faq.answer}
        </div>
      </div>
    </li>
  );
};
