import type { Metadata } from "next";
import { ContactBand, ServiceGrid } from "@/components/cards";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, digital event invitations and custom web solutions from VZX Labs.",
};

export default function Services() {
  return (
    <main id="main">
      <section className="page-hero container">
        <span className="eyebrow">WHAT WE CAN MAKE TOGETHER</span>
        <h1>
          Good ideas deserve
          <br />a <span className="gradient-text">good website.</span>
        </h1>
        <p className="muted">
          Choose a starting point. We’ll shape the right scope around your
          goals, content and budget.
        </p>
      </section>

      <section className="section container">
        <ServiceGrid />
        <p className="pricing-note">
          All prices are indicative starting estimates in Philippine pesos.
          Final pricing depends on project scope, content and required features;
          we’ll provide a clear quote before work begins.
        </p>
      </section>

      <div className="container">
        <ContactBand
          title="Not sure where to start?"
          text="Tell us what you’re hoping to make. We’ll help find a practical place to begin."
        />
      </div>
    </main>
  );
}
