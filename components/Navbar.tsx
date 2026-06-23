"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Shop", href: "/products" },
  { label: "Science", href: "/science" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nuclora-ivory/95 backdrop-blur-md border-b border-nuclora-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-20">
        {/* Logo — removed mt offset, using self-center for true vertical centering */}
        <Link href="/" className="flex-shrink-0 flex items-center self-center">
          <Image
            src="/nuclora logo.png"
            alt="Nuclora"
            width={180}
            height={60}
            className="w-auto object-contain"
            style={{
              mixBlendMode: "multiply",
              height: "52px",
            }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-nuclora-navy hover:text-nuclora-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/products" className="btn-primary">
            Pre-Order Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-nuclora-navy transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-nuclora-navy transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-nuclora-navy transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-nuclora-ivory border-t border-nuclora-border transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-nuclora-navy hover:text-nuclora-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="btn-primary text-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Pre-Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
