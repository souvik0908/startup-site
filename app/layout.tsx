import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { SiteFooter } from "@/app/components/footer";
import { SiteHeader } from "@/app/components/header";
import { company } from "@/app/lib/company";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const title = "Kerria | Know the day the crawlers come";

export const viewport: Viewport = {
  themeColor: "#07110d",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: "%s | Kerria",
  },
  description: company.sentence,
  applicationName: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: company.sentence,
    url: company.url,
    siteName: company.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-grove.jpg",
        alt: "A palas grove at dusk with a small sensor pod tied to a branch",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  email: company.email,
  description: company.sentence,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="atmosphere" aria-hidden="true" />
        <SiteHeader />
        <div className="relative z-10 flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
