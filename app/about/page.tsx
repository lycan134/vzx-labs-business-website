import type { Metadata } from "next";
import { ContactBand } from "@/components/cards";

export const metadata: Metadata = {
  title: "About VZX Labs",
  description:
    "Meet VZX Labs: a small, growing digital studio creating practical, modern web solutions.",
};

export default function About() {
  return (
    <main id="main">
      <section className="page-hero container">
        <span className="eyebrow">
          A SMALL STUDIO WITH A PRACTICAL POINT OF VIEW
        </span>
        <h1>
          Digital should feel
          <br />
          <span className="gradient-text">within reach.</span>
        </h1>
        <p className="muted">
          VZX Labs is a small, growing digital studio creating modern,
          practical web solutions for businesses, organisations and personal
          celebrations.
        </p>
      </section>

      <section className="section container about-layout">
        <div className="about-mark">
          <span>
            V<span>.</span>
          </span>
          <small>VZX LABS · DIGITAL STUDIO</small>
        </div>
        <div className="about-copy">
          <span className="eyebrow">WHAT WE BELIEVE</span>
          <h2>Good work starts with listening.</h2>
          <p className="muted">
            The right website doesn’t need to be complicated. It should make
            sense for the people using it, reflect the people behind it and
            help move an idea forward.
          </p>
          <p className="muted">
            We focus on clear communication, considered design and approachable
            technology. We’re growing one thoughtful project at a time, with a
            commitment to practical solutions and honest collaboration.
          </p>
          <a className="text-link" href="/services">
            See how we can help <span>↗</span>
          </a>
        </div>
      </section>

      <div className="container">
        <ContactBand title="Let’s make something useful." />
      </div>
    </main>
  );
}
