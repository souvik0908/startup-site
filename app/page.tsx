import { RequestAccess } from "@/app/components/site-chrome";
import { company, mailto } from "@/app/lib/company";

const steps = [
  {
    number: "01",
    title: "Connect data",
    body: "Attach the records, documents, and tools a workflow already depends on, so the agent has the same context a person would use.",
  },
  {
    number: "02",
    title: "Define the work",
    body: "Describe the steps that repeat, and mark the points where someone on the team should review the result before it moves on.",
  },
  {
    number: "03",
    title: "Run an agent",
    body: "An agent follows that workflow. The team that owns the outcome stays responsible for it.",
  },
];

const audiences = [
  {
    title: "Operations",
    body: "Daily handoffs, checklists, and status updates that currently live in inboxes and shared documents.",
  },
  {
    title: "Support",
    body: "Repeated questions that need the same company context every time they are answered.",
  },
  {
    title: "Admin and finance",
    body: "Information that still gets copied by hand between spreadsheets and internal tools.",
  },
];

const run = [
  {
    title: "Attach the invoice row",
    detail: "The spreadsheet, the ticket, and the thread around them.",
  },
  {
    title: "Draft the follow-up",
    detail: "The agent writes from that same context.",
  },
  {
    title: "Hand it back",
    detail: "A person reviews the draft before anything is sent.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-surface text-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          <p className="rise-in inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream">
            <span
              className="pulse-dot h-1.5 w-1.5 rounded-full bg-signal"
              aria-hidden="true"
            />
            Pre-launch · MVP in progress
          </p>
          <h1 className="rise-in delay-1 mt-6 max-w-5xl text-balance font-display text-[clamp(2.7rem,6vw,5.35rem)] leading-[0.96] tracking-tight text-cream">
            An agent for the{" "}
            <span className="italic text-signal">work that repeats.</span>
          </h1>
          <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div className="rise-in delay-2 min-w-0">
              <p className="max-w-xl text-lg leading-8 text-mist sm:text-xl sm:leading-9">
                {company.sentence}
              </p>
              <div className="mt-8">
                <RequestAccess href={mailto} />
                <p className="mt-3 text-sm text-mist">{company.email}</p>
              </div>
            </div>

            <aside className="rise-in delay-3 min-w-0 rounded-3xl bg-card p-6 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Example run
              </p>
              <p className="mt-3 font-display text-3xl leading-tight tracking-tight">
                Invoice follow-up
              </p>
              <ol className="mt-6">
                {run.map((item, index) => (
                  <li key={item.title} className="relative flex gap-4 pb-5 last:pb-0">
                    {index < run.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute top-4 bottom-0 left-[7px] w-px bg-line"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={`relative mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 ${
                        index === run.length - 1
                          ? "border-signal bg-signal"
                          : "border-ink bg-card"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold leading-6">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-4 text-sm leading-6 text-muted">
                An illustration of the work {company.name} is being built for.
                The MVP is still in progress.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-paper" id="how">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-deep">
            How it works
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Three steps. A person still owns the result.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            The product is still in development. This is the path the platform
            is designed around.
          </p>
          <ol className="mt-12 border-t border-line">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-[7.5rem_minmax(0,0.8fr)_minmax(0,1.15fr)] md:items-baseline md:gap-8 md:py-10"
              >
                <p className="font-display text-5xl leading-none text-signal">
                  {step.number}
                </p>
                <h3 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                  {step.title}
                </h3>
                <p className="max-w-prose leading-7 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Who it is for
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            {company.name} is for teams inside a business. It is not a consumer
            product.
          </p>
          <div className="mt-10 divide-y divide-line border-y border-ink/15">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-7"
              >
                <h3 className="font-display text-3xl tracking-tight sm:col-span-4">
                  {audience.title}
                </h3>
                <p className="leading-7 text-muted sm:col-span-8">
                  {audience.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-night text-cream">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Request access.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-mist">
              One address for questions about the product or the build.
            </p>
          </div>
          <div className="min-w-0">
            <RequestAccess href={mailto} />
            <a
              href={mailto}
              className="mt-6 block break-all font-display text-[clamp(1.7rem,4vw,3rem)] leading-tight tracking-tight text-cream underline decoration-white/25 underline-offset-8 hover:decoration-signal"
            >
              {company.email}
            </a>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-mist">Website</dt>
                <dd className="mt-1">
                  <a
                    href={company.url}
                    className="font-medium text-cream underline decoration-white/25 underline-offset-4 hover:decoration-cream"
                  >
                    {company.url}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mist">Project</dt>
                <dd className="mt-1">
                  <a
                    href={company.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium break-all text-cream underline decoration-white/25 underline-offset-4 hover:decoration-cream"
                  >
                    {company.github}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
