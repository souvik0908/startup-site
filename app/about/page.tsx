import type { Metadata } from "next";
import { RequestAccess } from "@/app/components/site-chrome";
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
    <main>
      <section className="hero-surface text-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">
            About the company
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.7rem,6vw,5rem)] leading-[0.96] tracking-tight">
            About {company.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist sm:text-xl sm:leading-9">
            {company.sentence}
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:py-5"
              >
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="min-w-0 break-all font-medium text-ink">
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
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
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
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Where the work stands
              </h2>
              <p className="mt-4 leading-7 text-muted">
                The MVP is in progress. A private beta is the step after that
                first version is ready to test with a small group.
              </p>
              <p className="mt-4 leading-7 text-muted">
                This site does not list customers, revenue, or performance
                figures. The product is not in market, so those numbers do not
                exist to share.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-night text-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-8 sm:py-16">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Contact {company.name}
          </h2>
          <p className="max-w-xl text-lg leading-8 text-mist">
            Write to the company at the address below.
          </p>
          <RequestAccess href={mailto} />
          <a
            href={mailto}
            className="break-all font-display text-[clamp(1.7rem,4vw,2.75rem)] leading-tight tracking-tight underline decoration-white/25 underline-offset-8 hover:decoration-signal"
          >
            {company.email}
          </a>
        </div>
      </section>
    </main>
  );
}
