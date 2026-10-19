import Link from "next/link";
import { company, mailto } from "@/app/lib/company";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-pine font-display text-lg leading-none text-white"
          >
            G
          </span>
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            {company.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
          <Link href="/about" className="text-ink hover:text-pine-deep">
            About
          </Link>
          <a
            href={mailto}
            className="font-medium text-pine-deep underline decoration-pine/30 underline-offset-4 hover:decoration-pine-deep"
          >
            {company.email}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {company.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <a href={mailto} className="hover:text-ink">
            {company.email}
          </a>
          <a
            href={company.github}
            className="hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.githubLabel}
          </a>
        </nav>
      </div>
    </footer>
  );
}
