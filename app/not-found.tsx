import type { Metadata } from "next";
import Link from "next/link";
import { company, mailto } from "@/app/lib/company";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="shell py-24">
      <p className="kicker">404</p>
      <h1 className="display mt-4 max-w-3xl text-[clamp(2.6rem,6vw,4.8rem)]">
        This page is not on {company.host}.
      </h1>
      <p className="lede mt-5 max-w-xl">
        The address does not match a Kerria page. Start from the homepage, or
        write to the company.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="btn" href="/">
          Back to Kerria
        </Link>
        <a className="btn-ghost" href={mailto}>
          {company.email}
        </a>
      </div>
    </main>
  );
}
