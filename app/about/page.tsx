import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nuclora was founded on a single conviction: that the gap between cutting-edge cellular science and the supplements most people take is far too wide. We are closing it.",
};

const values = [
  {
    title: "Uncompromising Quality",
    body: "We source from only GMP-certified suppliers, manufacture in FDA-registered facilities, and test every batch at independent third-party laboratories. Quality is not a marketing claim — it is the foundation of everything we make.",
  },
  {
    title: "Scientific Integrity",
    body: "Our formulas are built from the peer-reviewed literature, not from marketing trends. When the science evolves, so do our formulas. We publish our sources and welcome scrutiny.",
  },
  {
    title: "Radical Transparency",
    body: "Full ingredient disclosure. Every compound, every dose, every source. No proprietary blends designed to obscure under-dosed ingredients. You deserve to know exactly what you are putting into your body.",
  },
  {
    title: "Bioavailability First",
    body: "We use only the most bioavailable forms of each nutrient. Not the cheapest version — the version your cells can actually use. This distinction defines the difference between a supplement that works and one that does not.",
  },
];

const team = [
  {
    name: "Dr. Aisha Nakamura",
    role: "Chief Scientific Officer",
    bio: "Former research lead at the Buck Institute for Research on Aging. PhD in cellular biochemistry, MIT. 18 years studying NAD+ metabolism and longevity pathways.",
  },
  {
    name: "James Okoye",
    role: "Founder & CEO",
    bio: "Former pharmaceutical executive with 15 years in drug development. Founded Nuclora after witnessing the vast gap between pharma-grade science and commercial supplements.",
  },
  {
    name: "Dr. Sofia Reyes",
    role: "Head of Formulation",
    bio: "Pharmacist and nutritional biochemist. Specializes in ingredient bioavailability and nutrient-nutrient interactions. Co-authored 22 peer-reviewed papers.",
  },
  {
    name: "Dr. Henrik Larsen",
    role: "Medical Advisory Board",
    bio: "Professor of sports medicine at Karolinska Institutet. Advisor on performance and recovery applications of advanced nutritional interventions.",
  },
];

const milestones = [
  { year: "2019", event: "Nuclora founded in San Francisco by James Okoye." },
  {
    year: "2020",
    event: "First formula — Cellular NAD+ Complex — launched after 18 months of R&D.",
  },
  { year: "2021", event: "NSF Certified for Sport designation achieved." },
  {
    year: "2022",
    event: "First independent clinical validation study initiated with Stanford researchers.",
  },
  {
    year: "2023",
    event: "Product line expanded to six formulas. Zero compromise on quality standards.",
  },
  {
    year: "2024",
    event: "Launched Nuclora Science Portal — free access to the research behind our formulas.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-24 bg-nuclora-cream">
        <div className="container-tight">
          <div className="max-w-3xl">
            <p className="label-sm mb-6">Our Story</p>
            <h1
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built for the
              <br />
              science-literate.
            </h1>
            <p className="text-xl font-light text-nuclora-muted leading-relaxed">
              Nuclora was founded on a single conviction: the gap between
              cutting-edge cellular science and the supplements most people
              take is far too wide. We are closing it.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider mb-6" />
              <h2 className="heading-xl mb-8">
                Advanced cellular nutrition
                backed by science.
              </h2>
              <p className="body-lg mb-6">
                The modern supplement industry is built on marketing. Most
                products are under-dosed, poorly formulated, and backed by
                cherry-picked studies. Consumers — even highly educated ones —
                struggle to separate signal from noise.
              </p>
              <p className="body-lg mb-6">
                Nuclora was founded to do something different. We started with
                the biology: What do cells actually need? What does the
                evidence say? What forms, doses, and combinations does the
                peer-reviewed literature support?
              </p>
              <p className="body-lg">
                The answer became our product line. Every formula is a direct
                translation of the best available science into the highest
                quality product we know how to make.
              </p>
            </div>
            <div className="bg-nuclora-navy p-12 text-white">
              <p
                className="text-3xl md:text-4xl font-light leading-snug italic"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                &ldquo;We don&apos;t make supplements. We translate science
                into nutrition your cells can actually use.&rdquo;
              </p>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm font-medium text-white">James Okoye</p>
                <p className="text-xs font-light text-white/60">
                  Founder & CEO, Nuclora
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad bg-nuclora-cream">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="label-sm mb-4">What We Stand For</p>
            <h2 className="heading-xl">Our core commitments.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 bg-white border border-nuclora-border">
                <h3
                  className="text-2xl font-light text-nuclora-navy mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="label-sm mb-4">The Team</p>
            <h2 className="heading-xl">
              Science is only as good
              <br />
              as the people behind it.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex gap-6 p-8 border border-nuclora-border"
              >
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-nuclora-cream flex items-center justify-center">
                  <span
                    className="text-2xl font-light text-nuclora-navy"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4
                    className="text-xl font-light text-nuclora-navy mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-xs font-medium tracking-wider uppercase text-nuclora-teal mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm font-light text-nuclora-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section-pad bg-nuclora-navy">
        <div className="container-tight">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-4">
              Timeline
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From idea to industry standard.
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-nuclora-teal/30 ml-6" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 pl-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-nuclora-teal/20 border border-nuclora-teal flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-nuclora-teal">
                        {m.year.slice(2)}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <span className="text-xs font-medium tracking-wider text-nuclora-teal">
                      {m.year}
                    </span>
                    <p className="text-sm font-light text-white/70 mt-1 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-tight text-center">
          <h2 className="heading-xl mb-6">
            Ready to start your protocol?
          </h2>
          <p className="body-lg max-w-lg mx-auto mb-10">
            Explore our formulas, read the science behind each one, and find
            the right fit for your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-teal">
              Shop Products
            </Link>
            <Link href="/science" className="btn-outline">
              Read the Science
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
