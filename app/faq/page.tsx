import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Wilpattu Wilderness",
  description:
    "Frequently asked questions about stays, safari experiences, dining, and booking at Wilpattu Wilderness in Sri Lanka.",
};

const faqs = [
  {
    question: "What kind of stay does Wilpattu Wilderness offer?",
    answer:
      "Wilpattu Wilderness offers luxury tented accommodation, wilderness camping, curated wildlife safari experiences, and nature-led stays in Wilpattu National Park, Sri Lanka.",
  },
  {
    question: "Where is Wilpattu Wilderness located?",
    answer:
      "The property is located in Hunuwilagama near Wilpattu National Park, giving guests a secluded wilderness base for safari and nature travel.",
  },
  {
    question:
      "Can I book a safari and camping experience at Wilpattu Wilderness?",
    answer:
      "Yes. Guests can book guided safari and camping experiences designed around wildlife discovery, outdoor immersion, and comfortable premium tent stays.",
  },
  {
    question: "What makes Wilpattu Wilderness unique?",
    answer:
      "The destination blends luxury tented stays, protected wild landscapes, safari exploration, and a peaceful untamed setting that feels deeply immersive and restorative.",
  },
  {
    question:
      "Is Wilpattu Wilderness suitable for couples, families, and wildlife travellers?",
    answer:
      "Yes. The experience is crafted for guests seeking a refined wilderness escape, whether they are travelling for a romantic retreat, family holiday, or a dedicated wildlife journey.",
  },
  {
    question: "How can I make a booking enquiry?",
    answer:
      "You can use the booking or contact options available on the website to request availability, discuss package preferences, and connect with the team for planning assistance.",
  },
];

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-[#4b3427]">
      <div className="rounded-2xl border border-[#bf885e]/20 bg-[#f8f1e8] p-8 shadow-sm sm:p-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#bf885e]">
          Frequently Asked Questions
        </p>
        <h1 className="mb-8 text-4xl font-serif text-black sm:text-5xl">FAQ</h1>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-[#bf885e]/15 bg-white/70 p-6"
            >
              <h2 className="mb-3 text-lg font-semibold text-black">
                {item.question}
              </h2>
              <p className="text-[15px] leading-8 text-black/75">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
