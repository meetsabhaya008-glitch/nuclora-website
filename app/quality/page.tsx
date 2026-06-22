import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quality & Testing",
  description:
    "Every Nuclora batch is manufactured in GMP-certified, FDA-registered facilities and tested by independent third-party laboratories. Our quality process leaves nothing to chance.",
};

const certifications = [
  {
    name: "NSF Certified for Sport®",
    body: "NSF International",
    description:
      "The gold standard for supplement testing. NSF tests for 270+ substances banned in competitive sports, contaminants, and label accuracy. Less than 3% of supplements earn this certification.",
    icon: "◎",
  },
  {
    name: "GMP Certified",
    body: "FDA Current Good Manufacturing Practice",
    description:
      "All Nuclora products are manufactured in FDA-registered, cGMP-compliant facilities. This ensures consistent quality, purity, and potency in every production run.",
    icon: "⬡",
  },
  {
    name: "USP Verified",
    body: "United States Pharmacopeia",
    description:
      "USP verification confirms that supplements contain the ingredients listed on the label at the stated potency, and are free of harmful contaminants.",
    icon: "◈",
  },
  {
    name: "Non-GMO Project Verified",
    body: "Non-GMO Project",
    description:
      "All Nuclora formulas are verified to contain no genetically modified organisms. Our supply chain is regularly audited for GMO compliance.",
    icon: "◉",
  },
];

const testingProcess = [
  {
    phase: "Raw Material Testing",
    description:
      "Every incoming ingredient is tested before entering our facility. We verify identity (HPLC, IR spectroscopy), purity (>99% for active compounds), and screen for heavy metals, pesticides, and microbial contamination.",
    tests: ["Identity verification", "Heavy metals", "Pesticide residues", "Microbial limits"],
  },
  {
    phase: "In-Process Testing",
    description:
      "Quality checks occur at multiple stages during manufacturing — blending uniformity, capsule fill weight, dissolution testing — to ensure consistency throughout each production batch.",
    tests: ["Blend uniformity", "Fill weight accuracy", "Dissolution rate", "Moisture content"],
  },
  {
    phase: "Finished Product Testing",
    description:
      "Every finished batch undergoes comprehensive testing at our in-house QC lab before being sent to an independent third-party laboratory for verification.",
    tests: ["Label claim potency", "Contaminant screening", "Stability", "Disintegration"],
  },
  {
    phase: "Third-Party Verification",
    description:
      "An independent, accredited laboratory (ISO 17025 certified) confirms all in-house testing results. No batch ships without independent confirmation of potency and purity.",
    tests: ["Independent potency confirmation", "NSF contaminant panel", "Certificate of Analysis", "Lot traceability"],
  },
];

const standards = [
  {
    metric: "Ingredient Purity",
    nuclora: "≥99.7%",
    industry: "Variable, often undisclosed",
    better: true,
  },
  {
    metric: "Testing Panels per Batch",
    nuclora: "12+",
    industry: "2–3 (or none)",
    better: true,
  },
  {
    metric: "Third-Party Testing",
    nuclora: "Every batch",
    industry: "Occasional (or marketing claim only)",
    better: true,
  },
  {
    metric: "Label Accuracy (potency)",
    nuclora: "±5% tolerance",
    industry: "±20–30% common",
    better: true,
  },
  {
    metric: "Proprietary Blends",
    nuclora: "None — full disclosure",
    industry: "Common",
    better: true,
  },
  {
    metric: "Heavy Metal Testing",
    nuclora: "Every batch, all metals",
    industry: "Rarely required",
    better: true,
  },
];

export default function QualityPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-nuclora-navy">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-6">
              Quality & Testing
            </p>
            <h1
              className="text-5xl md:text-6xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Tested to a standard
              <br />
              the industry avoids.
            </h1>
            <p className="text-xl font-light text-white/60 leading-relaxed">
              Most supplements are not tested for what they claim to contain.
              Nuclora tests every batch at every stage — from raw material to
              finished product — by independent, accredited laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="label-sm mb-4">Our Certifications</p>
            <h2 className="heading-xl">
              Verified by the industry&apos;s
              <br />
              most demanding standards.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-8 border border-nuclora-border hover:border-nuclora-teal transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl text-nuclora-teal flex-shrink-0">
                    {cert.icon}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-light text-nuclora-navy mb-1"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-xs font-medium tracking-wider uppercase text-nuclora-teal">
                      {cert.body}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTING PROCESS */}
      <section className="section-pad bg-nuclora-cream">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="label-sm mb-4">Our Process</p>
            <h2 className="heading-xl">
              Four stages.
              <br />
              Zero shortcuts.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testingProcess.map((phase, i) => (
              <div key={phase.phase} className="bg-white p-8 border border-nuclora-border">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-4xl font-light text-nuclora-teal/40"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="text-xl font-light text-nuclora-navy"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {phase.phase}
                  </h3>
                </div>
                <p className="text-sm font-light text-nuclora-muted leading-relaxed mb-6">
                  {phase.description}
                </p>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-nuclora-navy mb-3">
                    Tests Performed
                  </p>
                  <ul className="space-y-1.5">
                    {phase.tests.map((test) => (
                      <li key={test} className="flex items-center gap-2 text-xs">
                        <svg
                          className="w-3.5 h-3.5 text-nuclora-teal flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-light text-nuclora-muted">
                          {test}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="label-sm mb-4">Industry Comparison</p>
            <h2 className="heading-xl">
              How Nuclora compares
              <br />
              to industry standards.
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-nuclora-border">
                  <th className="text-left py-4 pr-8 text-xs font-medium tracking-widest uppercase text-nuclora-muted">
                    Standard
                  </th>
                  <th className="text-center py-4 px-4 text-xs font-medium tracking-widest uppercase text-nuclora-navy">
                    Nuclora
                  </th>
                  <th className="text-center py-4 px-4 text-xs font-medium tracking-widest uppercase text-nuclora-muted">
                    Industry Average
                  </th>
                </tr>
              </thead>
              <tbody>
                {standards.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={`border-b border-nuclora-border ${i % 2 === 0 ? "bg-nuclora-cream/30" : ""}`}
                  >
                    <td className="py-5 pr-8 font-medium text-nuclora-navy">
                      {row.metric}
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-nuclora-teal font-medium">
                        <svg
                          className="w-4 h-4 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {row.nuclora}
                      </span>
                    </td>
                    <td className="py-5 px-4 text-center text-nuclora-muted font-light">
                      {row.industry}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-24 bg-nuclora-navy">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-6">
                Full Transparency
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Certificate of Analysis.
                <br />
                Every batch.
              </h2>
              <p className="text-base font-light text-white/60 leading-relaxed mb-6">
                Every Nuclora production batch has a Certificate of Analysis
                (CoA) from our independent third-party laboratory. These are
                available on request for any product you purchase.
              </p>
              <p className="text-base font-light text-white/60 leading-relaxed mb-10">
                The CoA confirms the batch lot number, testing date, compound
                identity, measured potency versus label claim, and results of
                all contaminant screenings. If you cannot verify it, it
                should not go into your body.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-nuclora-teal text-nuclora-teal text-xs font-medium tracking-widest uppercase hover:bg-nuclora-teal hover:text-white transition-all duration-300"
              >
                Request a CoA
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { label: "Lot Number", value: "NCL-2024-0847" },
                { label: "Testing Laboratory", value: "NSF International, ISO 17025" },
                { label: "Test Date", value: "Independent verification" },
                { label: "Potency Result", value: "99.8% of label claim" },
                { label: "Heavy Metals", value: "All below detection limits" },
                { label: "Microbial", value: "Passes USP <2021> standards" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between p-4 border border-white/10"
                >
                  <span className="text-xs font-light text-white/50">{row.label}</span>
                  <span className="text-xs font-medium text-nuclora-teal">{row.value}</span>
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
            Confidence in every capsule.
          </h2>
          <p className="body-lg max-w-lg mx-auto mb-10">
            Explore our full product line — all formulas manufactured to the
            same uncompromising quality standard.
          </p>
          <Link href="/products" className="btn-teal">
            Shop All Formulas
          </Link>
        </div>
      </section>
    </>
  );
}
