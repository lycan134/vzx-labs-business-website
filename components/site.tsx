import Link from "next/link";
import type { ReactNode } from "react";
import { settings } from "@/data/settings";

const nav = [
  ["Services", "/services"],
  ["Our work", "/work"],
  ["Our approach", "/how-it-works"],
  ["About", "/about"],
] as const;

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="VZX Labs home">
      <span className="brand-mark">
        V<span>.</span>
      </span>
      <span>
        VZX <span className="brand-light">LABS</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="nav-wrap">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          {nav.map(([name, href]) => (
            <Link key={href} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <Link className="button button-small button-outline" href="/contact">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p className="muted footer-note">
            Small studio. Thoughtful digital work.
            <br />
            Made for what’s next.
          </p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">EXPLORE</span>
          <Link href="/services">Services</Link>
          <Link href="/work">Our work</Link>
          <Link href="/about">About the studio</Link>
        </div>
        <div className="footer-links">
          <span className="eyebrow">SAY HELLO</span>
          <a href={`mailto:${settings.email}`}>
            {settings.emailIsPlaceholder
              ? "Email details coming soon"
              : settings.email}
          </a>
          {!settings.facebookIsPlaceholder && (
            <a href={settings.facebook} target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
          )}
          <Link href="/contact">Request a project ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VZX Labs</span>
        <span>Independent digital studio · Philippines</span>
      </div>
    </footer>
  );
}

export function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {children && <p className="muted">{children}</p>}
    </div>
  );
}
