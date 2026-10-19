import type { Metadata } from "next";
import Link from "next/link";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-deep">
          404
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
          This page is not part of {company.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
          That address does not match a page on {company.host}. The company site
          is the homepage and the about page.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 text-sm font-semibold sm:flex-row sm:items-center">
          <Link href="/" className="btn-primary">
            Back to {company.name}
          </Link>
          <Link href="/about" className="px-2 py-2 text-signal-deep hover:underline">
            About
          </Link>
          <a href={mailto} className="break-all px-2 py-2 text-signal-deep hover:underline">
            {company.email}
          </a>
        </div>
      </div>
    </main>
  );
}
