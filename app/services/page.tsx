import type { Metadata } from "next";
import { Closing, PageHero, Picture } from "@/app/components/blocks";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kerria’s services are crawler-emergence warnings, settlement weather alerts, and a village gateway that calls the grower in Hindi.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    n: "01",
    title: "Crawler timing",
    body: "A warning when crawlers on that bundle are close, so the group can tie or inspect on the right day. The estimate uses heat on the shoot, the crop, and the host. It is not a date copied from last year’s calendar.",
  },
  {
    n: "02",
    title: "Settlement watch",
    body: "For the first weeks after the insects fix themselves to the shoot, the same pod watches leaf wetness, humidity, and temperature. If fog hours or a rain burst cross the point where young insects are washed off, the grower hears about it in time to cover or shift bundles.",
  },
  {
    n: "03",
    title: "Hamlet link",
    body: "Pods in one grove share a solar gateway. That box sends SMS or a Hindi voice call. Patchy mobile data on the forest edge is the normal case, so the path does not depend on a smartphone app.",
  },
  {
    n: "04",
    title: "A record for the group",
    body: "Each warning is kept against the tree and the crop — baisakhi, katki, jethwi, or aghani — so a farmer-producer organisation can see which hamlets were called and why. The record belongs to the group that owns the trees.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Warnings a lac group can act on this week."
        lede="Kerria is not a soil dashboard and not a marketplace for sticklac. The service is a small number of pods, one gateway, and a message when the insect or the weather will not wait."
      />

      <section className="shell grid gap-4 py-12">
        {services.map((item) => (
          <article
            key={item.n}
            className="glass grid gap-4 rounded-3xl p-6 md:grid-cols-[5rem_minmax(0,1fr)] md:p-8"
          >
            <p className="display text-3xl text-amber">{item.n}</p>
            <div>
              <h2 className="display text-3xl">{item.title}</h2>
              <p className="lede mt-3 max-w-3xl">{item.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="shell grid items-center gap-10 py-8 lg:grid-cols-2">
        <Picture
          src="/images/field-alert.jpg"
          alt="A person at a grove edge checking a phone"
          caption="Services arrive as a call or a text, in Hindi, on the phone already in use."
        />
        <div>
          <p className="kicker">Who it is for</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">
            Groups that already gather sticklac.
          </h2>
          <p className="lede mt-4">
            A single grower with a handful of trees can share a pod. The
            practical buyer is a farmer-producer organisation or a state
            forest-produce federation, because they already move broodlac and
            can host one gateway for a hamlet.
          </p>
          <p className="lede mt-4">
            Kerria does not sell insecticide, does not replace pruning, and
            does not grade the resin. It tells people when to be at the tree.
          </p>
        </div>
      </section>

      <Closing />
    </main>
  );
}
