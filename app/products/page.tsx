import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Nuclora's complete line of science-driven nutritional supplements engineered for cellular health, longevity, performance, and recovery.",
};

export const allProducts = [
  {
    slug: "cellular-nad-complex",
    name: "Cellular NAD+ Complex",
    category: "Longevity",
    tagline: "Restore cellular energy from within.",
    description:
      "Our flagship formula combining NMN, NR, resveratrol, and pterostilbene to restore NAD+ levels and activate longevity pathways. Built on the most robust longevity research available.",
    price: "$89",
    priceNote: "30-day supply / 60 capsules",
    highlight: "NMN 500mg · NR 300mg · Resveratrol 250mg",
    badge: "Bestseller",
    color: "teal",
  },
  {
    slug: "omega-3-ultra",
    name: "Omega-3 Ultra Pure",
    category: "Foundation",
    tagline: "Clinical-grade essential fatty acids.",
    description:
      "Triglyceride-form omega-3s from sustainably sourced cold-water fish. Molecularly distilled, IFOS-certified, delivering 2000mg EPA+DHA per serving — the dose used in clinical research.",
    price: "$54",
    priceNote: "30-day supply / 60 softgels",
    highlight: "2000mg EPA/DHA · Triglyceride Form",
    badge: null,
    color: "gold",
  },
  {
    slug: "mitochondrial-activator",
    name: "Mitochondrial Activator",
    category: "Performance",
    tagline: "Peak energy. Peak focus. Peak output.",
    description:
      "A synergistic complex of CoQ10 ubiquinol, PQQ, and alpha-lipoic acid to support mitochondrial biogenesis, electron transport efficiency, and cellular energy production.",
    price: "$74",
    priceNote: "30-day supply / 30 capsules",
    highlight: "CoQ10 200mg · PQQ 20mg · R-ALA 300mg",
    badge: "New",
    color: "navy",
  },
  {
    slug: "sleep-recovery-complex",
    name: "Sleep & Recovery Complex",
    category: "Recovery",
    tagline: "Repair happens at night.",
    description:
      "A pharmaceutical-grade blend of magnesium glycinate, L-theanine, and ashwagandha to support deep sleep architecture, cortisol regulation, and overnight cellular repair.",
    price: "$62",
    priceNote: "30-day supply / 60 capsules",
    highlight: "Magnesium 400mg · L-Theanine 200mg",
    badge: null,
    color: "teal",
  },
  {
    slug: "cognitive-clarity",
    name: "Cognitive Clarity",
    category: "Cognition",
    tagline: "Sharper. Faster. Sustained.",
    description:
      "Formulated with Lion's Mane, phosphatidylserine, and bacopa monnieri to support neuroplasticity, memory consolidation, and sustained cognitive performance.",
    price: "$69",
    priceNote: "30-day supply / 60 capsules",
    highlight: "Lion's Mane 1000mg · PS 300mg",
    badge: null,
    color: "gold",
  },
  {
    slug: "vitamin-d3-k2",
    name: "D3 + K2 Protocol",
    category: "Foundation",
    tagline: "The vitamins that work together.",
    description:
      "5000 IU of cholecalciferol D3 paired with 200mcg MK-7 K2 in a single softgel. The complete combination for bone health, immune function, and cardiovascular support.",
    price: "$38",
    priceNote: "90-day supply / 90 softgels",
    highlight: "D3 5000 IU · K2 MK-7 200mcg",
    badge: "Best Value",
    color: "navy",
  },
];

const categories = ["All", "Longevity", "Performance", "Foundation", "Recovery", "Cognition"];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 bg-nuclora-cream">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="label-sm mb-6">All Formulas</p>
            <h1
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Science for every goal.
            </h1>
            <p className="text-lg font-light text-nuclora-muted leading-relaxed">
              Each Nuclora formula is built on peer-reviewed evidence, dosed at
              clinically-validated levels, and manufactured to pharmaceutical
              standards. No exceptions.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2.5 text-xs font-medium tracking-widest uppercase border transition-colors duration-200 ${
                  cat === "All"
                    ? "bg-nuclora-navy text-white border-nuclora-navy"
                    : "bg-transparent text-nuclora-navy border-nuclora-border hover:border-nuclora-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="product-card group block border border-nuclora-border hover:border-nuclora-teal transition-all duration-300"
              >
                {/* Product visual */}
                <div className="relative h-64 bg-nuclora-cream overflow-hidden">
                  <div
                    className={`product-img w-full h-full flex flex-col items-center justify-center gap-3 ${
                      product.color === "teal"
                        ? "bg-gradient-to-br from-nuclora-cream to-teal-50"
                        : product.color === "gold"
                        ? "bg-gradient-to-br from-nuclora-cream to-amber-50"
                        : "bg-gradient-to-br from-nuclora-cream to-slate-100"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        product.color === "teal"
                          ? "bg-nuclora-teal/20"
                          : product.color === "gold"
                          ? "bg-nuclora-gold/20"
                          : "bg-nuclora-navy/10"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${
                          product.color === "teal"
                            ? "bg-nuclora-teal/40"
                            : product.color === "gold"
                            ? "bg-nuclora-gold/40"
                            : "bg-nuclora-navy/20"
                        }`}
                      />
                    </div>
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white text-nuclora-navy text-xs font-medium tracking-wider">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="px-3 py-1 bg-nuclora-navy text-white text-xs font-medium tracking-wider">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <p className="text-xs font-light tracking-wide text-nuclora-teal mb-1">
                    {product.highlight}
                  </p>
                  <h3
                    className="text-xl font-light text-nuclora-navy mb-2 group-hover:text-nuclora-teal transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm font-light text-nuclora-muted mb-5 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-nuclora-border">
                    <div>
                      <span
                        className="text-2xl font-light text-nuclora-navy"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {product.price}
                      </span>
                      <span className="text-xs font-light text-nuclora-muted ml-2">
                        / month
                      </span>
                    </div>
                    <span className="text-xs font-medium tracking-widest uppercase text-nuclora-teal group-hover:text-nuclora-navy transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STACK GUIDE */}
      <section className="py-24 bg-nuclora-cream">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-sm mb-6">Build Your Stack</p>
              <h2 className="heading-xl mb-6">
                Not sure where to start?
              </h2>
              <p className="body-lg mb-6">
                Our products are designed to work independently and in
                combination. Common protocol foundations include our NAD+
                Complex + Omega-3 Ultra as a longevity baseline, with the
                Mitochondrial Activator for performance demands.
              </p>
              <p className="body-lg mb-8">
                Have questions about which products fit your goals? Our team
                includes registered nutritionists available to guide you.
              </p>
              <Link href="/contact" className="btn-teal">
                Talk to a Nutritionist
              </Link>
            </div>
            <div className="space-y-4">
              {[
                {
                  stack: "Longevity Foundation",
                  products: "NAD+ Complex + Omega-3 Ultra + D3/K2",
                  goal: "Cellular health, anti-aging, and immune support",
                },
                {
                  stack: "Performance Protocol",
                  products: "Mitochondrial Activator + Omega-3 Ultra",
                  goal: "Energy, endurance, and recovery optimization",
                },
                {
                  stack: "Cognitive Stack",
                  products: "Cognitive Clarity + Sleep & Recovery",
                  goal: "Focus, memory, and sleep quality",
                },
              ].map((s) => (
                <div key={s.stack} className="bg-white p-6 border border-nuclora-border">
                  <p
                    className="text-xl font-light text-nuclora-navy mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.stack}
                  </p>
                  <p className="text-xs font-medium tracking-wide text-nuclora-teal mb-2">
                    {s.products}
                  </p>
                  <p className="text-sm font-light text-nuclora-muted">{s.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
