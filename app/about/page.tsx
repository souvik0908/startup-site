import type { Metadata } from "next";
import { Closing, PageHero, Picture } from "@/app/components/blocks";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kerria is named for the lac insect. The company is building a field sensor so growers can time crawler emergence and protect the insects after they settle.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="Named for the insect, built for the week that decides the crop."
        lede="Kerria lacca is the scale insect that makes lac. The company takes that name because the product watches the insect’s own timetable, on the tree it is actually using."
      />

      <section className="shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-5">
          <p className="lede">
            Growers in Jharkhand, Chhattisgarh, Madhya Pradesh, and West Bengal
            already know this crop. They prune the host, tie broodlac to the
            shoot, and wait for crawlers to leave the bundle and settle. Female
            insects then secrete the resin that is scraped off and sold as
            sticklac. Refineries turn that into shellac.
          </p>
          <p className="lede">
            What they do not have is a reading from the branch itself. Fog,
            mist, and an unseasonal rain do not show up evenly across a
            district, and broodlac does not wait in storage until a convenient
            morning. Kerria exists to put that reading on the shoot and get a
            plain warning to the person who can still act.
          </p>
          <p className="lede">
            The first field version is being built. Kerria is not yet tied to
            growers’ trees, and this site does not list customers, yields, or
            funding. Those figures are not ours to publish.
          </p>
        </div>
        <Picture
          src="/images/hero-grove.jpg"
          alt="Flowering palas trees in low evening light"
          caption="Palas, one of the main hosts for rangeeni lac."
        />
      </section>

      <section className="shell grid gap-4 py-8 md:grid-cols-3">
        {[
          ["The insect", "Kerria lacca settles on tender shoots and covers itself in resin. The company name is the genus."],
          ["The hosts", "Palas, ber, and kusum carry most of the crop. Rangeeni and kusmi strains are not swapped between hosts."],
          ["The buyer", "A shared pod and one hamlet gateway fit a farmer group better than a device on every tree."],
        ].map(([title, body]) => (
          <article key={title} className="glass rounded-3xl p-6">
            <h2 className="display text-2xl">{title}</h2>
            <p className="lede mt-3 text-[1rem]">{body}</p>
          </article>
        ))}
      </section>

      <Closing />
    </main>
  );
}
