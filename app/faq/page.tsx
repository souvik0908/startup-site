import type { Metadata } from "next";
import { PageHero } from "@/app/components/blocks";
import { company } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about what Kerria measures, who it is for, which lac crops it follows, and the fact that the device is not yet in groves.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Is Kerria already on trees?",
    a: "No. The first field version is being built. Pictures on this site show the setup being designed. They are not photographs from a deployment, and the sample reading on the homepage is an example.",
  },
  {
    q: "Which crops does the timing follow?",
    a: "Rangeeni and kusmi: baisakhi, katki, jethwi, and aghani, on palas, ber, and kusum. The pod is meant to follow heat and wetness on that shoot, because the calendar date moves.",
  },
  {
    q: "Does the grower need a smartphone?",
    a: "No. The gateway sends a text or a Hindi voice call. The pod does not use the grower’s mobile data.",
  },
  {
    q: "Who is it sold to?",
    a: "Farmer-producer groups and forest-produce federations that already handle sticklac. A few pods and one gateway are shared across a hamlet of trees.",
  },
  {
    q: "Will it tell me the grade of my lac?",
    a: "No. Kerria does not grade resin, set a price, or replace the scraper. It says when crawlers are close and when weather threatens insects that have just settled.",
  },
  {
    q: "Where does the name come from?",
    a: "Kerria is the genus of the Indian lac insect, Kerria lacca. The company is named for that insect, not for a general farm sensor.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <PageHero
        kicker="FAQ"
        title="Short answers."
        lede={`Plain replies about ${company.name}. If yours is not here, write to ${company.email}.`}
      />
      <section className="shell divide-y divide-white/10 border-y border-white/10 py-4">
        {faqs.map((item) => (
          <article key={item.q} className="grid gap-3 py-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <h2 className="display text-2xl sm:text-3xl">{item.q}</h2>
            <p className="lede">{item.a}</p>
          </article>
        ))}
      </section>
      <div className="shell h-16" />
    </main>
  );
}
