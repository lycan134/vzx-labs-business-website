"use client";

import { useState, type FormEvent } from "react";
import { settings } from "@/data/settings";

export function InquiryForm() {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (
      settings.emailIsPlaceholder ||
      settings.email === "hello@yourdomain.com"
    ) {
      setError(
        "Email contact details haven’t been configured yet. Please replace the placeholder in data/settings.ts before using this form.",
      );
      return;
    }

    const fields = new FormData(form);
    const body = [
      "Name: " + fields.get("name"),
      "Email: " + fields.get("email"),
      "Business / organisation: " +
        (fields.get("business") || "Not provided"),
      "Service: " + fields.get("service"),
      "Budget: " + fields.get("budget"),
      "Timeline: " + fields.get("timeline"),
      "",
      "Project details:",
      fields.get("description"),
    ].join("\n");

    window.location.href = `mailto:${settings.email}?subject=${encodeURIComponent(
      "VZX Labs project inquiry",
    )}&body=${encodeURIComponent(body)}`;
    setError(
      "Your email app should open with the inquiry ready to review and send. The message is only delivered after you press Send in your email app.",
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
          />
        </label>
        <label>
          Email <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Business or organisation <small>OPTIONAL</small>
          <input
            name="business"
            autoComplete="organization"
            maxLength={120}
            placeholder="Name of your business"
          />
        </label>
        <label>
          What are you looking for? <span>*</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Business website or landing page</option>
            <option>Digital invitation or event website</option>
            <option>Custom digital solution</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Budget range (PHP) <span>*</span>
          <select name="budget" defaultValue="" required>
            <option value="" disabled>
              Choose a range
            </option>
            <option>Under ₱5,000</option>
            <option>₱5,000–₱10,000</option>
            <option>₱10,000–₱25,000</option>
            <option>₱25,000–₱50,000</option>
            <option>₱50,000+</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Ideal timeline <span>*</span>
          <select name="timeline" defaultValue="" required>
            <option value="" disabled>
              Choose a timeline
            </option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>3+ months</option>
            <option>Flexible / just exploring</option>
          </select>
        </label>
        <label className="form-full">
          Tell us about your project <span>*</span>
          <textarea
            name="description"
            required
            minLength={20}
            maxLength={3000}
            rows={6}
            placeholder="What are you hoping to make? Include any goals, features or dates that would be helpful."
          />
        </label>
      </div>

      <p className="form-disclaimer">
        This form uses your device’s email app to prepare a message. Nothing is
        sent or stored automatically; you’ll review and send the email yourself.
      </p>
      <button className="button" type="submit">
        Prepare email inquiry <span aria-hidden="true">↗</span>
      </button>
      {error && (
        <p className="form-status" role="status">
          {error}
        </p>
      )}
    </form>
  );
}
