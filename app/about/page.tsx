"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".aos").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-nuclora-ivory min-h-[60vh] flex items-end pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <p className="label-gold mb-6 aos">About Nuclora</p>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-nuclora-navy max-w-5xl aos aos-delay-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Redefining the future of health through{" "}
            <span className="italic">cellular science.</span>
          </h1>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <section className="bg-nuclora-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="aos">
              <div className="w-10 h-px bg-nuclora-gold mb-8" />
              <p className="text-xl md:text-2xl font-light text-nuclora-charcoal leading-relaxed">
                Nuclora was created with a vision to bridge the gap between
                scientific innovation and everyday wellbeing. We believe that true
                health begins at the cellular level — and that the future of wellness
                lies in understanding the biological systems that shape how we age,
                recover, and thrive.
              </p>
            </div>
            <div className="aos aos-delay-2">
              <p className="body-lg">
                Our mission is to develop science-driven products and educational
                resources that empower individuals to take a proactive approach to
                their long-term health. Every formula is a direct result of rigorous
                research, premium sourcing, and an uncompromising commitment to
                transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CELLULAR VISUALIZATION ───────────────────────── */}
      <section className="bg-nuclora-navy py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visualization */}
            <div className="flex justify-center aos">
              <div className="relative w-80 h-80">
                {[0, 20, 40, 60, 80, 100].map((size, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border"
                    style={{
                      inset: `${size / 2}px`,
                      borderColor: `rgba(184, 144, 106, ${0.15 - i * 0.02})`,
                    }}
                  />
                ))}
                {/* Dots */}
                {[
                  { top: "5%", left: "50%", s: 6 },
                  { top: "20%", left: "88%", s: 4 },
                  { top: "50%", left: "95%", s: 5 },
                  { top: "80%", left: "85%", s: 4 },
                  { top: "95%", left: "50%", s: 5 },
                  { top: "80%", left: "15%", s: 4 },
                  { top: "50%", left: "5%", s: 6 },
                  { top: "20%", left: "12%", s: 4 },
                ].map((d, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-nuclora-gold"
                    style={{
                      top: d.top,
                      left: d.left,
                      width: d.s,
                      height: d.s,
                      opacity: 0.5,
                    }}
                  />
                ))}
                <div className="absolute inset-28 rounded-full bg-nuclora-gold/5 border border-nuclora-gold/20 flex items-center justify-center">
                  <span
                    className="text-4xl font-light text-nuclora-gold/40"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    N
                  </span>
                </div>
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="aos aos-delay-2">
              <p className="label-gold mb-5">Our Philosophy</p>
              <h2
                className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Longevity is not simply about adding years to life.
              </h2>
              <p className="text-base font-light text-white/60 leading-relaxed mb-6">
                It is about improving the quality of those years. Through scientific
                research, premium ingredients, and a commitment to excellence, we
                focus on supporting the biological foundations of vitality,
                resilience, and healthy aging.
              </p>
              <p className="text-base font-light text-white/60 leading-relaxed">
                We believe that health is one of life&apos;s greatest investments —
                and that every decision we make today influences how we live
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ─────────────────────────────────── */}
      <section className="bg-nuclora-ivory py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center aos">
            <p className="label-gold mb-5">Why We Exist</p>
            <h2
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A different standard for a different era of health.
            </h2>
            <p className="body-lg max-w-2xl mx-auto mb-6">
              Modern wellness is filled with trends, shortcuts, and conflicting
              information. Nuclora was founded to create a different standard — one
              built on scientific thinking, integrity, quality, and long-term health
              optimisation.
            </p>
            <p className="body-base max-w-xl mx-auto text-nuclora-charcoal">
              Our goal is not to follow trends. Our goal is to help shape the future
              of health.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="bg-nuclora-navy py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-px bg-white/10">
            {[
              {
                num: "01",
                title: "Scientific Integrity",
                body: "Every formulation is grounded in peer-reviewed research and clinical evidence.",
              },
              {
                num: "02",
                title: "Uncompromising Quality",
                body: "Premium ingredients, third-party tested, with full transparency on every label.",
              },
              {
                num: "03",
                title: "Long-Term Thinking",
                body: "We optimise for decades, not days. Health is a lifelong investment.",
              },
            ].map((v, i) => (
              <div
                key={v.num}
                className={`aos aos-delay-${i + 1} bg-nuclora-navy p-12`}
              >
                <div
                  className="text-7xl font-light leading-none mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "rgba(184,144,106,0.2)",
                  }}
                >
                  {v.num}
                </div>
                <div className="w-8 h-px bg-nuclora-gold/50 mb-6" />
                <h3
                  className="text-2xl font-light text-white mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm font-light text-white/50 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────── */}
      <section className="bg-nuclora-ivory py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Portrait placeholder */}
            <div className="aos">
              <div
                className="w-full aspect-[4/5] rounded-3xl flex items-end relative overflow-hidden"
                style={{ backgroundColor: "#EDE8DF" }}
              >
                {/* Cellular pattern overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 opacity-30">
                    {[0, 24, 48, 72].map((inset) => (
                      <div
                        key={inset}
                        className="absolute rounded-full border border-nuclora-gold"
                        style={{ inset }}
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-nuclora-gold"
                        style={{
                          top: `${50 - 46 * Math.cos((i * Math.PI) / 4)}%`,
                          left: `${50 + 46 * Math.sin((i * Math.PI) / 4)}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[180px] font-light text-nuclora-navy/10 select-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    S
                  </span>
                </div>
                {/* Caption */}
                <div className="relative p-8">
                  <p
                    className="text-2xl font-light text-nuclora-navy"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Meet Sabhaya
                  </p>
                  <p className="text-xs font-medium tracking-widest uppercase text-nuclora-gold mt-1">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="aos aos-delay-2">
              <p className="label-gold mb-5">The Founder</p>
              <h2
                className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Meet Sabhaya
              </h2>

              <div className="space-y-6">
                <p className="body-base text-nuclora-charcoal text-base leading-relaxed">
                  My fascination with health began with a simple question: why do
                  some individuals maintain exceptional vitality throughout life while
                  others experience a steady decline — despite living in the same
                  modern world?
                </p>
                <p className="body-base text-nuclora-charcoal text-base leading-relaxed">
                  That question led me into the fields of nutrition, longevity
                  science, human biology, and health optimisation. Nuclora was
                  founded from a belief that health should be approached proactively
                  rather than reactively.
                </p>
                <p className="body-base text-nuclora-charcoal text-base leading-relaxed">
                  My vision is to build more than a supplement company. I want
                  Nuclora to become a globally respected platform for longevity,
                  scientific integrity, and human optimisation.
                </p>
              </div>

              {/* Pull quote */}
              <div className="mt-10 pl-6 border-l-2 border-nuclora-gold">
                <p
                  className="text-2xl font-light text-nuclora-navy italic leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  &ldquo;The future of health begins at the cellular level.&rdquo;
                </p>
                <p className="text-xs font-medium tracking-widest uppercase text-nuclora-muted mt-4">
                  — Meet Sabhaya, Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VISION ───────────────────────────────────── */}
      <section className="bg-nuclora-cream py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl aos">
            <p className="label-gold mb-5">Our Vision</p>
            <h2
              className="text-5xl md:text-6xl font-light text-nuclora-navy leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Investing in the most valuable asset you will ever own.
            </h2>
            <p className="body-lg mb-6">
              We believe the next generation of health will be driven by a deeper
              understanding of the human body. As science continues to evolve,
              Nuclora will remain committed to exploring new frontiers in longevity,
              nutrition, and cellular health.
            </p>
            <p className="body-base text-nuclora-charcoal">
              Our mission is simple: to help people invest in the most valuable asset
              they will ever own — their health.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Science",
                body: "Every formula grounded in clinical research",
              },
              {
                title: "Purity",
                body: "Third-party tested, transparent ingredients",
              },
              {
                title: "Longevity",
                body: "Optimised for decades of cellular health",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className={`aos aos-delay-${i + 1} text-center py-12 px-8 rounded-2xl bg-white border border-nuclora-border`}
              >
                <h3
                  className="text-4xl font-light text-nuclora-navy mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {pillar.title}
                </h3>
                <div className="w-8 h-px bg-nuclora-gold mx-auto mb-4" />
                <p className="text-sm font-light text-nuclora-muted">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-nuclora-navy py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="label-gold mb-5 aos">Begin Your Journey</p>
          <h2
            className="text-5xl md:text-6xl font-light text-white leading-tight mb-6 aos aos-delay-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Your cellular health
            <br />
            <span className="italic">starts today.</span>
          </h2>
          <p className="text-base font-light text-white/60 leading-relaxed mb-10 max-w-md mx-auto aos aos-delay-2">
            Explore the Nuclora collection and begin investing in the most valuable
            asset you will ever own.
          </p>
          <div className="flex flex-wrap gap-4 justify-center aos aos-delay-3">
            <Link href="/products" className="btn-gold">
              Explore the Collection
            </Link>
            <Link href="/science" className="btn-outline-white">
              The Science
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
