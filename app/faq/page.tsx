import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Nuclora products, ingredients, quality standards, ordering, and shipping.",
};

const faqCategories = [
  {
    category: "About Our Products",
    questions: [
      {
        q: "How are Nuclora formulas different from other supplements?",
        a: "Most supplements are formulated based on marketing trends, not science. Nuclora starts with the peer-reviewed literature — we identify the compounds, forms, and doses with actual clinical evidence, then manufacture to pharmaceutical standards. Every ingredient is disclosed with its exact dose. We never use proprietary blends.",
      },
      {
        q: "Are your products tested by third parties?",
        a: "Yes. Every production batch is tested at an independent, ISO 17025-accredited laboratory. Our key products carry NSF Certified for Sport® certification, which tests for 270+ banned substances and confirms label accuracy. Certificates of Analysis are available on request.",
      },
      {
        q: "Do your products contain any allergens?",
        a: "Nuclora products are free from gluten, dairy, soy, and artificial additives. Our Omega-3 Ultra Pure contains fish (the source of EPA and DHA). All allergen information is listed on each product page.",
      },
      {
        q: "Are your products vegan?",
        a: "Most Nuclora products are vegan-friendly. Omega-3 Ultra Pure and D3+K2 Protocol contain fish or animal-derived ingredients. These are disclosed clearly on the product pages.",
      },
      {
        q: "What does 'pharmaceutical grade' mean?",
        a: "Pharmaceutical grade means our manufacturing facilities, processes, and testing standards meet or exceed FDA Current Good Manufacturing Practice (cGMP) regulations — the same standards applied to pharmaceutical drug manufacturing. This includes purity verification, contamination screening, and strict batch documentation.",
      },
    ],
  },
  {
    category: "Ingredients & Science",
    questions: [
      {
        q: "Why do you use NMN over NR for NAD+ support?",
        a: "We use both. NMN and NR target different metabolic pathways for NAD+ replenishment, and research suggests they have complementary tissue-level uptake profiles. Our Cellular NAD+ Complex includes both at clinically relevant doses, along with resveratrol to amplify SIRT1 activation.",
      },
      {
        q: "What is the difference between ubiquinol and ubiquinone CoQ10?",
        a: "Ubiquinol is the active, reduced form of CoQ10 — the form your cells actually use. Ubiquinone must be converted to ubiquinol in the body, a conversion that becomes less efficient with age. Nuclora uses Kaneka QH™ ubiquinol because studies show it absorbs at roughly 2.5× the rate of ubiquinone.",
      },
      {
        q: "Why do your products use triglyceride-form omega-3s?",
        a: "Triglyceride-form omega-3s are the natural form found in fish and absorb significantly better than ethyl esters, the cheaper form used in most supplements. Clinical data shows up to 70% better bioavailability. They also do not require food for absorption.",
      },
      {
        q: "How are ingredient doses determined?",
        a: "Every dose in every Nuclora formula is derived from human clinical trials. We identify the dose ranges used in peer-reviewed studies showing positive outcomes, and we dose at or above the lowest effective dose in those studies. We do not under-dose to reduce costs.",
      },
    ],
  },
  {
    category: "Usage & Protocols",
    questions: [
      {
        q: "Can I take multiple Nuclora products together?",
        a: "Yes. Our products are formulated to work well together. Common combinations include NAD+ Complex + Omega-3 Ultra for longevity, or Mitochondrial Activator + Cognitive Clarity for performance. If you have specific health conditions or take medications, consult your physician.",
      },
      {
        q: "How long before I notice results?",
        a: "This varies by product and individual. Some compounds like L-theanine and magnesium have acute effects within hours. Compounds like Lion's Mane, bacopa, and NAD+ precursors build cumulative benefits over 4–12 weeks. We recommend a minimum 90-day protocol for full assessment.",
      },
      {
        q: "Should I take supplements with food?",
        a: "Most Nuclora products should be taken with food. Fat-soluble nutrients (D3, K2, CoQ10, omega-3s) absorb significantly better alongside dietary fat. Each product page includes specific timing recommendations.",
      },
      {
        q: "Are Nuclora products safe for competitive athletes?",
        a: "Our key performance products are NSF Certified for Sport®, which tests for 270+ substances on the WADA banned substance list. Athletes competing in anti-doping regulated sports should use NSF-certified products specifically. Check individual product pages for certification status.",
      },
    ],
  },
  {
    category: "Ordering & Shipping",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day satisfaction guarantee. If you are not satisfied with any Nuclora product for any reason, contact us within 30 days of purchase for a full refund. No questions asked.",
      },
      {
        q: "Do you offer subscription pricing?",
        a: "Yes. Subscribe & Save gives you 15% off every order with automatic monthly delivery. You can pause, modify, or cancel your subscription at any time with no fees or penalties.",
      },
      {
        q: "How fast is shipping?",
        a: "Standard shipping is 3–5 business days. Expedited shipping (1–2 days) is available at checkout. All US orders over $75 ship free.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-nuclora-cream">
        <div className="container-tight">
          <div className="max-w-2xl">
            <p className="label-sm mb-6">Common Questions</p>
            <h1
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Frequently asked questions.
            </h1>
            <p className="text-lg font-light text-nuclora-muted leading-relaxed">
              Transparent answers to the most common questions about Nuclora
              products, science, and quality.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="section-pad bg-white">
        <div className="container-tight max-w-4xl">
          <div className="space-y-16">
            {faqCategories.map((section) => (
              <div key={section.category}>
                <h2
                  className="text-2xl font-light text-nuclora-navy mb-8 pb-4 border-b border-nuclora-border"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item) => (
                    <details
                      key={item.q}
                      className="group border border-nuclora-border"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-nuclora-cream transition-colors">
                        <span className="text-base font-light text-nuclora-navy pr-4">
                          {item.q}
                        </span>
                        <span className="text-nuclora-teal text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-nuclora-navy">
        <div className="container-tight text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-6">
            Still Have Questions?
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our science team is here to help.
          </h2>
          <p className="text-base font-light text-white/60 max-w-lg mx-auto mb-10">
            Questions about specific formulas, ingredient interactions, or
            which protocol is right for your goals? Our team includes
            registered nutritionists and researchers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-nuclora-teal text-white text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-nuclora-navy transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
