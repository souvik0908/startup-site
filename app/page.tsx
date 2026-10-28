import Image from "next/image";
import Link from "next/link";
import { Closing, Picture } from "@/app/components/blocks";
import { company } from "@/app/lib/company";

const pillars = [
  {
    label: "What",
    title: "A pod on the shoot the insects are using",
    body: "Kerria ties a small sensor to the broodlac bundle, then leaves it on that branch. It reads temperature, humidity, and leaf wetness on the shoot itself, instead of a district weather average.",
  },
  {
    label: "Why",
    title: "The crop is decided in a few days",
    body: "Broodlac cannot be stored. Crawlers leave in a short window, and that window shifts with the season and the host. After they settle, fog, mist, or hard rain can wash them off.",
  },
  {
    label: "How",
    title: "A hamlet gateway, then a phone call",
    body: "Pods talk to one solar gateway in the village. The grower gets a text or a Hindi voice call. The phone does not need internet, and the pod does not need the grower’s data plan.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tie it to the bundle",
    body: "Before inoculation, the pod goes on the broodlac bundle. After the crawlers move onto the shoot, it stays there for the weeks when the insects are easiest to lose.",
  },
  {
    n: "02",
    title: "Follow that tree",
    body: "The timing follows heat on that shoot, the crop, and the host — palas, ber, or kusum. Baisakhi, katki, jethwi, and aghani do not share one calendar date.",
  },
  {
    n: "03",
    title: "Call before the window",
    body: "The gateway sends two kinds of warning: crawlers are close, so tie or watch the bundle today; and fog hours or rain are high enough to threaten insects that just settled.",
  },
];

const crops = [
  ["Baisakhi", "Rangeeni", "Palas, ber", "Tied in Oct–Nov"],
  ["Katki", "Rangeeni", "Palas", "Tied in Jun–Jul"],
  ["Jethwi", "Kusmi", "Kusum, ber", "Tied in Jan–Feb"],
  ["Aghani", "Kusmi", "Kusum, ber", "Tied in Jun–Jul"],
];

const buyers = [
  {
    title: "Lac grower groups",
    body: "A few pods shared across members’ trees, rather than a gadget for every branch in a forest.",
  },
  {
    title: "Forest-produce federations",
    body: "The organisations that already collect sticklac and can put one gateway in a hamlet.",
  },
  {
    title: "Extension staff",
    body: "People who already walk these groves and need a reason to visit a tree this week, not next month.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="shell grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="kicker rise-in">Lac, timed to the insect</p>
          <h1 className="display rise-in delay-1 mt-4 text-[clamp(3rem,7vw,6.4rem)]">
            Know the day the crawlers come.
          </h1>
          <p className="lede rise-in delay-2 mt-6 max-w-xl">
            {company.sentence}
          </p>
          <div className="rise-in delay-3 mt-8 flex flex-wrap gap-3">
            <Link className="btn" href="/product">
              See the pod
            </Link>
            <Link className="btn-ghost" href="/services">
              What Kerria does
            </Link>
          </div>
        </div>
        <div className="rise-in delay-2">
          <div className="frame relative aspect-[4/3]">
            <Image
              src="/images/hero-grove.jpg"
              alt="Dusk in a palas grove, with a small sensor pod tied to a flowering branch"
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
            <aside className="glass absolute inset-x-3 bottom-3 rounded-2xl p-4 sm:inset-x-auto sm:right-4 sm:w-72">
              <p className="kicker">Sample reading</p>
              <p className="mt-1 text-xs leading-5 text-muted">
                Example message. Not a live tree.
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Shoot</dt>
                  <dd>Kusum, north face</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Crawlers</dt>
                  <dd className="text-amber">Within 36 hours</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Leaf wetness</dt>
                  <dd className="text-lac">Fog hours rising</dd>
                </div>
              </dl>
            </aside>
          </div>
          <p className="caption">
            The intended place for a Kerria pod: on the host branch, not in a shed.
          </p>
        </div>
      </section>

      <section className="shell py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.label} className="glass rounded-3xl p-6">
              <p className="kicker">{item.label}</p>
              <h2 className="display mt-4 text-3xl">{item.title}</h2>
              <p className="lede mt-4 text-[1rem]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell grid items-center gap-10 py-16 lg:grid-cols-2">
        <Picture
          src="/images/broodlac-pod.jpg"
          alt="Close view of crimson lac resin on a twig beside a small clip-on sensor"
          caption="Broodlac on the twig, with the pod clipped beside it. A design picture, not a field installation."
          ratio="aspect-[4/3]"
        />
        <div>
          <p className="kicker">Why this crop</p>
          <h2 className="display mt-4 text-[clamp(2.2rem,4vw,3.6rem)]">
            India grows most of the world’s lac. The timing is still done by eye.
          </h2>
          <p className="lede mt-5">
            The insect, Kerria lacca, settles on palas, ber, and kusum and
            secretes the resin that growers sell as sticklac. Refined, that
            resin is shellac. The vulnerable days are early: emergence, then the
            first weeks on the shoot.
          </p>
          <p className="lede mt-4">
            A missed inoculation, or a night of fog after settlement, is how a
            season is lost. The trees are scattered along forest edges, which is
            why the alert is a phone call and not an app that assumes a signal.
          </p>
          <Link href="/about" className="btn mt-8">
            Why Kerria exists
          </Link>
        </div>
      </section>

      <section className="shell py-8">
        <p className="kicker">How it works</p>
        <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,4vw,3.8rem)]">
          Three moves between the bundle and the grower’s phone.
        </h2>
        <ol className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="glass rounded-3xl p-6">
              <p className="display text-4xl text-amber">{step.n}</p>
              <h3 className="display mt-4 text-2xl">{step.title}</h3>
              <p className="lede mt-3 text-[1rem]">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Crops</p>
            <h2 className="display mt-4 max-w-xl text-[clamp(2.2rem,4vw,3.6rem)]">
              Four seasons. The pod follows the shoot.
            </h2>
          </div>
          <p className="lede max-w-sm text-[1rem]">
            These are the usual inoculation months. The reason for a sensor is
            that the real day moves.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <div className="hidden grid-cols-4 gap-4 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted sm:grid">
            <span>Crop</span>
            <span>Strain</span>
            <span>Usual hosts</span>
            <span>Bundle tied</span>
          </div>
          {crops.map((row) => (
            <div
              key={row[0]}
              className="grid gap-1 border-t border-white/10 px-6 py-4 sm:grid-cols-4 sm:items-center sm:gap-4"
            >
              <p className="display text-2xl">{row[0]}</p>
              <p>{row[1]}</p>
              <p className="text-muted">{row[2]}</p>
              <p className="text-muted">{row[3]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell grid gap-4 py-8 md:grid-cols-3">
        {buyers.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 p-6">
            <h2 className="display text-2xl">{item.title}</h2>
            <p className="lede mt-3 text-[1rem]">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="shell grid gap-6 py-12 lg:grid-cols-2">
        <Picture
          src="/images/field-alert.jpg"
          alt="A grower at the edge of a palas grove, looking at a phone"
          caption="The alert is meant for the phone a grower already carries."
        />
        <Picture
          src="/images/village-gateway.jpg"
          alt="A small solar radio box on a wooden post at the edge of a hamlet"
          caption="One gateway for a hamlet of trees, powered from a small panel."
        />
      </section>

      <Closing />
    </main>
  );
}
