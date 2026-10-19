import type { Metadata } from "next";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gittpay is an early-stage company building an AI-powered platform that helps businesses automate repetitive workflows, connect their data, and create intelligent AI agents.",
  alternates: {
    canonical: "/about",
  },
};

const facts = [
  { label: "Company", value: company.name },
  { label: "Website", value: company.url, href: company.url },
  { label: "Email", value: company.email, href: mailto },
  {
    label: "This website",
    value: company.github,
    href: company.github,
    external: true,
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <p className="text-sm font-medium tracking-wide text-pine-deep">
        About the company
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">
        About {company.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-ink">
        {company.sentence}
      </p>

      <dl className="mt-12 divide-y divide-line border-y border-line">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6 sm:py-5"
          >
            <dt className="text-sm text-muted">{fact.label}</dt>
            <dd className="break-all font-medium text-ink">
              {fact.href ? (
                <a
                  href={fact.href}
                  className="underline decoration-line underline-offset-4 hover:decoration-ink"
                  {...(fact.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {fact.value}
                </a>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-3xl tracking-tight">
            What we are building
          </h2>
          <p className="mt-4 leading-7 text-muted">
            A platform that lets a business connect the data it already has,
            describe a workflow that repeats, and run an AI agent to carry
            those steps. A person on the team remains responsible for the
            outcome.
          </p>
          <p className="mt-4 leading-7 text-muted">
            {company.name} is for operations, support, and admin teams. It is
            not a consumer product.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl tracking-tight">
            Where the work stands
          </h2>
          <p className="mt-4 leading-7 text-muted">
            The MVP is in progress. A private beta is the step after that first
            version is ready to test with a small group.
          </p>
          <p className="mt-4 leading-7 text-muted">
            This site does not list customers, revenue, or performance figures.
            The product is not in market, so those numbers do not exist to
            share.
          </p>
        </section>
      </div>

      <section className="mt-14 rounded-lg border border-line bg-card p-6 sm:p-8">
        <h2 className="font-display text-3xl tracking-tight">
          Contact {company.name}
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-muted">
          Write to the company at the address below.
        </p>
        <a
          href={mailto}
          className="mt-4 inline-block break-all font-display text-3xl tracking-tight text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
        >
          {company.email}
        </a>
      </section>
    </main>
  );
}
