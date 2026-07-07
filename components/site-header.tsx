"use client";

import { useState } from "react";

const navItems = [
  {
    href: "/Profil",
    label: "Profil",
    description: "SIAPAKAH AKU?",
    color: "border-blue-500/30 bg-gradient-to-b from-blue-950/20 to-neutral-950/90 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]",
    darkColor: "dark:hover:border-neutral-400 dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]",
  },
  {
    href: "/skills",
    label: "Skills",
    description: "SOFTWARE APA YG AKU KUASAI?",
    color: "border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-neutral-950/90 text-emerald-400 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]",
  },
  {
    href: "/timeline",
    label: "Jejak Digital",
    description: "KAPAN PERTAMA KALI AKU MEMULAI?",
    color: "border-purple-500/30 bg-gradient-to-b from-purple-950/20 to-neutral-950/90 text-purple-400 shadow-[inset_0_0_20px_rgba(168,85,247,0.15)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]",
  },
  {
    href: "/Karya",
    label: "Karya",
    description: "KUMPULAN KARYA BUATANKU >~<",
    color: "border-orange-500/30 bg-gradient-to-b from-orange-950/20 to-neutral-950/90 text-orange-400 shadow-[inset_0_0_20px_rgba(249,115,22,0.15)]",
    darkColor: "dark:hover:border-orange-400 dark:hover:shadow-[0_0_50px_rgba(249,115,22,0.08)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(249,115,22,0.18)]",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "FOLLOW IG GW DONG :)",
    color: "border-white/30 bg-gradient-to-b from-white/20 to-neutral-950/90 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15)]",
    darkColor: "dark:hover:border-white dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(255,255,255,0.18)]",
  },
  {
    href: "/info",
    label: "Info",
    description: "TENTANG WEBSITE INI!",
    color: "border-red-400/30 bg-gradient-to-b from-red-950/20 to-neutral-950/90 text-red-400 shadow-[inset_0_0_20px_rgba(239,68,68,0.15)]",
    darkColor: "dark:hover:border-red-400 dark:hover:shadow-[0_0_50px_rgba(239,68,68,0.08)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(239,68,68,0.18)]",
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Transparan penuh tanpa bar hitam padat horizontal
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      {/* pt-4 memberikan jarak gantung tombol dari bagian paling atas layar */}
      <nav className="relative mx-auto flex flex-col md:flex-row md:h-16 max-w-6xl items-center px-5 pt-4 md:pt-0 sm:px-6 lg:px-8">
        
        {/* Desktop Navigation */}
        <div className="hidden w-full md:flex">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
            {/* 🛠️ Ditambahkan efek backdrop-blur-md pada bingkai Home Desktop */}
            <a
              href="/"
              className="rounded-xl border border-neutral-700 bg-neutral-900/40 backdrop-blur-md px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-100 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-neutral-400 hover:text-white hover:shadow-[0_0_35px_rgba(255,255,255,0.16)]"
            >
              Home
            </a>
            {navItems.slice(0, 5).map((item) => (
              // 🛠️ Ditambahkan efek backdrop-blur-md pada setiap bingkai item navigasi desktop
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl border-2 ${item.color} bg-neutral-900/40 backdrop-blur-md px-4 py-2 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:opacity-90 ${item.hoverGlow}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Preview Layer */}
        <div className="relative flex w-full items-center justify-center md:hidden">
          
          {/* 🛠️ FITUR BARU: Tombol Home di versi HP sekarang dibungkus bingkai kotak dengan efek backdrop-blur */}
          <a 
            href="/" 
            className="absolute left-0 rounded-xl border border-neutral-700 bg-neutral-900/40 backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-200 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-neutral-400 hover:text-white hover:shadow-[0_0_35px_rgba(255,255,255,0.16)] shadow-md"
          >
            Home
          </a>
          
          {/* Tombol Hamburger Menu Lingkaran (Tetap di Tengah Atas Konten) */}
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/40 text-neutral-200 transition hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:text-white shadow-lg backdrop-blur-md"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Grid Pop-Up */}
        {menuOpen && (
          // 🛠️ Lapisan luar pop-up menu diubah menggunakan bg-neutral-950/40 dan backdrop-blur-xl agar transparan penuh
          <div className="absolute inset-x-0 top-full z-40 mx-4 mt-4 bg-neutral-950/40 pb-6 pt-4 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="grid grid-cols-2 gap-3 px-5">
              {navItems.map((item) => (
                // 🛠️ Bagian dalam kotak pilihan menu HP disesuaikan menggunakan efek kaca backdrop-blur-md
                <a
                  key={item.href}
                  href={item.href}
                  className={`border-2 ${item.color} bg-neutral-900/40 backdrop-blur-md rounded-xl px-4 py-6 text-center transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:opacity-90 ${item.hoverGlow}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="text-xs text-neutral-400 mt-2">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
