import type { Metadata } from "next";
import { PageHero } from "@/app/components/blocks";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Kerria at hello@kerria.online about the pod, a future field trial, or a question from a lac group.",
  alternates: { canonical: "/contact" },
};

const include = [
  "Whether you grow lac, work with a farmer group, or build hardware",
  "The host trees you work with: palas, ber, kusum, or something else",
  "The crop you are asking about, if you have one in mind",
  "The district, so we know which season you mean",
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="One address."
        lede="Kerria does not run a contact form on this site. Mail opens in your own email app and comes to the company inbox."
      />

      <section className="shell grid gap-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <a href={mailto} className="glass block rounded-[2rem] p-8">
          <p className="kicker">Email</p>
          <p className="display mt-4 break-all text-[clamp(1.8rem,4vw,3rem)] text-amber">
            {company.email}
          </p>
          <p className="lede mt-4 text-[1rem]">{company.host}</p>
        </a>
        <div className="rounded-[2rem] border border-white/10 p-8">
          <h2 className="display text-3xl">Useful things to include</h2>
          <ul className="mt-5 space-y-3">
            {include.map((item) => (
              <li key={item} className="lede text-[1rem]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
