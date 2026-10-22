import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { settings } from "@/data/settings";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell VZX Labs about your business website, event site or custom digital project.",
};

export default function Contact() {
  return (
    <main id="main">
      <section className="page-hero container">
        <span className="eyebrow">LET’S START WITH A CONVERSATION</span>
        <h1>
          Tell us what
          <br />
          you’re <span className="gradient-text">imagining.</span>
        </h1>
        <p className="muted">
          A few details help us understand what you need. We’ll use them to
          start a helpful, no-pressure conversation.
        </p>
      </section>

      <section className="section container contact-layout">
        <div className="contact-aside">
          <span className="eyebrow">A NOTE BEFORE YOU BEGIN</span>
          <h2>There’s no wrong place to start.</h2>
          <p className="muted">
            You don’t need every detail figured out. Tell us what you know, and
            we can work through the rest together.
          </p>
          <div className="aside-divider" />
          <span className="eyebrow">DIRECT CONTACT</span>
          {settings.emailIsPlaceholder ? (
            <p className="muted">Email contact details will be added here soon.</p>
          ) : (
            <a className="text-link" href={`mailto:${settings.email}`}>
              {settings.email} ↗
            </a>
          )}
          {settings.facebookIsPlaceholder ? (
            <p className="muted">Facebook Page link coming soon.</p>
          ) : (
            <a
              className="text-link"
              href={settings.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Find us on Facebook ↗
            </a>
          )}
        </div>
        <InquiryForm />
      </section>
    </main>
  );
}
