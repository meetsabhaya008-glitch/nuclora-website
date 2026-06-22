"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const contactReasons = [
  "Product recommendation",
  "Science / ingredient question",
  "Order or shipping",
  "Certificate of Analysis request",
  "Press or media",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-nuclora-cream">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="label-sm mb-6">Get in Touch</p>
            <h1
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We&apos;re here to help.
            </h1>
            <p className="text-lg font-light text-nuclora-muted leading-relaxed">
              Questions about our science, a specific formula, your order, or
              anything else — our team typically responds within one business
              day.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Info */}
            <div className="md:col-span-1">
              <div className="space-y-10">
                <div>
                  <p className="label-sm mb-4">Email</p>
                  <a
                    href="mailto:hello@nuclora.com"
                    className="text-nuclora-navy hover:text-nuclora-teal transition-colors font-light"
                  >
                    hello@nuclora.com
                  </a>
                </div>
                <div>
                  <p className="label-sm mb-4">Science Questions</p>
                  <a
                    href="mailto:science@nuclora.com"
                    className="text-nuclora-navy hover:text-nuclora-teal transition-colors font-light"
                  >
                    science@nuclora.com
                  </a>
                  <p className="text-sm font-light text-nuclora-muted mt-2">
                    For ingredient, formulation, and research questions
                  </p>
                </div>
                <div>
                  <p className="label-sm mb-4">Press & Media</p>
                  <a
                    href="mailto:press@nuclora.com"
                    className="text-nuclora-navy hover:text-nuclora-teal transition-colors font-light"
                  >
                    press@nuclora.com
                  </a>
                </div>
                <div>
                  <p className="label-sm mb-4">Response Time</p>
                  <p className="text-sm font-light text-nuclora-muted">
                    We respond to all messages within 1 business day. Science
                    and product questions may take up to 2 days for a thorough
                    answer.
                  </p>
                </div>
                <div>
                  <p className="label-sm mb-4">Certificate of Analysis</p>
                  <p className="text-sm font-light text-nuclora-muted">
                    To request a Certificate of Analysis for any Nuclora
                    product, include your order number and the product name in
                    your message.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-24 border border-nuclora-border">
                  <div className="w-16 h-16 rounded-full bg-nuclora-teal/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-nuclora-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-3xl font-light text-nuclora-navy mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Message received.
                  </h3>
                  <p className="text-sm font-light text-nuclora-muted max-w-xs">
                    We&apos;ll be in touch within one business day. Thank you
                    for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label-sm block mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3.5 border border-nuclora-border bg-white text-nuclora-navy text-sm font-light placeholder-nuclora-muted/60 focus:outline-none focus:border-nuclora-teal transition-colors"
                        placeholder="James"
                      />
                    </div>
                    <div>
                      <label className="label-sm block mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3.5 border border-nuclora-border bg-white text-nuclora-navy text-sm font-light placeholder-nuclora-muted/60 focus:outline-none focus:border-nuclora-teal transition-colors"
                        placeholder="Okoye"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-sm block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3.5 border border-nuclora-border bg-white text-nuclora-navy text-sm font-light placeholder-nuclora-muted/60 focus:outline-none focus:border-nuclora-teal transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="label-sm block mb-2">
                      Reason for Inquiry
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3.5 border border-nuclora-border bg-white text-nuclora-navy text-sm font-light focus:outline-none focus:border-nuclora-teal transition-colors appearance-none"
                    >
                      <option value="">Select a topic…</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label-sm block mb-2">Message</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 border border-nuclora-border bg-white text-nuclora-navy text-sm font-light placeholder-nuclora-muted/60 focus:outline-none focus:border-nuclora-teal transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-teal w-full md:w-auto">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE TEAM CTA */}
      <section className="py-24 bg-nuclora-cream">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-sm mb-4">Expert Guidance</p>
              <h2 className="heading-xl mb-6">
                Talk to a registered nutritionist.
              </h2>
              <p className="body-lg mb-8">
                Our team includes registered dietitians and nutritional
                scientists available to discuss your goals, current protocols,
                and which Nuclora formulas may be most appropriate for you.
              </p>
              <p className="text-sm font-light text-nuclora-muted">
                This is a complimentary service for Nuclora customers and
                prospective customers. We don&apos;t sell you — we advise you.
              </p>
            </div>
            <div className="bg-white p-10 border border-nuclora-border">
              <p
                className="text-3xl font-light text-nuclora-navy mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Free 20-minute consultation.
              </p>
              <p className="text-sm font-light text-nuclora-muted mb-6">
                Available Monday–Friday, 9am–5pm PT. Schedule via email or use
                the contact form above.
              </p>
              <a
                href="mailto:science@nuclora.com?subject=Consultation Request"
                className="btn-teal"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
