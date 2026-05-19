"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#agenda", label: "Agenda" },
  { href: "#simposium", label: "Simposium" },
  { href: "#daftar", label: "Daftar" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[200] border-b border-white/40"
        style={{
          background: "rgba(250, 243, 231, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="#" className="flex min-w-0 items-center gap-2.5">
            <span className="logo-iai-wrap flex h-[30px] w-[30px] shrink-0 items-center justify-center overflow-hidden">
              <Image
                src="/logo-iai.png"
                alt="IAI"
                width={30}
                height={30}
                className="logo-iai-blend h-[30px] w-[30px] object-contain"
                priority
              />
            </span>
            <span className="truncate text-sm font-semibold text-navy sm:text-base">
              PIE YO 2026
            </span>
            <span className="hidden shrink-0 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-navy sm:inline">
              PD IAI DIY
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-navy/80 transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="#daftar" className="btn-primary hidden px-4 py-2 text-xs sm:inline-flex sm:text-sm">
              Daftar →
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white/40 md:hidden"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[190] md:hidden" style={{ top: "56px" }}>
          <button
            type="button"
            className="absolute inset-0 bg-navy/20 backdrop-blur-sm"
            aria-label="Tutup menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="relative mx-4 mt-2 glass-card glass-card-lg p-4" aria-label="Menu mobile">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] items-center rounded-xl px-4 text-sm font-medium text-navy hover:bg-white/40"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#daftar"
                  className="btn-primary w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Daftar →
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
