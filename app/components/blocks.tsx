import Image from "next/image";
import Link from "next/link";
import { company, mailto } from "@/app/lib/company";

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="shell pb-4 pt-14 sm:pt-20">
      <p className="kicker rise-in">{kicker}</p>
      <h1 className="display rise-in delay-1 mt-4 max-w-4xl text-[clamp(2.7rem,6vw,5.4rem)]">
        {title}
      </h1>
      <p className="lede rise-in delay-2 mt-6 max-w-2xl">{lede}</p>
    </header>
  );
}

export function Picture({
  src,
  alt,
  caption,
  priority = false,
  ratio = "aspect-video",
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <figure>
      <div className={`frame ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  );
}

export function Closing() {
  return (
    <section className="shell py-20">
      <div className="glass rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <p className="kicker">Contact</p>
        <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)]">
          Write before the next inoculation.
        </h2>
        <p className="lede mt-5 max-w-xl">
          Farmer groups and forest-produce federations can ask about a future
          field trial. Kerria is still building the first version, so this is a
          conversation, not a shipment.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a className="btn" href={mailto}>
            {company.email}
          </a>
          <Link className="btn-ghost" href="/contact">
            Contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
