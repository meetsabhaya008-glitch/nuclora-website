import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuclora — Advanced Cellular Nutrition Backed by Science",
  description:
    "Premium science-driven nutritional supplements engineered for cellular health, longevity, performance, and wellness. Pharmaceutical-grade quality. Uncompromising standards.",
};

const products = [
  {
    slug: "cellular-nad-complex",
    name: "Cellular NAD+ Complex",
    category: "Longevity",
    tagline: "Restore cellular energy from within.",
    price: "$89",
    highlight: "NMN + NR + Resveratrol",
  },
  {
    slug: "omega-3-ultra",
    name: "Omega-3 Ultra Pure",
    category: "Foundation",
    tagline: "Clinical-grade essential fatty acids.",
    price: "$54",
    highlight: "Triglyceride Form · Molecularly Distilled",
  },
  {
    slug: "mitochondrial-activator",
    name: "Mitochondrial Activator",
    category: "Performance",
    tagline: "Peak energy. Peak focus. Peak output.",
    price: "$74",
    highlight: "CoQ10 + PQQ + Alpha Lipoic Acid",
  },
];

const stats = [
  { value: "48", unit: "Research Papers", label: "Reviewed per Formula" },
  { value: "99.7%", unit: "Purity", label: "Pharmaceutical-Grade" },
  { value: "12+", unit: "Testing", label: "Panels Per Batch" },
  { value: "0", unit: "Additives", label: "Fillers, Dyes or Binders" },
];

const testimonials = [
  {
    quote:
      "The most transparent supplement brand I've encountered. The research behind each formula is genuinely world-class.",
    name: "Dr. Marcus Chen",
    title: "Sports Medicine Physician",
  },
  {
    quote:
      "I've been taking the NAD+ Complex for six months. My recovery metrics have improved measurably and the cognitive clarity is real.",
    name: "Serena Walsh",
    title: "Professional Triathlete",
  },
  {
    quote:
      "As a longevity researcher, I hold supplements to an extremely high bar. Nuclora meets it in every category.",
    name: "Prof. Lena Hoffmann",
    title: "Cellular Biology, Stanford",
  },
];

const pillars = [
  {
    number: "01",
    title: "Evidence-First",
    body: "Every ingredient is selected based on peer-reviewed research. We don't follow trends — we follow the science.",
  },
  {
    number: "02",
    title: "Pharmaceutical Purity",
    body: "Manufactured in FDA-registered, GMP-certified facilities. Each batch is third-party tested for potency and contaminants.",
  },
  {
    number: "03",
    title: "Bioavailability Engineered",
    body: "Forms that your body actually absorbs. We use the most bioavailable versions of each nutrient, not the cheapest.",
  },
  {
    number: "04",
    title: "Complete Transparency",
    body: "Every ingredient, every dose, every source — fully disclosed. No proprietary blends. No hidden fillers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-nuclora-cream opacity-60" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-nuclora-teal/5 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-sm mb-6">Advanced Cellular Nutrition</p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-nuclora-navy mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Engineered
              <br />
              for the
              <br />
              <em className="text-nuclora-teal not-italic">cellular age.</em>
            </h1>
            <p className="text-lg font-light text-nuclora-muted leading-relaxed max-w-md mb-10">
              Nuclora develops precision nutrition backed by cutting-edge
              science — formulated to optimize your cells, extend your health
              span, and unlock your full potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Formulas
              </Link>
              <Link href="/science" className="btn-outline">
                Our Science
              </Link>
            </div>
          </div>

          {/* Product visual placeholder */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-nuclora-cream to-nuclora-light-gray rounded-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-nuclora-teal/20 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-nuclora-teal/40" />
                </div>
                <p
                  className="text-2xl font-light text-nuclora-navy text-center px-8"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Cellular NAD+
                  <br />
                  Complex
                </p>
                <p className="text-xs font-light tracking-widest uppercase text-nuclora-muted">
                  30 Day Supply
                </p>
                <p
                  className="text-3xl font-light text-nuclora-navy"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  $89
                </p>
              </div>
              {/* Badge */}
              <div className="absolute top-6 left-6 px-3 py-1.5 bg-nuclora-navy text-white text-xs font-light tracking-wider">
                Bestseller
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs font-light tracking-widest uppercase text-nuclora-muted">
            Scroll
          </p>
          <div className="w-px h-12 bg-gradient-to-b from-nuclora-muted to-transparent" />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-nuclora-navy py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
            {[
              "GMP Certified Manufacturing",
              "Third-Party Tested Every Batch",
              "NSF Certified for Sport",
              "Pharmaceutical-Grade Purity",
              "Free from Artificial Additives",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-nuclora-teal flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs font-light tracking-wider text-white/70">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad bg-nuclora-cream">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="label-sm mb-4">By the Numbers</p>
            <h2 className="heading-xl">
              Standards that set
              <br />
              the industry benchmark.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-nuclora-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-8">
                <p
                  className="text-5xl md:text-6xl font-light text-nuclora-navy mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-nuclora-teal tracking-wide mb-1">
                  {stat.unit}
                </p>
                <p className="text-xs font-light text-nuclora-muted tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="label-sm mb-4">Featured Formulas</p>
              <h2 className="heading-xl">
                Precision-crafted
                <br />
                for every goal.
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex text-sm font-medium text-nuclora-teal hover:text-nuclora-navy transition-colors items-center gap-2"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="product-card group block"
              >
                {/* Image */}
                <div className="relative h-72 bg-nuclora-cream overflow-hidden mb-5">
                  <div className="product-img w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-nuclora-teal/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-nuclora-teal/40" />
                    </div>
                    <p
                      className="text-xl font-light text-nuclora-navy text-center px-6"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {product.name}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-nuclora-navy text-xs font-medium tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div>
                  <p className="text-xs font-light tracking-wide text-nuclora-teal mb-1">
                    {product.highlight}
                  </p>
                  <h3
                    className="text-2xl font-light text-nuclora-navy mb-2 group-hover:text-nuclora-teal transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm font-light text-nuclora-muted mb-4">
                    {product.tagline}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-light text-nuclora-navy"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {product.price}
                    </span>
                    <span className="text-xs font-medium tracking-widest uppercase text-nuclora-teal group-hover:text-nuclora-navy transition-colors">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION */}
      <section className="section-pad bg-nuclora-navy overflow-hidden">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-6">
                Our Approach
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Nutrition as
                <br />
                a precision science.
              </h2>
              <p className="text-base font-light text-white/60 leading-relaxed mb-6">
                We begin with the peer-reviewed literature. Every Nuclora
                formula is built on decades of cellular biology research,
                validated by clinical studies, and reviewed by independent
                scientists before a single capsule is manufactured.
              </p>
              <p className="text-base font-light text-white/60 leading-relaxed mb-10">
                The result is nutrition that works at the molecular level —
                supporting mitochondrial function, NAD+ metabolism, cellular
                repair, and longevity pathways your body already knows how to
                use.
              </p>
              <Link
                href="/science"
                className="inline-flex items-center gap-2 px-8 py-4 border border-nuclora-teal text-nuclora-teal text-xs font-medium tracking-widest uppercase hover:bg-nuclora-teal hover:text-white transition-all duration-300"
              >
                Explore Our Science
              </Link>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="flex gap-6 p-6 border border-white/10 hover:border-nuclora-teal/40 transition-colors duration-300"
                >
                  <span
                    className="text-3xl font-light text-nuclora-teal/50 flex-shrink-0"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {pillar.number}
                  </span>
                  <div>
                    <h4 className="text-base font-medium text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm font-light text-white/50 leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="label-sm mb-4">Trusted By</p>
            <h2 className="heading-xl">
              What experts
              <br />& athletes say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 bg-nuclora-cream border border-nuclora-border"
              >
                <svg
                  className="w-8 h-8 text-nuclora-teal/40 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base font-light text-nuclora-navy leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-6 border-t border-nuclora-border">
                  <p className="text-sm font-medium text-nuclora-navy">
                    {t.name}
                  </p>
                  <p className="text-xs font-light text-nuclora-muted">
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-nuclora-cream">
        <div className="container-tight text-center">
          <p className="label-sm mb-6">Begin Your Protocol</p>
          <h2
            className="text-4xl md:text-5xl font-light text-nuclora-navy leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Your cells are waiting.
          </h2>
          <p className="text-lg font-light text-nuclora-muted max-w-xl mx-auto mb-10">
            Start with a formula matched to your goals. Every Nuclora product
            ships with a complete ingredient breakdown and research summary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-teal">
              Shop All Formulas
            </Link>
            <Link href="/faq" className="btn-outline">
              Common Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
