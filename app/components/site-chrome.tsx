import Link from "next/link";
import { company, mailto } from "@/app/lib/company";

function Mark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="mark">
      <rect x="2" y="5" width="16" height="16" rx="4" fill="#f6f1e6" />
      <rect x="13" y="12" width="16" height="16" rx="4" fill="#e56a32" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RequestAccess({ href }: { href: string }) {
  return (
    <a href={href} className="btn-primary">
      Request access
      <Arrow />
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night text-cream">
      <div className="page-wrap site-header-bar">
        <Link href="/" className="brand text-cream">
          <Mark />
          <span className="wordmark font-display">{company.name}</span>
        </Link>
        <nav aria-label="Primary" className="primary-nav">
          <Link href="/about" className="nav-link text-mist hover:text-cream">
            About
          </Link>
          <RequestAccess href="/#contact" />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-night text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 {company.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/about" className="hover:text-cream">
            About
          </Link>
          <a href={mailto} className="break-all hover:text-cream">
            {company.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
