import type { Metadata } from "next";
import { ContactBand, ProcessStrip } from "@/components/cards";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "A straightforward, collaborative process from first inquiry to website launch.",
};

export default function HowItWorks() {
  return (
    <main id="main">
      <section className="page-hero container">
        <span className="eyebrow">NO MYSTERY, JUST GOOD COLLABORATION</span>
        <h1>
          Five steps from
          <br />
          <span className="gradient-text">idea to launch.</span>
        </h1>
        <p className="muted">
          Clear expectations, a shared plan and room to make the details right.
        </p>
      </section>

      <section className="section container">
        <ProcessStrip />
      </section>

      <div className="container">
        <ContactBand title="Ready for step one?" />
      </div>
    </main>
  );
}
