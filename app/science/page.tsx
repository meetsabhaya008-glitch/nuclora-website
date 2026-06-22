import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Science & Research",
  description:
    "Nuclora's formulas are built on peer-reviewed science. Explore our research methodology, key studies, and the biological mechanisms behind our products.",
};

const researchAreas = [
  {
    title: "NAD+ Metabolism & Longevity",
    icon: "◎",
    summary:
      "Nicotinamide adenine dinucleotide (NAD+) is central to cellular energy, DNA repair, and longevity signaling. Levels decline with age by up to 50% — directly impacting mitochondrial function, metabolic health, and resilience.",
    keyFindings: [
      "NMN supplementation restores NAD+ levels in human clinical trials (Yoshino et al., 2021)",
      "NAD+ precursors activate sirtuins, key longevity regulators",
      "Synergistic effects with resveratrol and pterostilbene documented",
    ],
    studies: 14,
  },
  {
    title: "Mitochondrial Biogenesis",
    icon: "⬡",
    summary:
      "Mitochondria are the powerhouses of every cell. Their number, health, and efficiency determine energy output, cognitive performance, and cellular resilience. CoQ10, PQQ, and alpha-lipoic acid work in concert to support mitochondrial health.",
    keyFindings: [
      "PQQ promotes mitochondrial biogenesis via PGC-1α pathway activation",
      "CoQ10 ubiquinol form demonstrates superior absorption vs. ubiquinone",
      "Alpha-lipoic acid regenerates other antioxidants including vitamins C and E",
    ],
    studies: 11,
  },
  {
    title: "Cellular Inflammation & Resilience",
    icon: "◈",
    summary:
      "Chronic low-grade inflammation — 'inflammaging' — is a driver of accelerated aging and most chronic diseases. Nuclora formulas target the NF-κB pathway, oxidative stress, and cellular senescence to support long-term health.",
    keyFindings: [
      "Omega-3 EPA/DHA resolves inflammatory signaling at the cellular level",
      "Quercetin acts as a senolytic, supporting clearance of senescent cells",
      "Magnesium deficiency correlates with elevated CRP and inflammatory markers",
    ],
    studies: 19,
  },
  {
    title: "Cognitive & Neurological Function",
    icon: "◉",
    summary:
      "Cognitive longevity requires sustained neuronal energy, healthy synaptic plasticity, and protection against oxidative stress. Our nootropic compounds are selected for their validated mechanisms of action in human studies.",
    keyFindings: [
      "Lion's Mane mushroom stimulates NGF synthesis supporting neuroplasticity",
      "Phosphatidylserine crosses the blood-brain barrier; RCTs confirm memory support",
      "DHA is the primary structural fatty acid in neuronal membranes",
    ],
    studies: 16,
  },
];

const methodology = [
  {
    step: "01",
    title: "Literature Review",
    body: "We begin with systematic reviews of PubMed-indexed research. Each formula requires a minimum of 10 peer-reviewed studies before consideration. Meta-analyses and RCTs receive highest weighting.",
  },
  {
    step: "02",
    title: "Mechanism Mapping",
    body: "We map the complete biological mechanism of each candidate compound — receptor binding, metabolic pathway, cellular target, and downstream effects. If the mechanism is not established, it does not qualify.",
  },
  {
    step: "03",
    title: "Dosing Analysis",
    body: "We identify the effective dose ranges from human clinical trials — not animal models. Every Nuclora product is dosed at or above the clinically validated threshold.",
  },
  {
    step: "04",
    title: "Synergy Assessment",
    body: "Many nutrients have documented synergistic or antagonistic interactions. Our formulation team models these combinations to maximize efficacy and eliminate interference.",
  },
  {
    step: "05",
    title: "Bioavailability Optimization",
    body: "We select the most bioavailable form of each ingredient: triglyceride omega-3s over ethyl esters, ubiquinol over ubiquinone, methylated B-vitamins over synthetic forms.",
  },
  {
    step: "06",
    title: "Third-Party Validation",
    body: "Final formulas are reviewed by our independent Scientific Advisory Board of academic researchers before production. We invite scrutiny.",
  },
];

export default function SciencePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-nuclora-navy overflow-hidden">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-6">
              Our Research Foundation
            </p>
            <h1
              className="text-5xl md:text-6xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The science
              <br />
              behind every capsule.
            </h1>
            <p className="text-xl font-light text-white/60 leading-relaxed">
              Nuclora formulas begin in the scientific literature and end in
              your cells. Our team reviews hundreds of peer-reviewed studies per
              formula to identify the compounds, doses, and combinations that
              actually work.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { value: "48+", label: "Studies per formula" },
              { value: "6", label: "PhD-level reviewers" },
              { value: "100%", label: "Clinically-dosed ingredients" },
              { value: "0", label: "Proprietary blends" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-4xl font-light text-white mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {s.value}
                </p>
                <p className="text-xs font-light text-white/50 tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="label-sm mb-4">How We Work</p>
            <h2 className="heading-xl">
              Our six-stage
              <br />
              formulation methodology.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((step) => (
              <div key={step.step} className="p-8 border border-nuclora-border">
                <span
                  className="text-4xl font-light text-nuclora-teal/30 block mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.step}
                </span>
                <h3
                  className="text-xl font-light text-nuclora-navy mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="section-pad bg-nuclora-cream">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="label-sm mb-4">Core Research Areas</p>
            <h2 className="heading-xl">
              The biological pathways
              <br />
              we target.
            </h2>
          </div>
          <div className="space-y-8">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-nuclora-border p-8 md:p-10"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl text-nuclora-teal">
                        {area.icon}
                      </span>
                      <h3
                        className="text-2xl font-light text-nuclora-navy"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-sm font-light text-nuclora-muted leading-relaxed mb-6">
                      {area.summary}
                    </p>
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-nuclora-navy mb-3">
                        Key Research Findings
                      </p>
                      <ul className="space-y-2">
                        {area.keyFindings.map((finding, i) => (
                          <li key={i} className="flex gap-3 text-sm">
                            <span className="text-nuclora-teal flex-shrink-0 mt-0.5">
                              →
                            </span>
                            <span className="font-light text-nuclora-muted">
                              {finding}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 bg-nuclora-cream">
                    <p
                      className="text-6xl font-light text-nuclora-navy mb-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {area.studies}
                    </p>
                    <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal text-center">
                      Peer-reviewed studies reviewed
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY BOARD */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-sm mb-6">Independent Oversight</p>
              <h2 className="heading-xl mb-8">
                Scientific Advisory Board.
              </h2>
              <p className="body-lg mb-6">
                Every Nuclora formula is reviewed by our independent Scientific
                Advisory Board — academic researchers with no financial stake
                in our products — before production begins.
              </p>
              <p className="body-lg mb-6">
                Our advisors include longevity researchers, clinical
                pharmacologists, sports medicine physicians, and registered
                dietitians. They are encouraged to challenge, critique, and
                improve every formula.
              </p>
              <p className="body-lg">
                If the board is not satisfied, the formula does not launch. Full
                stop.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  institution: "Buck Institute for Research on Aging",
                  focus: "NAD+ metabolism & cellular senescence",
                },
                {
                  institution: "Stanford University",
                  focus: "Longevity & healthspan optimization",
                },
                {
                  institution: "Karolinska Institutet",
                  focus: "Exercise physiology & performance nutrition",
                },
                {
                  institution: "UCSF",
                  focus: "Clinical pharmacology & bioavailability",
                },
              ].map((inst) => (
                <div
                  key={inst.institution}
                  className="flex items-center gap-6 p-6 border border-nuclora-border"
                >
                  <div className="w-2 h-12 bg-nuclora-teal flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-nuclora-navy">
                      {inst.institution}
                    </p>
                    <p className="text-xs font-light text-nuclora-muted">
                      {inst.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-nuclora-cream">
        <div className="container-tight text-center">
          <h2 className="heading-xl mb-6">
            See the science in the product.
          </h2>
          <p className="body-lg max-w-lg mx-auto mb-10">
            Every Nuclora product page includes a full ingredient breakdown
            with research citations. Explore our formulas.
          </p>
          <Link href="/products" className="btn-teal">
            View All Formulas
          </Link>
        </div>
      </section>
    </>
  );
}
