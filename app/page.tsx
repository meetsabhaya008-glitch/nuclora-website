"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const products = [
  {
    id: "cellular-nad-complex",
    name: "Cellular NAD+ Complex",
    tagline: "Cellular Energy & Longevity",
    price: "$89",
    description:
      "Pharmaceutical-grade NMN + NR complex to replenish NAD+ levels, support mitochondrial function, and promote healthy cellular aging.",
    tag: "Best Seller",
    accent: "#EDE8DF",
    image: "/nmn-bottle.png",
  },
  {
    id: "omega-3-ultra",
    name: "Omega-3 Ultra",
    tagline: "Cardiovascular & Cognitive Health",
    price: "$54",
    description:
      "Ultra-pure triglyceride-form fish oil with 3000mg EPA+DHA per serving. Molecularly distilled, free of heavy metals and oxidation products.",
    tag: "Pure Formula",
    accent: "#E0E8E5",
    image: "/omega-3-ultra.svg",
  },
  {
    id: "mitochondrial-activator",
    name: "Mitochondrial Activator",
    tagline: "Energy, Endurance & Recovery",
    price: "$74",
    description:
      "CoQ10, PQQ, L-Carnitine, and Alpha Lipoic Acid synergistically formulated to optimise mitochondrial biogenesis and cellular energy output.",
    tag: "Advanced",
    accent: "#EDE5DC",
    image: "/mitochondrial-activator.svg",
  },
  {
    id: "sleep-recovery-complex",
    name: "Sleep & Recovery Complex",
    tagline: "Deep Sleep & Cellular Repair",
    price: "$62",
    description:
      "Magnesium glycinate, L-Theanine, Ashwagandha, and pharmaceutical-grade Melatonin to restore sleep architecture and accelerate cellular recovery.",
    tag: "Recovery",
    accent: "#DDE0EA",
    image: "/sleep-recovery-complex.svg",
  },
  {
    id: "cognitive-clarity",
    name: "Cognitive Clarity",
    tagline: "Focus, Memory & Mental Performance",
    price: "$79",
    description:
      "Lion's Mane, Bacopa Monnieri, and Phosphatidylserine — clinically studied nootropics for neuroplasticity, recall, and sustained focus.",
    tag: "Cognitive",
    accent: "#E2E4E8",
    image: "/cognitive-clarity.svg",
  },
  {
    id: "vitamin-d3-k2",
    name: "Vitamin D3 + K2",
    tagline: "Immune, Bone & Cardiovascular Support",
    price: "$38",
    description:
      "5000 IU D3 paired with 200mcg MK-7 K2 for optimal calcium metabolism, immune regulation, and cardiovascular protection.",
    tag: "Foundation",
    accent: "#EDE8DF",
    image: "/vitamin-d3-k2.svg",
  },
];

const testimonials = [
  {
    name: "Dr. Aidan Walsh",
    role: "Sports Medicine Physician",
    text: "I recommend Nuclora to my patients who are serious about longevity and performance. The formulations are precise, the sourcing is transparent, and the quality is pharmaceutical-grade.",
    initials: "AW",
  },
  {
    name: "Priya Mehta",
    role: "CEO & Biohacker",
    text: "Three months in — my energy is consistently higher, brain fog is gone, and my bloodwork shows measurable improvements. This is the real thing.",
    initials: "PM",
  },
  {
    name: "James Thornton",
    role: "Endurance Athlete",
    text: "The Mitochondrial Activator and Sleep Complex have transformed my recovery. These aren't just supplements — they're tools for optimisation.",
    initials: "JT",
  },
];

const pricingTiers = [
  {
    name: "Essential",
    price: "$89",
    period: "per month",
    description: "Begin your cellular health journey with our flagship formula.",
    features: [
      "Cellular NAD+ Complex",
      "Monthly supply (60 capsules)",
      "Certificate of Analysis",
      "Free shipping",
    ],
    cta: "Start with Essential",
    highlighted: false,
  },
  {
    name: "Bundle",
    price: "$229",
    period: "per month",
    description: "The complete longevity stack for serious optimisers.",
    features: [
      "NAD+ Complex + Omega-3 Ultra",
      "Mitochondrial Activator",
      "Priority dispatch",
      "Personalised protocol guide",
      "15% savings",
    ],
    cta: "Choose Bundle",
    highlighted: true,
  },
  {
    name: "Complete System",
    price: "$289",
    period: "per month",
    description: "Every formula. Maximum impact. The full Nuclora system.",
    features: [
      "All 6 Nuclora formulas",
      "Quarterly blood panel consultation",
      "Dedicated health advisor",
      "20% savings",
      "VIP early access",
    ],
    cta: "Get Complete System",
    highlighted: false,
  },
];

const standards = [
  {
    num: "01",
    title: "Scientific Integrity",
    body: "Every formulation is grounded in peer-reviewed research and clinical evidence. We cite our sources. We never compromise on the science.",
  },
  {
    num: "02",
    title: "Uncompromising Quality",
    body: "Premium, bioavailable ingredients — third-party tested with full transparency on every label. GMP certified facilities only.",
  },
  {
    num: "03",
    title: "Long-Term Thinking",
    body: "We optimise for decades, not days. Health is a lifelong investment, and every Nuclora formula reflects that philosophy.",
  },
  {
    num: "04",
    title: "Radical Transparency",
    body: "No proprietary blends. No hidden fillers. Full ingredient disclosure on every product, every batch, every time.",
  },
];

const trustItems = [
  "THIRD-PARTY TESTED",
  "NO UNNECESSARY FILLERS",
  "CLINICALLY INFORMED FORMULAS",
  "TRANSPARENT SOURCING",
  "GMP CERTIFIED",
  "PHARMACEUTICAL-GRADE",
  "BIOAVAILABLE INGREDIENTS",
  "MADE WITH PRECISION",
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".aos");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen bg-nuclora-ivory flex flex-col justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
            {/* Left — text */}
            <div>
              <p className="label-gold mb-6">Cellular Longevity Science</p>
              <h1
                className="heading-hero mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Precision
                <br />
                Nutrition.
                <br />
                <span className="italic font-light">Clinically</span>
                <br />
                Informed.
              </h1>
              <p className="body-lg max-w-md mb-10">
                Advanced cellular nutrition formulated from peer-reviewed science.
                No shortcuts. No compromises. Just science-backed formulas for those
                who invest in their health for the long term.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-gold">
                  Explore the Collection
                </Link>
                <Link href="/science" className="btn-outline">
                  The Science
                </Link>
              </div>
            </div>

            {/* Right — product bottle */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Soft background glow */}
              <div
                className="w-[480px] h-[560px] rounded-3xl relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "#EDE8DF" }}
              >
                {/* Subtle ring behind bottle */}
                <div className="absolute w-80 h-80 rounded-full border border-nuclora-gold/15" />
                <div className="absolute w-56 h-56 rounded-full border border-nuclora-gold/10" />

                {/* Bottle image */}
                <div className="relative z-10 w-72 h-[420px]">
                  <Image
                    src="/nmn-bottle.png"
                    alt="Nuclora NMN 500mg — Cellular Longevity"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-10 -left-4 bg-white px-5 py-4 rounded-2xl shadow-xl border border-nuclora-border">
                <p className="text-xs font-medium tracking-widest uppercase text-nuclora-gold mb-1">
                  Flagship Formula
                </p>
                <p
                  className="text-lg font-light text-nuclora-navy"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  NMN 500mg
                </p>
              </div>

              {/* Second badge */}
              <div className="absolute top-10 -right-2 bg-nuclora-navy px-4 py-3 rounded-xl shadow-lg">
                <p className="text-xs font-medium tracking-widest uppercase text-nuclora-gold mb-0.5">
                  Made with precision
                </p>
                <p
                  className="text-sm font-light text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  in Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TRUST BAR ──────────────────────────────────── */}
      <section className="bg-nuclora-navy py-5 overflow-hidden">
        <div className="marquee-track">
          {[...trustItems, ...trustItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-8 text-xs font-medium tracking-widest text-white/60 whitespace-nowrap"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-nuclora-gold/60" />
            </span>
          ))}
        </div>
      </section>

      {/* ── STANDARDS / COMMITMENT ─────────────────────────────── */}
      <section className="bg-nuclora-navy section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 aos">
            <p className="label-gold mb-4">Our Commitment</p>
            <h2
              className="heading-display text-white max-w-2xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Standard We Hold Ourselves To
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {standards.map((s, i) => (
              <div
                key={s.num}
                className={`aos aos-delay-${i + 1} bg-nuclora-navy p-10 hover:bg-white/5 transition-colors duration-300`}
              >
                <div
                  className="text-7xl font-light leading-none mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "rgba(184,144,106,0.2)",
                  }}
                >
                  {s.num}
                </div>
                <div className="w-8 h-px bg-nuclora-gold/50 mb-5" />
                <h3
                  className="text-xl font-light text-white mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm font-light text-white/50 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ───────────────────────────────────────────── */}
      <section className="bg-nuclora-ivory section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 aos">
            <div>
              <p className="label-gold mb-3">The Collection</p>
              <h2
                className="heading-display"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                The Core Collection
              </h2>
            </div>
            <Link href="/products" className="btn-outline self-start md:self-auto">
              View All Products
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className={`aos aos-delay-${(i % 3) + 1} group`}
              >
                <div className="product-card-hover rounded-2xl overflow-hidden border border-nuclora-border bg-white">
                  {/* Image area */}
                  <div
                    className="relative h-64 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: product.accent }}
                  >
                    <div className="relative w-36 h-52">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                        unoptimized={product.image.endsWith(".svg")}
                      />
                    </div>
                    {/* Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm text-nuclora-navy text-xs font-medium tracking-wider uppercase rounded-full">
                      {product.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="text-xl font-light text-nuclora-navy leading-snug"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {product.name}
                      </h3>
                      <span className="text-nuclora-gold font-medium text-sm ml-4 whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-sm font-light text-nuclora-muted leading-relaxed mb-5">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center text-xs font-medium tracking-widest uppercase text-nuclora-navy group-hover:text-nuclora-gold transition-colors duration-300">
                      Learn More
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCIENCE CTA ────────────────────────────────────────── */}
      <section className="bg-nuclora-navy section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-16 items-start">
            <div className="lg:col-span-2 aos">
              <p className="label-gold mb-5">Why Nuclora</p>
              <h2
                className="text-5xl md:text-6xl font-light leading-tight text-white mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Science-Driven.{" "}
                <span className="italic">Uncompromisingly</span>{" "}
                Pure.
              </h2>
              <p className="text-base font-light text-white/60 leading-relaxed mb-8 max-w-md">
                Every Nuclora formula begins with a clinical question, not a
                marketing brief. We study the science, select the most bioavailable
                forms of each nutrient, and formulate with exactness.
              </p>
              <Link href="/science" className="btn-outline-white">
                Explore the Science
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-px bg-white/10 aos aos-delay-2">
              {[
                { stat: "100+", label: "Clinical studies referenced" },
                { stat: "6", label: "Precision formulas" },
                { stat: "0", label: "Unnecessary fillers" },
                { stat: "3rd", label: "Party tested, every batch" },
              ].map((item, i) => (
                <div key={i} className="bg-nuclora-navy p-8">
                  <div
                    className="text-5xl font-light text-nuclora-gold mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.stat}
                  </div>
                  <p className="text-sm font-light text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="bg-nuclora-cream section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 aos">
            <p className="label-gold mb-3">Testimonials</p>
            <h2
              className="heading-display"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Trusted by High Performers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`aos aos-delay-${i + 1} bg-white rounded-2xl p-8 border border-nuclora-border`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-nuclora-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base font-light text-nuclora-charcoal leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-nuclora-navy flex items-center justify-center">
                    <span className="text-xs font-medium text-white tracking-wider">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-nuclora-navy">
                      {t.name}
                    </p>
                    <p className="text-xs text-nuclora-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────── */}
      <section className="bg-nuclora-ivory section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 aos">
            <p className="label-gold mb-3">Pricing</p>
            <h2
              className="heading-display"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Choose Your Formula
            </h2>
            <p className="body-base mt-4 max-w-md mx-auto">
              Every tier is backed by the same uncompromising science and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`aos aos-delay-${i + 1} rounded-2xl p-8 border flex flex-col ${
                  tier.highlighted
                    ? "bg-nuclora-navy border-nuclora-navy"
                    : "bg-white border-nuclora-border"
                }`}
              >
                {tier.highlighted && (
                  <span className="self-start px-3 py-1 bg-nuclora-gold/20 text-nuclora-gold text-xs font-medium tracking-widest uppercase rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-2xl font-light mb-2 ${
                    tier.highlighted ? "text-white" : "text-nuclora-navy"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-5xl font-light ${
                      tier.highlighted ? "text-white" : "text-nuclora-navy"
                    }`}
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlighted ? "text-white/50" : "text-nuclora-muted"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`text-sm font-light mb-8 leading-relaxed ${
                    tier.highlighted ? "text-white/60" : "text-nuclora-muted"
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm font-light ${
                        tier.highlighted ? "text-white/70" : "text-nuclora-charcoal"
                      }`}
                    >
                      <span className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full border flex items-center justify-center"
                        style={{
                          borderColor: tier.highlighted ? "rgba(184,144,106,0.5)" : "#B8906A",
                        }}
                      >
                        <svg
                          className="w-2 h-2"
                          fill="none"
                          viewBox="0 0 8 8"
                          stroke={tier.highlighted ? "rgba(184,144,106,0.8)" : "#B8906A"}
                          strokeWidth="2"
                        >
                          <path d="M1.5 4l1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/products"
                  className={`w-full text-center py-3.5 text-xs font-medium tracking-widest uppercase rounded-full transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-nuclora-gold text-white hover:bg-white hover:text-nuclora-navy"
                      : "border border-nuclora-navy text-nuclora-navy hover:bg-nuclora-navy hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY / CTA ────────────────────────────────────── */}
      <section className="bg-nuclora-navy section-pad">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="label-gold mb-5 aos">Begin Your Journey</p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-6 aos aos-delay-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Your cellular health
            <br />
            <span className="italic">starts today.</span>
          </h2>
          <p className="body-base text-white/60 mb-12 max-w-md mx-auto aos aos-delay-2">
            Join thousands of high performers who take a proactive, science-driven
            approach to their long-term health.
          </p>

          {/* Email capture */}
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8 aos aos-delay-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-light rounded-full focus:outline-none focus:border-nuclora-gold transition-colors"
            />
            <button
              type="submit"
              className="btn-gold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-white/30 aos aos-delay-4">
            Science updates, launch access, and exclusive protocols. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
