import Link from "next/link";
import {
  ContactBand,
  ProcessStrip,
  ProjectGrid,
  SectionHeading,
  ServiceGrid,
} from "@/components/cards";

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-label">
            <span className="status-dot" /> INDEPENDENT DIGITAL STUDIO{" "}
            <span className="hero-rule" /> PHILIPPINES
          </div>
          <h1>
            Websites that
            <br />
            bring your <span className="gradient-text">ideas</span>
            <br />
            to life<span className="period">.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              We make thoughtful websites, digital invitations and useful
              online experiences for small businesses, organisations and
              life’s big moments.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Start your project <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/work">
                Explore our work <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>CREATIVE DEVELOPMENT</span>
          <span>EST. FOR WHAT’S NEXT</span>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionHeading
            kicker="WHAT WE MAKE · 01—03"
            title="Good digital work, made personal."
          >
            A small studio for big first impressions, special occasions and
            ideas that deserve a place online.
          </SectionHeading>
          <ServiceGrid compact />
          <div className="section-more">
            <Link className="text-link" href="/services">
              Explore all services <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-work">
        <div className="container">
          <div className="work-heading">
            <SectionHeading
              kicker="SELECTED WORK · 02—03"
              title="A few things we’ve brought to life."
            />
            <Link className="text-link desktop-link" href="/work">
              View all projects <span>↗</span>
            </Link>
          </div>
          <ProjectGrid compact />
        </div>
      </section>

      <section className="section section-process">
        <div className="container">
          <SectionHeading
            kicker="A CLEAR, COLLABORATIVE PROCESS · 03—03"
            title="From first hello to live on the web."
          />
          <ProcessStrip />
        </div>
      </section>

      <div className="container">
        <ContactBand />
      </div>
    </main>
  );
}
