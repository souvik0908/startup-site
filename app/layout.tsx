import type { Metadata, Viewport } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/app/components/site-chrome";
import { company } from "@/app/lib/company";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const title = "Gittpay | AI-powered workflow automation";

export const viewport: Viewport = {
  themeColor: "#101614",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: title,
    template: "%s | Gittpay",
  },
  description: company.sentence,
  applicationName: company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: company.sentence,
    url: company.url,
    siteName: company.name,
    type: "website",
    locale: "en_US",
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
    <html lang="en" className={`${outfit.variable} ${newsreader.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
