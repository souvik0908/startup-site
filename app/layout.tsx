import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaForge | AI-powered business automation",
  description:
    "NovaForge is building AI-powered tools for intelligent business automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}