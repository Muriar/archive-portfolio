"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BgParticle from "./Background/bgParticle";

interface MenuProps {
  onSectionChange?: (index: number) => void;
}

type StorySectionData = {
  id: number;
  section: string;
  title: string;
  body: string;
  accent: string;
  background: string;
  layout: "centered" | "split" | "stacked";
  images: string[];
  highlight: string;
};

const storySections: StorySectionData[] = [
  {
    id: 1,
    section: "Awal mula",
    title: "Jejak digitalku dimulai dari rasa ingin tahu",
    body:
      "Sebelum menjadi seorang editor, developer, dan pembuat visual, saya tumbuh dari rasa penasaran yang sederhana. Saya belajar karena ingin tahu bagaimana dunia digital bekerja dan mengapa tiap karya bisa terasa hidup.",
    accent: "text-stone-100",
    background: "from-[#060816] via-[#111b34] to-[#2c3152]",
    layout: "centered",
    images: [],
    highlight: "Motion • Editing • Coding"
  },
  {
    id: 2,
    section: "Pendidikan",
    title: "Fondasi akademik memberi arah, rasa ingin tahu memberi gerak",
    body:
      "Di titik ini, pendidikan menjadi fondasi. Saya belajar disiplin, memahami struktur, dan melihat bahwa kreativitas bukan kebalikan dari logika, melainkan sesuatu yang tetap butuh susunan agar berkembang dengan kuat.",
    accent: "text-cyan-200",
    background: "from-[#060816] via-[#111b34] to-[#2c3152]",
    layout: "split",
    images: ["/Photo1.jpeg"],
    highlight: "Belajar • Berproses • Bertumbuh"
  },
  {
    id: 3,
    section: "Jejak digital",
    title: "Saya mengisi ruang digital dengan visual, eksperimen, dan pengalaman",
    body:
      "Dari editing video, motion graphics, desain visual, hingga web dan software, saya terus mencoba menggabungkan banyak bidang. Setiap pelajaran yang saya ambil kemudian saya gunakan untuk membentuk cara saya bercerita lewat karya.",
    accent: "text-fuchsia-200",
    background: "from-[#1a0817] via-[#4b1839] to-[#7a2d56]",
    layout: "stacked",
    images: ["/icarusDraw.jpg", "/Icarus.png"],
    highlight: "Visual • Teknologi • Eksperimen"
  },
  {
    id: 4,
    section: "Dokumentasi",
    title: "Setiap hasil kecil adalah bukti bahwa perjalanan belum selesai",
    body:
      "Saya menyimpan jejak-jejak kecil sebagai pengingat bahwa proses itu penting. Dokumen, karya, dan pengalaman sehari-hari menjadi bagian dari narasi yang terus berkembang hingga hari ini.",
    accent: "text-amber-200",
    background: "from-[#1f1210] via-[#522d1a] to-[#8f4f2b]",
    layout: "split",
    images: ["/Photo1.jpeg"],
    highlight: "Jejak • Bukti • Proses"
  }
];

function StorySection({ section, index, onClick }: { section: StorySectionData; index: number; onClick: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.2, 1, 0.15]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 1.01]);
  const blur = useTransform(scrollYProgress, [0, 0.45, 1], [28, 0, 24]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [32, 0, 20]);

  // Cek apakah section ini memiliki gambar atau tidak
  const hasImages = section.images && section.images.length > 0;

  // Jika ada gambar -> Layout Grid kiri-kanan (seperti sebelumnya)
  // Jika TIDAK ada gambar -> Layout flex-col di tengah layar
  const layoutClass = hasImages 
    ? "grid items-center gap-4 sm:gap-8 lg:gap-16 grid-cols-[1.2fr_0.8fr] sm:grid-cols-[1fr_1fr] text-left" 
    : "flex flex-col items-center justify-center text-center max-w-3xl mx-auto";

  return (
    <motion.section
      ref={sectionRef}
      onClick={onClick}
      data-index={index}
      className="relative flex h-full w-full snap-start items-center justify-center overflow-hidden px-4 py-16 text-stone-100 lg:px-8"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-t from-transparent via-[#1a1a1a] to-[#05070b] ${section.background}`}
        style={{ 
          opacity: backgroundOpacity, 
          scale: backgroundScale, 
          filter: `blur(${blur}px)` 
        }}
      />
      
      <BgParticle />
      
      <motion.div className={`relative z-10 w-full max-w-6xl ${layoutClass}`} style={{ y }}>
        
        {/* BAGIAN TEKS */}
        <div className={`space-y-3 sm:space-y-5 ${!hasImages ? "flex flex-col items-center mx-auto" : ""}`}>
          <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.45em] text-stone-400">
            {section.section}
          </p>
          <h2 className={`text-lg sm:text-[clamp(2rem,5.6vw,3.4rem)] font-semibold leading-tight tracking-[-0.04em] ${section.accent}`}>
            {section.title}
          </h2>
          <p className={`text-[11px] leading-5 text-stone-300 sm:text-base sm:leading-7 ${!hasImages ? "max-w-2xl" : ""}`}>
            {section.body}
          </p>
          <p className="text-[8px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-stone-400/80 mt-2">
            {section.highlight}
          </p>
        </div>

        {/* BAGIAN GAMBAR (Hanya di-render jika array gambar tidak kosong) */}
        {hasImages && (
          <div className="flex flex-col gap-3">
            {section.images.map((image, imageIndex) => (
              <div
                key={`${section.id}-${imageIndex}`}
                className="relative aspect-[3/4] sm:aspect-[4/3] w-full overflow-hidden rounded-lg sm:rounded-xl bg-stone-900/70 shadow-2xl"
              >
                <Image 
                  src={image} 
                  alt={`${section.title} visual ${imageIndex + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-500 hover:scale-105" 
                  unoptimized 
                />
              </div>
            ))}
          </div>
        )}
        
      </motion.div>
    </motion.section>
  );
}

export default function JejakPage({ onSectionChange }: MenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            onSectionChange?.(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [onSectionChange]);

  const scrollToNext = (index: number) => {
    if (index < storySections.length - 1 && containerRef.current) {
      const nextSection = containerRef.current.children[index + 1] as HTMLElement | undefined;
      nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 h-screen w-full overflow-y-auto scroll-smooth snap-y snap-mandatory bg-[#05070b]"
    >
      {storySections.map((section, index) => (
        <StorySection
          key={section.id}
          section={section}
          index={index}
          onClick={() => scrollToNext(index)}
        />
      ))}
    </div>
  );
}
