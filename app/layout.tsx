import type { Metadata } from "next";
// @ts-expect-error Next.js handles global CSS imports; TypeScript lacks a declaration for this file.
import "./globals.css";
import { Footer, Header } from "@/components/site";
import { settings } from "@/data/settings";

export const metadata: Metadata = {
  metadataBase: new URL(settings.siteUrl),
  title: {
    default: "VZX Labs — Websites that bring your ideas to life",
    template: "%s | VZX Labs",
  },
  description:
    "Thoughtful websites, digital invitations and custom web solutions for small businesses, organisations and life’s big moments.",
  openGraph: {
    title: "VZX Labs — Digital, made personal",
    description: "Websites that bring your ideas to life.",
    siteName: "VZX Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
