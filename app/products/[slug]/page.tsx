import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const products: Record<
  string,
  {
    name: string;
    category: string;
    tagline: string;
    description: string;
    price: string;
    priceNote: string;
    color: string;
    benefit: string[];
    ingredients: { name: string; dose: string; role: string }[];
    studies: { citation: string; finding: string }[];
    faq: { q: string; a: string }[];
  }
> = {
  "cellular-nad-complex": {
    name: "Cellular NAD+ Complex",
    category: "Longevity",
    tagline: "Restore cellular energy from within.",
    description:
      "Our flagship longevity formula combining NMN, NR, resveratrol, and pterostilbene to restore NAD+ levels and activate longevity pathways. Built on the most comprehensive NAD+ research available.",
    price: "$89",
    priceNote: "30-day supply · 60 capsules",
    color: "teal",
    benefit: [
      "Restores NAD+ levels that decline with age",
      "Activates SIRT1 and AMPK longevity pathways",
      "Supports mitochondrial energy production",
      "Promotes DNA repair and cellular resilience",
      "Enhances metabolic efficiency",
    ],
    ingredients: [
      {
        name: "NMN (β-Nicotinamide Mononucleotide)",
        dose: "500mg",
        role: "Direct NAD+ precursor via the NRK pathway. Bypasses rate-limiting steps for rapid cellular uptake.",
      },
      {
        name: "NR (Nicotinamide Riboside)",
        dose: "300mg",
        role: "Complementary NAD+ precursor targeting different tissue uptake pathways for synergistic replenishment.",
      },
      {
        name: "Trans-Resveratrol",
        dose: "250mg",
        role: "SIRT1 activator that amplifies NAD+ signaling. Works synergistically with NMN to enhance longevity pathway activation.",
      },
      {
        name: "Pterostilbene",
        dose: "50mg",
        role: "More bioavailable analog of resveratrol with superior blood-brain barrier penetration and longer half-life.",
      },
    ],
    studies: [
      {
        citation: "Yoshino et al., Science (2021)",
        finding: "NMN supplementation increased NAD+ levels in skeletal muscle and improved insulin sensitivity in prediabetic women.",
      },
      {
        citation: "Canto et al., Cell Metabolism (2012)",
        finding: "NR supplementation activated SIRT1 and SIRT3, improving mitochondrial function and energy metabolism.",
      },
      {
        citation: "Lagouge et al., Cell (2006)",
        finding: "Resveratrol combined with NAD+ precursors enhanced mitochondrial biogenesis and extended healthspan in animal models.",
      },
    ],
    faq: [
      {
        q: "When should I take this?",
        a: "Take 2 capsules in the morning with food. NAD+ metabolism is most active in the morning, and taking with food improves absorption.",
      },
      {
        q: "How long before I notice effects?",
        a: "Most users report improved energy within 2–4 weeks of consistent use. Cellular-level changes continue to accumulate over 90+ days.",
      },
      {
        q: "Can I take this with other Nuclora products?",
        a: "Yes. The NAD+ Complex pairs well with Omega-3 Ultra and Mitochondrial Activator for a comprehensive longevity stack.",
      },
    ],
  },
  "omega-3-ultra": {
    name: "Omega-3 Ultra Pure",
    category: "Foundation",
    tagline: "Clinical-grade essential fatty acids.",
    description:
      "Triglyceride-form omega-3s from sustainably sourced cold-water fish. Molecularly distilled to pharmaceutical purity, delivering 2000mg EPA+DHA — the dose validated in clinical research on inflammation and cardiovascular health.",
    price: "$54",
    priceNote: "30-day supply · 60 softgels",
    color: "gold",
    benefit: [
      "2000mg EPA+DHA per serving in triglyceride form",
      "Resolves cellular inflammation via specialized pro-resolving mediators",
      "Supports DHA-dependent neuronal membrane integrity",
      "Promotes cardiovascular endothelial health",
      "Enhances joint mobility and recovery",
    ],
    ingredients: [
      {
        name: "EPA (Eicosapentaenoic Acid)",
        dose: "1200mg",
        role: "Precursor to anti-inflammatory resolvins and protectins. Primary driver of omega-3 cardiovascular and anti-inflammatory effects.",
      },
      {
        name: "DHA (Docosahexaenoic Acid)",
        dose: "800mg",
        role: "Primary structural fatty acid in neuronal and retinal cell membranes. Essential for cognitive function and neuroprotection.",
      },
    ],
    studies: [
      {
        citation: "Maroon & Bost, Surgical Neurology (2006)",
        finding: "Omega-3 supplementation at 2.4g/day effective as anti-inflammatory treatment in neck and back pain patients.",
      },
      {
        citation: "REDUCE-IT Trial, NEJM (2019)",
        finding: "High-dose EPA significantly reduced major cardiovascular events by 25% in high-risk patients.",
      },
    ],
    faq: [
      {
        q: "Why triglyceride form?",
        a: "Triglyceride form omega-3s absorb up to 70% better than the ethyl ester form used in most supplements, and do not require food for maximum absorption.",
      },
      {
        q: "Is there a fishy aftertaste?",
        a: "No. Our molecular distillation process removes oxidized lipids that cause fishy taste and odor. Our softgels are enteric-coated.",
      },
    ],
  },
  "mitochondrial-activator": {
    name: "Mitochondrial Activator",
    category: "Performance",
    tagline: "Peak energy. Peak focus. Peak output.",
    description:
      "A synergistic complex of CoQ10 ubiquinol, PQQ, and alpha-lipoic acid to support mitochondrial biogenesis, electron transport efficiency, and cellular energy production. Formulated for athletes and high-performers.",
    price: "$74",
    priceNote: "30-day supply · 30 capsules",
    color: "navy",
    benefit: [
      "Supports new mitochondria creation (biogenesis) via PGC-1α",
      "Enhances electron transport chain efficiency",
      "Regenerates vitamins C, E, and glutathione",
      "Supports cognitive energy and mental clarity",
      "Improves exercise capacity and recovery speed",
    ],
    ingredients: [
      {
        name: "CoQ10 (Kaneka QH™ Ubiquinol)",
        dose: "200mg",
        role: "Active, reduced form of Coenzyme Q10. Essential cofactor in ATP production via the electron transport chain. Superior bioavailability vs. ubiquinone.",
      },
      {
        name: "PQQ (BioPQQ®)",
        dose: "20mg",
        role: "The only nutrient proven to stimulate mitochondrial biogenesis in humans. Activates PGC-1α to create new mitochondria.",
      },
      {
        name: "R-Alpha Lipoic Acid",
        dose: "300mg",
        role: "The biologically active isomer. Regenerates other antioxidants and supports glucose transport into cells. Both fat and water soluble.",
      },
    ],
    studies: [
      {
        citation: "Harris et al., Nutrition & Metabolism (2013)",
        finding: "PQQ supplementation significantly increased mitochondrial biogenesis markers and improved cellular energy metabolism.",
      },
      {
        citation: "Hernandez-Camacho et al., Frontiers in Physiology (2018)",
        finding: "CoQ10 ubiquinol demonstrated superior bioavailability and clinical efficacy compared to ubiquinone in cardiac patients.",
      },
    ],
    faq: [
      {
        q: "Best time to take this?",
        a: "Take with breakfast for all-day energy support. Avoid taking late in the day as CoQ10 and PQQ can be mildly stimulating.",
      },
      {
        q: "Is this suitable for athletes?",
        a: "Yes. This formula is NSF Certified for Sport — safe for competitive athletes subject to anti-doping regulations.",
      },
    ],
  },
  "sleep-recovery-complex": {
    name: "Sleep & Recovery Complex",
    category: "Recovery",
    tagline: "Repair happens at night.",
    description:
      "A pharmaceutical-grade blend of magnesium glycinate, L-theanine, and ashwagandha to support deep sleep architecture, cortisol regulation, and overnight cellular repair.",
    price: "$62",
    priceNote: "30-day supply · 60 capsules",
    color: "teal",
    benefit: [
      "Supports deep (slow-wave) sleep architecture",
      "Reduces cortisol and physiological stress response",
      "Replenishes magnesium, depleted by exercise and stress",
      "Promotes overnight cellular repair processes",
      "Improves sleep onset without sedation",
    ],
    ingredients: [
      {
        name: "Magnesium Glycinate",
        dose: "400mg elemental",
        role: "Most bioavailable and gut-tolerant form of magnesium. Essential for GABA receptor function, muscle relaxation, and 300+ enzymatic reactions.",
      },
      {
        name: "L-Theanine",
        dose: "200mg",
        role: "Promotes alpha-wave brain activity associated with calm alertness. Reduces sleep latency without morning sedation.",
      },
      {
        name: "KSM-66® Ashwagandha",
        dose: "600mg",
        role: "Full-spectrum root extract with the strongest clinical evidence for cortisol reduction and stress resilience. Clinically studied dosage.",
      },
    ],
    studies: [
      {
        citation: "Nobre et al., Asia Pacific Journal of Clinical Nutrition (2008)",
        finding: "L-theanine significantly increased alpha-wave activity and reduced subjective stress without sedation.",
      },
      {
        citation: "Chandrasekhar et al., Indian Journal of Psychological Medicine (2012)",
        finding: "KSM-66 ashwagandha at 600mg/day reduced serum cortisol by 27.9% and significantly improved stress scores.",
      },
    ],
    faq: [
      {
        q: "Will this make me drowsy the next day?",
        a: "No. This formula does not contain melatonin or sedating herbs. It works by supporting your body's natural sleep pathways, not by sedating you.",
      },
      {
        q: "When should I take it?",
        a: "Take 2 capsules 30–60 minutes before bed.",
      },
    ],
  },
  "cognitive-clarity": {
    name: "Cognitive Clarity",
    category: "Cognition",
    tagline: "Sharper. Faster. Sustained.",
    description:
      "Formulated with Lion's Mane, phosphatidylserine, and bacopa monnieri to support neuroplasticity, memory consolidation, and sustained cognitive performance without stimulants.",
    price: "$69",
    priceNote: "30-day supply · 60 capsules",
    color: "gold",
    benefit: [
      "Stimulates NGF synthesis for neuroplasticity support",
      "Improves working memory and information processing speed",
      "Supports sustained focus without stimulant side effects",
      "Promotes healthy stress response and reduces cognitive fatigue",
      "Builds cumulative benefits over time",
    ],
    ingredients: [
      {
        name: "Lion's Mane (Hericium erinaceus)",
        dose: "1000mg",
        role: "Stimulates Nerve Growth Factor (NGF) synthesis, supporting neuroplasticity and myelination. Standardized 30% beta-glucans.",
      },
      {
        name: "Phosphatidylserine",
        dose: "300mg",
        role: "Key phospholipid in neuronal membranes. RCT evidence for memory support, processing speed, and cognitive aging.",
      },
      {
        name: "Bacopa Monnieri",
        dose: "300mg",
        role: "Adaptogenic herb with strong RCT evidence for memory consolidation and stress reduction. Standardized 50% bacosides.",
      },
    ],
    studies: [
      {
        citation: "Mori et al., Phytotherapy Research (2009)",
        finding: "Lion's Mane supplementation significantly improved cognitive function in older adults with mild impairment.",
      },
      {
        citation: "Kean et al., Nutrients (2015)",
        finding: "Bacopa monnieri demonstrated significant improvements in memory and attention in healthy adults over 12 weeks.",
      },
    ],
    faq: [
      {
        q: "How long does Cognitive Clarity take to work?",
        a: "Some compounds like L-theanine have acute effects. Bacopa and Lion's Mane build cumulative benefits over 4–12 weeks of consistent use.",
      },
    ],
  },
  "vitamin-d3-k2": {
    name: "D3 + K2 Protocol",
    category: "Foundation",
    tagline: "The vitamins that work together.",
    description:
      "5000 IU of cholecalciferol D3 paired with 200mcg MK-7 K2 in a single softgel. The complete combination for bone health, immune function, and cardiovascular support.",
    price: "$38",
    priceNote: "90-day supply · 90 softgels",
    color: "navy",
    benefit: [
      "Optimal vitamin D3 dosing for deficiency correction",
      "MK-7 K2 directs calcium to bones, not arterial walls",
      "Supports immune system regulation and function",
      "Promotes bone mineral density",
      "Best-value formula in the Nuclora line",
    ],
    ingredients: [
      {
        name: "Vitamin D3 (Cholecalciferol)",
        dose: "5000 IU",
        role: "The active form of vitamin D. Regulates calcium absorption, immune modulation, and gene expression in hundreds of pathways.",
      },
      {
        name: "Vitamin K2 (MK-7 Menaquinone)",
        dose: "200mcg",
        role: "The long-chain K2 form with the longest half-life and best clinical evidence. Activates Matrix-Gla Protein to direct calcium safely.",
      },
    ],
    studies: [
      {
        citation: "Knapen et al., Osteoporosis International (2013)",
        finding: "MK-7 K2 supplementation significantly improved bone mineral density and reduced arterial stiffness over 3 years.",
      },
    ],
    faq: [
      {
        q: "Why do I need K2 with D3?",
        a: "D3 increases calcium absorption. K2 activates the proteins that direct that calcium into bones and teeth instead of soft tissues and arteries. Together, they are significantly safer and more effective than D3 alone.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) notFound();

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-0 bg-nuclora-cream">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            {/* Product visual */}
            <div className="relative h-80 md:h-96 bg-white flex flex-col items-center justify-center rounded-none overflow-hidden border border-nuclora-border">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
                  product.color === "teal"
                    ? "bg-nuclora-teal/20"
                    : product.color === "gold"
                    ? "bg-nuclora-gold/20"
                    : "bg-nuclora-navy/10"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full ${
                    product.color === "teal"
                      ? "bg-nuclora-teal/40"
                      : product.color === "gold"
                      ? "bg-nuclora-gold/40"
                      : "bg-nuclora-navy/20"
                  }`}
                />
              </div>
              <p
                className="text-2xl font-light text-nuclora-navy text-center px-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {product.name}
              </p>
              <p className="text-xs font-light tracking-widest uppercase text-nuclora-muted mt-2">
                {product.priceNote}
              </p>
            </div>

            {/* Product info */}
            <div className="pb-12">
              <p className="label-sm mb-4">{product.category}</p>
              <h1
                className="text-4xl md:text-5xl font-light text-nuclora-navy leading-tight mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {product.name}
              </h1>
              <p className="text-lg font-light text-nuclora-muted italic mb-6">
                {product.tagline}
              </p>
              <p className="text-sm font-light text-nuclora-muted leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <span
                  className="text-4xl font-light text-nuclora-navy"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {product.price}
                </span>
                <span className="text-sm font-light text-nuclora-muted">
                  {product.priceNote}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary">Add to Cart</button>
                <button className="btn-outline">Subscribe & Save 15%</button>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["GMP Certified", "Third-Party Tested", "NSF for Sport"].map(
                  (b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1.5 text-xs font-light text-nuclora-muted"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-nuclora-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {b}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="label-sm mb-6">What It Does</p>
              <h2 className="heading-lg mb-8">Key benefits.</h2>
              <ul className="space-y-4">
                {product.benefit.map((b) => (
                  <li key={b} className="flex gap-4">
                    <svg
                      className="w-5 h-5 text-nuclora-teal flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-light text-nuclora-muted leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div>
              <p className="label-sm mb-6">Formula</p>
              <h2 className="heading-lg mb-8">Ingredients & doses.</h2>
              <div className="space-y-4">
                {product.ingredients.map((ing) => (
                  <div
                    key={ing.name}
                    className="p-5 border border-nuclora-border"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <h4
                        className="text-lg font-light text-nuclora-navy"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {ing.name}
                      </h4>
                      <span className="text-sm font-medium text-nuclora-teal ml-4 flex-shrink-0">
                        {ing.dose}
                      </span>
                    </div>
                    <p className="text-xs font-light text-nuclora-muted leading-relaxed">
                      {ing.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section-pad bg-nuclora-cream">
        <div className="container-tight">
          <div className="text-center mb-12">
            <p className="label-sm mb-4">Evidence Base</p>
            <h2 className="heading-xl">
              The research behind
              <br />
              this formula.
            </h2>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {product.studies.map((study) => (
              <div
                key={study.citation}
                className="bg-white p-8 border border-nuclora-border"
              >
                <p className="text-xs font-medium tracking-wide text-nuclora-teal mb-3">
                  {study.citation}
                </p>
                <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                  {study.finding}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-tight max-w-3xl">
            <div className="text-center mb-12">
              <p className="label-sm mb-4">Questions</p>
              <h2 className="heading-xl">Product FAQ.</h2>
            </div>
            <div className="space-y-4">
              {product.faq.map((item) => (
                <details
                  key={item.q}
                  className="group border border-nuclora-border p-6 cursor-pointer"
                >
                  <summary className="flex items-center justify-between list-none">
                    <span className="text-base font-light text-nuclora-navy pr-4">
                      {item.q}
                    </span>
                    <span className="text-nuclora-teal text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="text-sm font-light text-nuclora-muted leading-relaxed mt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MORE PRODUCTS */}
      <section className="py-24 bg-nuclora-cream">
        <div className="container-tight text-center">
          <h2 className="heading-xl mb-4">Continue building your stack.</h2>
          <p className="body-lg max-w-md mx-auto mb-10">
            Explore the full Nuclora formula range.
          </p>
          <Link href="/products" className="btn-teal">
            View All Formulas
          </Link>
        </div>
      </section>
    </>
  );
}
