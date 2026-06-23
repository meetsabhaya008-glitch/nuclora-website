"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function ProductsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".aos").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const formulas = [
    { name: "Cellular NAD+ Complex", tagline: "Cellular Energy & Longevity" },
    { name: "Omega-3 Ultra", tagline: "Cardiovascular & Cognitive Health" },
    { name: "Mitochondrial Activator", tagline: "Energy, Endurance & Recovery" },
    { name: "Sleep & Recovery Complex", tagline: "Deep Sleep & Cellular Repair" },
    { name: "Cognitive Clarity", tagline: "Focus, Memory & Mental Performance" },
    { name: "Vitamin D3 + K2", tagline: "Immune, Bone & Cardiovascular Support" },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-nuclora-navy flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <div>
              <p className="label-gold mb-6 aos">The Collection</p>
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-light leading-none text-white mb-8 aos aos-delay-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Coming
                <br />
                <span className="italic text-nuclora-gold">Soon.</span>
              </h1>
              <p className="text-lg font-light text-white/60 leading-relaxed max-w-md mb-10 aos aos-delay-2">
                Six precision formulas. Clinically informed. Uncompromisingly pure.
                Crafted for those who invest in their health for the long term.
              </p>

              {/* Email signup */}
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md aos aos-delay-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email for early access"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-light rounded-full focus:outline-none focus:border-nuclora-gold transition-colors"
                />
                <button type="submit" className="btn-gold whitespace-nowrap">
                  Notify Me
                </button>
              </form>
              <p className="text-xs text-white/30 mt-4 aos aos-delay-4">
                Early access members receive an exclusive launch discount.
              </p>
            </div>

            {/* Right — bottle */}
            <div className="relative flex items-center justify-center aos aos-delay-2">
              <div className="absolute w-80 h-80 rounded-full border border-nuclora-gold/10" />
              <div className="absolute w-56 h-56 rounded-full border border-nuclora-gold/15" />
              <div
                className="relative w-72 h-[420px] rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div className="relative w-52 h-[360px]">
                  <Image
                    src="/nmn-bottle.png"
                    alt="Nuclora — Coming Soon"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULA LIST ── */}
      <section className="bg-nuclora-ivory py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 aos">
            <p className="label-gold mb-3">What&apos;s Coming</p>
            <h2
              className="heading-display"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Six formulas. One system.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-nuclora-border">
            {formulas.map((formula, i) => (
              <div
                key={formula.name}
                className={`aos aos-delay-${(i % 3) + 1} bg-nuclora-ivory p-10 group`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-4xl font-light text-nuclora-gold/30 leading-none mt-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-light text-nuclora-navy mb-2"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {formula.name}
                    </h3>
                    <p className="text-xs font-medium tracking-widest uppercase text-nuclora-muted">
                      {formula.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-nuclora-gold/10 rounded-full text-xs font-medium tracking-widest uppercase text-nuclora-gold">
                      <span className="w-1.5 h-1.5 rounded-full bg-nuclora-gold animate-pulse" />
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-nuclora-navy py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="label-gold mb-5 aos">Be First</p>
          <h2
            className="text-5xl font-light text-white leading-tight mb-6 aos aos-delay-1"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The future of health
            <br />
            <span className="italic">begins at the cellular level.</span>
          </h2>
          <p className="text-base font-light text-white/50 mb-10 aos aos-delay-2">
            Join the Nuclora early access list. Be the first to know when we launch
            and receive an exclusive founding member discount.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto aos aos-delay-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-light rounded-full focus:outline-none focus:border-nuclora-gold transition-colors"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              Get Early Access
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
