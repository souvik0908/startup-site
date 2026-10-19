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

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-16 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.75fr)] lg:items-end lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-pine-deep">
            Early-stage company · MVP in progress
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl">
            {company.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink">
            {company.sentence}
          </p>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            For operations, support, and admin teams that still move the same
            information between email, spreadsheets, and internal tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-md bg-pine px-5 py-3 text-sm font-semibold text-white hover:bg-pine-deep"
            >
              {company.email}
            </a>
            <a
              href={company.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-line bg-card px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
            >
              View the project
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-line bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Current status
          </p>
          <p className="mt-3 font-display text-3xl leading-tight text-ink">
            MVP in progress
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Private beta comes after the first version is ready to test with a
            small group. {company.name} is not publishing customers, revenue, or
            usage numbers.
          </p>
          <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-muted">Website</dt>
              <dd>
                <a
                  href={company.url}
                  className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                >
                  {company.host}
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-muted">Email</dt>
              <dd>
                <a
                  href={mailto}
                  className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                >
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            How {company.name} is being built to work
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            The product is still in development. These are the three steps the
            platform is designed around.
          </p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="font-display text-2xl text-pine">{step.number}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          Who it is for
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted">
          {company.name} is for teams inside a business. It is not a consumer
          product.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="border-t-2 border-pine pt-5"
            >
              <h3 className="text-lg font-semibold">{audience.title}</h3>
              <p className="mt-2 leading-7 text-muted">{audience.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Contact {company.name}
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted">
              This is the public company address. Use it for questions about
              the product or the build.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Email
            </p>
            <a
              href={mailto}
              className="mt-3 block break-all font-display text-3xl tracking-tight text-ink underline decoration-line underline-offset-4 hover:decoration-ink sm:text-4xl"
            >
              {company.email}
            </a>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Website</dt>
                <dd className="mt-1">
                  <a
                    href={company.url}
                    className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                  >
                    {company.url}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Project</dt>
                <dd className="mt-1">
                  <a
                    href={company.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium break-all text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
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
