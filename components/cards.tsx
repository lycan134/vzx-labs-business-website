import Link from "next/link";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/site";

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <article className="service-card" key={service.number}>
          <div className="card-top">
            <span className="eyebrow">{service.number} / 03</span>
            <span className="service-icon" aria-hidden="true">
              {service.icon}
            </span>
          </div>
          <h3>{service.title}</h3>
          <p className="muted">{service.description}</p>
          <div className="price">
            From ₱{service.price.toLocaleString("en-PH")}
            <span> · estimate</span>
          </div>
          {!compact && (
            <ul className="check-list">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <Link className="text-link" href="/contact">
            Let’s talk about it <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ProjectGrid({ compact = false }: { compact?: boolean }) {
  const entries = compact ? projects.slice(0, 2) : projects;

  return (
    <div className="project-grid">
      {entries.map((project, index) => {
        const isExternal = project.href.startsWith("http");

        return (
          <article className="project-card" key={project.title}>
            <div className={`project-art art-${project.tone}`}>
              <div className="art-window">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className={`art-layout art-layout-${index}`}>
                  <span className="art-kicker">{project.artKicker}</span>
                  <span className="art-headline">
                    {project.artHeadline.map((line, lineIndex) => (
                      <span key={line}>
                        {line}
                        {lineIndex < project.artHeadline.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                  <span className="art-line" />
                  <span className="art-caption">{project.artCaption}</span>
                  <span className="art-orb" />
                </div>
              </div>
              <span className="project-index">
                0{index + 1}
              </span>
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span className="eyebrow">{project.kind}</span>
                {project.kind === "STUDIO DEMO" && (
                  <span className="concept-tag">Concept</span>
                )}
              </div>
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                {project.label} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Tell us what’s on your mind",
    description:
      "Share the idea, the must-haves and what a good outcome looks like.",
  },
  {
    number: "02",
    title: "Find the right scope",
    description:
      "We’ll talk through requirements, timing and a budget that fits.",
  },
  {
    number: "03",
    title: "Agree on the plan",
    description:
      "You’ll get a clear quote and deliverables before work begins.",
  },
  {
    number: "04",
    title: "Make it real",
    description:
      "After the agreed deposit, we build, review together and launch.",
  },
];

export function ProcessStrip() {
  return (
    <div className="process-grid">
      {processSteps.map((step) => (
        <article className="process-step" key={step.number}>
          <span className="step-number">{step.number}</span>
          <h3>{step.title}</h3>
          <p className="muted">{step.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ContactBand({
  title = "Have a good idea?",
  text = "Let’s turn it into something people can see, use and remember.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="contact-band">
      <div>
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button button-light" href="/contact">
        Start your project <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}

export { SectionHeading };
