import Link from "next/link";
import { company, mailto, nav } from "@/app/lib/company";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-3xl">{company.name}</p>
          <p className="lede mt-3 max-w-sm text-[0.98rem]">
            A field instrument for lac host trees. The first version is still
            being built.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="kicker">Pages</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-muted hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-muted hover:text-ink">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="kicker">Write</p>
          <a href={mailto} className="mt-4 block break-all text-lg text-amber hover:underline">
            {company.email}
          </a>
          <p className="caption">{company.host}</p>
        </div>
      </div>
      <div className="shell border-t border-white/10 py-5 text-sm text-muted">
        <p>© 2026 {company.name}</p>
        <p className="mt-2 max-w-3xl">
          Pictures on this site show the setup Kerria is designing. They are not
          photographs of a deployment.
        </p>
      </div>
    </footer>
  );
}
