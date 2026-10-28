import type { Metadata } from "next";
import { Closing, PageHero, Picture } from "@/app/components/blocks";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The Kerria pod clips to a broodlac bundle and measures temperature, humidity, and leaf wetness. A village gateway carries the alert.",
  alternates: { canonical: "/product" },
};

const specs = [
  ["Sits on", "The broodlac bundle, then the inoculated shoot"],
  ["Reads", "Temperature, humidity, leaf wetness"],
  ["Power", "A small cell, topped up by a brief charge. The gateway carries its own panel"],
  ["Link", "LoRa from the pod to one hamlet gateway"],
  ["Alert", "SMS or a Hindi voice call to the numbers the group registers"],
  ["Crops", "Rangeeni and kusmi: baisakhi, katki, jethwi, aghani"],
];

export default function ProductPage() {
  return (
    <main>
      <PageHero
        kicker="Product"
        title="A pod for the branch. A gateway for the hamlet."
        lede="Two pieces of hardware. The pod stays with the insects. The gateway stays where the village can see it, and it is the thing that places the call."
      />

      <section className="shell grid items-center gap-10 py-12 lg:grid-cols-2">
        <Picture
          src="/images/pod-studio.jpg"
          alt="A small matte charcoal sensor pod with an amber status light"
          caption="The pod Kerria is designing: small enough to tie to a bundle, with no screen on the tree."
          ratio="aspect-square"
        />
        <Picture
          src="/images/broodlac-pod.jpg"
          alt="Lac-encrusted twig with a sensor clipped beside the resin"
          caption="In the grove it sits beside the resin, where leaf wetness actually matters."
          ratio="aspect-[4/3]"
        />
      </section>

      <section className="shell py-6">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">What is on the device</h2>
        <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {specs.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-amber">{label}</dt>
              <dd className="text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="shell grid gap-4 py-12 md:grid-cols-2">
        <article className="glass rounded-3xl p-6">
          <h2 className="display text-3xl">What it is for</h2>
          <p className="lede mt-4">
            Judging crawler emergence from the heat of that shoot, then watching
            the same shoot while the new insects are still easy to lose. The
            sample card on the homepage is the shape of that message.
          </p>
        </article>
        <article className="glass rounded-3xl p-6">
          <h2 className="display text-3xl">What it will not do</h2>
          <p className="lede mt-4">
            It will not climb the tree, tie the bundle, or tell resin quality.
            It will not spray anything. A person still owns the crop. The pod
            only says when that person should be there.
          </p>
        </article>
      </section>

      <section className="shell pb-4">
        <Picture
          src="/images/village-gateway.jpg"
          alt="Solar gateway box on a post above a village path"
          caption="The gateway is shared. It is not one radio per tree."
        />
      </section>

      <Closing />
    </main>
  );
}
