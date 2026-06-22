import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ingredients",
  description:
    "Every Nuclora ingredient is selected for bioavailability, purity, and clinical evidence. Explore the compounds behind our formulas.",
};

const ingredients = [
  {
    name: "NMN (Nicotinamide Mononucleotide)",
    category: "NAD+ Precursor",
    mechanism: "Direct precursor to NAD+, bypassing the rate-limiting NRK1 step. Restores cellular NAD+ levels which decline up to 50% with age.",
    form: "β-NMN, >99% purity, stabilized form",
    dose: "500mg per serving",
    evidence: "Level I",
    highlight: true,
  },
  {
    name: "CoQ10 (Ubiquinol)",
    category: "Mitochondrial Support",
    mechanism: "The active, reduced form of Coenzyme Q10. Essential cofactor in the electron transport chain; superior bioavailability vs. ubiquinone form.",
    form: "Kaneka QH™ Ubiquinol (fermentation-derived)",
    dose: "200mg per serving",
    evidence: "Level I",
    highlight: true,
  },
  {
    name: "Resveratrol",
    category: "Longevity Activator",
    mechanism: "Activates SIRT1 and AMPK longevity pathways. Works synergistically with NMN to support NAD+ signaling and mitochondrial biogenesis.",
    form: "Trans-Resveratrol, micronized for bioavailability",
    dose: "250mg per serving",
    evidence: "Level II",
    highlight: false,
  },
  {
    name: "PQQ (Pyrroloquinoline Quinone)",
    category: "Mitochondrial Biogenesis",
    mechanism: "Stimulates the creation of new mitochondria via PGC-1α activation. The only nutrient shown to trigger mitochondrial biogenesis in healthy humans.",
    form: "BioPQQ® (fermentation-derived, clinically studied)",
    dose: "20mg per serving",
    evidence: "Level II",
    highlight: false,
  },
  {
    name: "Omega-3 (EPA/DHA)",
    category: "Anti-Inflammatory Foundation",
    mechanism: "Precursor to pro-resolving mediators (resolvins, protectins) that actively resolve inflammation. DHA is the primary structural fatty acid in neuronal membranes.",
    form: "Triglyceride form (2.5× higher bioavailability than ethyl ester), molecularly distilled",
    dose: "2000mg EPA/DHA per serving",
    evidence: "Level I",
    highlight: true,
  },
  {
    name: "Magnesium Glycinate",
    category: "Essential Mineral",
    mechanism: "Cofactor in 300+ enzymatic reactions. Glycinate chelate maximizes bioavailability and tolerability. Critical for ATP production and sleep quality.",
    form: "Magnesium Glycinate (30% elemental magnesium)",
    dose: "400mg elemental magnesium",
    evidence: "Level I",
    highlight: false,
  },
  {
    name: "Vitamin D3 + K2",
    category: "Synergistic Vitamins",
    mechanism: "D3 drives calcium absorption; K2 (MK-7) directs calcium into bones, away from arterial tissue. This combination is essential — D3 alone can raise calcium without proper direction.",
    form: "Cholecalciferol D3 + MK-7 Menaquinone K2",
    dose: "5000 IU D3 / 200mcg K2",
    evidence: "Level I",
    highlight: false,
  },
  {
    name: "Alpha-Lipoic Acid",
    category: "Master Antioxidant",
    mechanism: "Unique antioxidant that is both water and fat soluble. Regenerates vitamins C, E, CoQ10, and glutathione. Supports insulin sensitivity and neuroprotection.",
    form: "R-ALA (biologically active isomer only)",
    dose: "300mg per serving",
    evidence: "Level II",
    highlight: false,
  },
];

const sourcingPrinciples = [
  {
    title: "Form Matters",
    body: "We never use the cheapest form of a nutrient. We use the most bioavailable: ubiquinol not ubiquinone, methylfolate not folic acid, triglyceride omega-3s not ethyl esters. The difference in cellular uptake is dramatic.",
  },
  {
    title: "Dose Integrity",
    body: "Every ingredient is dosed at or above the level used in clinical trials. We refuse to use proprietary blends that allow under-dosing behind a label. You see every dose, every time.",
  },
  {
    title: "Source Verification",
    body: "We know the origin of every ingredient we use. Key ingredients carry certification from standardized, clinically-studied suppliers — Kaneka, BioPQQ, Sabinsa — not anonymous bulk commodity sources.",
  },
  {
    title: "Interaction Testing",
    body: "We model nutrient-nutrient interactions before finalizing any formula. Our formulation team identifies synergies (D3+K2, NMN+Resveratrol) and potential antagonisms to optimize each combination.",
  },
];

export default function IngredientsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-nuclora-cream">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="label-sm mb-6">Ingredient Philosophy</p>
            <h1
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What we put in
              <br />
              — and what we don&apos;t.
            </h1>
            <p className="text-xl font-light text-nuclora-muted leading-relaxed">
              Every compound in a Nuclora formula earned its place through peer-reviewed
              evidence. Every form was chosen for bioavailability. Every dose was
              determined by clinical data — not economics.
            </p>
          </div>
        </div>
      </section>

      {/* SOURCING PRINCIPLES */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="label-sm mb-4">Our Standards</p>
            <h2 className="heading-xl">The Nuclora ingredient standard.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sourcingPrinciples.map((p) => (
              <div key={p.title} className="flex gap-6 p-8 border border-nuclora-border">
                <div className="w-1 flex-shrink-0 bg-nuclora-teal" />
                <div>
                  <h3
                    className="text-xl font-light text-nuclora-navy mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENT DATABASE */}
      <section className="section-pad bg-nuclora-cream">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="label-sm mb-4">Ingredient Index</p>
            <h2 className="heading-xl">
              Know exactly what you&apos;re taking.
            </h2>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-nuclora-border">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-nuclora-teal" />
              <span className="text-xs font-light text-nuclora-muted">Level I Evidence (Human RCTs / Meta-analyses)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-nuclora-gold" />
              <span className="text-xs font-light text-nuclora-muted">Level II Evidence (Clinical studies, mechanistic evidence)</span>
            </div>
          </div>

          <div className="space-y-4">
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className={`bg-white border p-7 ${ing.highlight ? "border-nuclora-teal/40" : "border-nuclora-border"}`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3
                        className="text-xl font-light text-nuclora-navy"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {ing.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-nuclora-cream text-nuclora-teal text-xs font-medium tracking-wide">
                        {ing.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium tracking-wide ${
                          ing.evidence === "Level I"
                            ? "bg-nuclora-teal/10 text-nuclora-teal"
                            : "bg-nuclora-gold/10 text-nuclora-gold"
                        }`}
                      >
                        {ing.evidence}
                      </span>
                    </div>
                    <p className="text-sm font-light text-nuclora-muted leading-relaxed mb-4">
                      {ing.mechanism}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-nuclora-navy mb-1">
                        Form
                      </p>
                      <p className="text-xs font-light text-nuclora-muted">
                        {ing.form}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-nuclora-navy mb-1">
                        Dose
                      </p>
                      <p className="text-sm font-medium text-nuclora-teal">
                        {ing.dose}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE EXCLUDE */}
      <section className="section-pad bg-nuclora-navy">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-4">
              No Compromises
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What we will never include.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Artificial Colors",
              "Artificial Flavors",
              "Titanium Dioxide",
              "Magnesium Stearate",
              "Silicon Dioxide",
              "Proprietary Blends",
              "Synthetic Fillers",
              "Undisclosed Additives",
              "Gluten",
              "GMO Ingredients",
              "Heavy Metal Contaminants",
              "Pesticide Residues",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 border border-white/10"
              >
                <svg
                  className="w-4 h-4 text-nuclora-teal flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-xs font-light text-white/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-tight text-center">
          <h2 className="heading-xl mb-6">
            See these ingredients in action.
          </h2>
          <p className="body-lg max-w-lg mx-auto mb-10">
            Explore our formulas to see exactly how we combine these compounds
            for specific health goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-teal">
              Shop All Formulas
            </Link>
            <Link href="/quality" className="btn-outline">
              Our Quality Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
