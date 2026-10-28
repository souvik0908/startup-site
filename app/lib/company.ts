export const company = {
  name: "Kerria",
  url: "https://kerria.online",
  host: "kerria.online",
  email: "hello@kerria.online",
  sentence:
    "Kerria is building a clip-on sensor for lac host trees. It tells a grower when broodlac crawlers are about to emerge, and when fog or rain is about to wash the settled insects off the shoot.",
} as const;

export const mailto = `mailto:${company.email}`;

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
] as const;
