"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/app/lib/company";

function Mark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8">
      <path
        d="M16 3c3.2 4.4 8 8.2 8 13.4A8 8 0 1 1 8 16.4C8 11.2 12.8 7.4 16 3z"
        fill="#e4a15a"
      />
      <circle cx="16" cy="18" r="2.4" fill="#e15b4c" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell flex h-16 items-center gap-4 sm:h-[4.5rem]">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-ink">
          <Mark />
          <span className="display text-[1.65rem] tracking-[-0.04em]">
            {company.name}
          </span>
        </Link>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn ml-2">
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="btn-ghost menu-toggle ml-auto h-11 min-h-0 px-4"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="menu-panel lg:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-base"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn mt-3 w-fit">
              Contact
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
