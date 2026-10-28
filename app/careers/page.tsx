import type { Metadata } from "next";
import { PageHero } from "@/app/components/blocks";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Kerria is not hiring for listed roles yet. The first work will be firmware, a Hindi alert path, and field trials with lac groups.",
  alternates: { canonical: "/careers" },
};

const later = [
  {
    title: "Firmware",
    body: "A pod that sleeps most of the day, wakes to read three sensors, and reaches a gateway without a grower’s Wi-Fi.",
  },
  {
    title: "The call path",
    body: "SMS and Hindi voice that still make sense on a basic phone, with a record the farmer group can look back on.",
  },
  {
    title: "Field trials",
    body: "Time spent in lac belts with the people who inoculate palas, ber, and kusum, checking the warning against what the insects actually do.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        kicker="Careers"
        title="No open roles yet."
        lede="Kerria is a small build. There is no job list, no office to apply through, and no posted salary. When hiring starts, it will be for the work below."
      />

      <section className="shell grid gap-4 py-12 md:grid-cols-3">
        {later.map((item) => (
          <article key={item.title} className="glass rounded-3xl p-6">
            <h2 className="display text-2xl">{item.title}</h2>
            <p className="lede mt-3 text-[1rem]">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="shell pb-20">
        <div className="glass rounded-[2rem] p-6 sm:p-10">
          <h2 className="display text-3xl sm:text-4xl">If that is already your work</h2>
          <p className="lede mt-4 max-w-2xl">
            Write to {company.email}. Say what you have built, and whether you
            can spend time in a lac-growing district. A note is enough. Please
            don’t send a generic application for a role that is not open.
          </p>
          <a className="btn mt-8" href={mailto}>
            {company.email}
          </a>
        </div>
      </section>
    </main>
  );
}
