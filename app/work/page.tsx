import type { Metadata } from "next";
import { ContactBand, ProjectGrid } from "@/components/cards";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "A christening event website and clearly labelled VZX Labs studio concepts.",
};

export default function Work() {
  return (
    <main id="main">
      <section className="page-hero container">
        <span className="eyebrow">A LOOK AT WHAT WE MAKE</span>
        <h1>
          Thoughtful work,
          <br />
          <span className="gradient-text">in the real world.</span>
        </h1>
        <p className="muted">
          One live event project, alongside a few clearly labelled studio
          concepts exploring what’s possible.
        </p>
      </section>

      <section className="section container">
        <ProjectGrid />
        <p className="pricing-note">
          Demo projects are original VZX Labs concepts created to show our
          approach. They are not paid client projects.
        </p>
      </section>

      <div className="container">
        <ContactBand
          title="Yours could be next."
          text="Have a project in mind? Let’s make something that feels like you."
        />
      </div>
    </main>
  );
}
