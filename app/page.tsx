export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <div className="text-xl font-bold tracking-tight">
          GitPay
        </div>

        <a
          href="mailto:founder@yourdomain.com"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          Contact
        </a>
      </nav>

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          Building our first version
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          AI infrastructure for
          <span className="block text-blue-400">
            smarter business workflows
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          Gitpay is building an AI-powered platform that helps businesses
          automate repetitive workflows, connect their data, and create
          intelligent AI agents.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:founder@yourdomain.com"
            className="rounded-xl bg-white px-7 py-3.5 font-medium text-black transition hover:bg-gray-200"
          >
            Contact founder
          </a>

          <a
            href="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 px-7 py-3.5 font-medium text-gray-200 transition hover:bg-white/5"
          >
            View project
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          <Feature
            title="AI Agents"
            description="Build intelligent agents capable of reasoning over business data and performing useful workflows."
          />

          <Feature
            title="Knowledge & RAG"
            description="Connect company knowledge and data sources to provide context-aware AI responses."
          />

          <Feature
            title="Automation"
            description="Reduce repetitive manual work by combining AI models with business processes and APIs."
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Coming Soon
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          We&apos;re currently building the MVP.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          Gitpay is an early-stage technology project currently under
          development. We&apos;re building and testing the first version of
          the platform.
        </p>

        <a
          href="mailto:founder@yourdomain.com"
          className="mt-8 inline-block text-blue-400 hover:text-blue-300"
        >
          contact@gitpay.me →
        </a>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row">
          <span>© 2026 Gitpay</span>
          <span>Early-stage technology project</span>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        ✦
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-400">{description}</p>
    </div>
  );
}
