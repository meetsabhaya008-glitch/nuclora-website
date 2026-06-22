import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "All Products", href: "/products" },
    { label: "Cellular Health", href: "/products#cellular" },
    { label: "Longevity", href: "/products#longevity" },
    { label: "Performance", href: "/products#performance" },
    { label: "Recovery", href: "/products#recovery" },
  ],
  Science: [
    { label: "Our Research", href: "/science" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Quality & Testing", href: "/quality" },
    { label: "Clinical Studies", href: "/science#studies" },
  ],
  Company: [
    { label: "About Nuclora", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-nuclora-navy text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-2">
              Stay Informed
            </p>
            <h3
              className="text-3xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Science delivered to your inbox.
            </h3>
          </div>
          <form className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-light focus:outline-none focus:border-nuclora-teal transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-nuclora-teal text-white text-xs font-medium tracking-widest uppercase hover:bg-nuclora-gold transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/nuclora logo.png"
                alt="Nuclora"
                width={140}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm font-light text-white/60 leading-relaxed max-w-xs mb-8">
              Advanced cellular nutrition backed by science. Formulated for
              those who demand the highest standards of quality, purity, and
              efficacy.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "GMP Certified",
                "Third-Party Tested",
                "NSF Certified",
                "Non-GMO",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 border border-white/20 text-white/60 text-xs font-light tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-medium tracking-widest uppercase text-nuclora-teal mb-5">
                {section}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-white/40">
            © {new Date().getFullYear()} Nuclora. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
