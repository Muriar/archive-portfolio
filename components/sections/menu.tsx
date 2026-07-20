"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useRef } from "react";
import BgParticle from "./bgParticle";
import React from "react";

interface menuProps {
  onSectionChange?: (index: number) => (void);
}

// ==========================================
// 1. AREA KUSTOMISASI KONTEN SETIAP SESI
// ==========================================

function SectionSatu() {
  return (
    <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl font-semibold text-stone-50">
      Hello, Welcome To My Website
    </motion.h1>
  );
}

function SectionDua() {
  return (
    <motion.div variants={fadeUp} className="space-y-4">
      <h2 className="text-3xl font-semibold text-stone-50">Session ini akan berisi tentang foto foto</h2>
      {/* TAMPILKAN ELEMEN FOTO ANDA DI SINI */}
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-6">
        <div className="h-24 bg-neutral-800 rounded animate-pulse" />
        <div className="h-24 bg-neutral-800 rounded animate-pulse" />
        <div className="h-24 bg-neutral-800 rounded animate-pulse" />
      </div>
    </motion.div>
  );
}

function SectionTiga() {
  return (
    <motion.div variants={fadeUp}>
      <h2 className="text-3xl font-semibold text-stone-50">Session ini berisi background</h2>
      {/* TAMPILKAN ELEMEN DEMO BACKGROUND DI SINI */}
    </motion.div>
  );
}

function SectionEmpat() {
  return (
    <motion.div variants={fadeUp} className="space-y-4">
      <h2 className="text-3xl font-semibold text-stone-50">Berisi tentang playground yang bisa dimainkan</h2>
      {/* TAMPILKAN ELEMEN INTERAKTIF / GAME DI SINI */}
      <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition">
        Coba Playground
      </button>
    </motion.div>
  );
}

// ==========================================
// 2. KOMPONEN UTAMA (STRUKTUR HALAMAN)
// ==========================================

const Intro = [
  { id: 1, component: <SectionSatu /> },
  { id: 2, component: <SectionDua /> },
  { id: 3, component: <SectionTiga /> },
  { id: 4, component: <SectionEmpat /> },
];

export default function MenuPage({ onSectionChange }: menuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- TAMBAHKAN EFFECT INI ---
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ambil indeks section dari atribut HTML 'data-index'
            const idx = Number(entry.target.getAttribute("data-index"));
            if (onSectionChange) {
              onSectionChange(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // Section dianggap aktif jika 60% areanya terlihat di layar
      }
    );

    // Daftarkan semua anak section untuk dipantau
    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [onSectionChange]);
  const scrollToNext = (index: number) => {
    if (index < Intro.length - 1 && containerRef.current) {
      const nextSession = containerRef.current.children[index + 1];
      nextSession.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative z-10 h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory bg-[#0F0E0E]"
    >
      {Intro.map((section, index) => (
        <section
          key={section.id}
          onClick={() => scrollToNext(index)}
          data-index={index}
          /* 1. Harus 'relative' dan 'overflow-hidden' agar partikel mengunci di dalam section ini saja */
          className="relative h-screen w-full flex items-center justify-center snap-start cursor-pointer select-none px-6 overflow-hidden"
        >
          {/* 2. Selipkan BgParticle di sini. Dia akan otomatis berada di latar belakang section ini */}
          <BgParticle />

          {/* 3. Berikan z-10 pada teks agar teks berada di atas partikel secara mutlak */}
          <motion.div
            className="text-center w-full max-w-4xl relative z-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Merender komponen kustom sesuai sesinya */}
            {section.component}
            
            {/* Petunjuk navigasi kecil di bawah */}
            {index < Intro.length - 1 && (
              <motion.p 
                variants={fadeUp}
                className="text-xs text-neutral-500 tracking-widest mt-12 uppercase pointer-events-none"
              >
                Klik atau Scroll untuk Lanjut
              </motion.p>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  );
}