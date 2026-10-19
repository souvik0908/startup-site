import type { Metadata } from "next";
import Link from "next/link";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-medium tracking-wide text-pine-deep">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
        This page is not part of {company.name}
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted">
        That address does not match a page on {company.host}. The company site
        is the homepage and the about page.
      </p>
      <div className="mt-8 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:items-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-pine px-5 py-3 text-white hover:bg-pine-deep"
        >
          Back to {company.name}
        </Link>
        <Link href="/about" className="px-1 text-pine-deep hover:underline">
          About
        </Link>
        <a href={mailto} className="px-1 text-pine-deep hover:underline">
          {company.email}
        </a>
      </div>
    </main>
  );
}
