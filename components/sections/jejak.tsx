"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface MenuProps {
  onSectionChange?: (index: number) => void;
}

type StorySectionData = {
  id: number;
  eyebrow: string;
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
    eyebrow: "Awal mula",
    title: "Jejak digitalku dimulai dari rasa ingin tahu",
    body:
      "Sebelum menjadi seorang editor, developer, dan pembuat visual, saya tumbuh dari rasa penasaran yang sederhana. Saya belajar karena ingin tahu bagaimana dunia digital bekerja dan mengapa tiap karya bisa terasa hidup.",
    accent: "text-stone-100",
    background: "from-[#060816] via-[#111b34] to-[#2c3152]",
    layout: "centered",
    images: ["/Photo1.jpeg", "/profile.jpg"],
    highlight: "Motion • Editing • Coding"
  },
  {
    id: 2,
    eyebrow: "Pendidikan",
    title: "Fondasi akademik memberi arah, rasa ingin tahu memberi gerak",
    body:
      "Di titik ini, pendidikan menjadi fondasi. Saya belajar disiplin, memahami struktur, dan melihat bahwa kreativitas bukan kebalikan dari logika, melainkan sesuatu yang tetap butuh susunan agar berkembang dengan kuat.",
    accent: "text-cyan-200",
    background: "from-[#07131a] via-[#103441] to-[#0e4d67]",
    layout: "split",
    images: ["/Photo1.jpeg"],
    highlight: "Belajar • Berproses • Bertumbuh"
  },
  {
    id: 3,
    eyebrow: "Jejak digital",
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
    eyebrow: "Dokumentasi",
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

  const layoutClass =
    section.layout === "centered"
      ? "flex flex-col items-center text-center"
      : section.layout === "stacked"
        ? "flex flex-col gap-8"
        : "grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]";

  return (
    <motion.section
      ref={sectionRef}
      onClick={onClick}
      data-index={index}
      className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden px-5 py-16 text-stone-100 sm:px-6 lg:px-8"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${section.background}`}
        style={{ opacity: backgroundOpacity, scale: backgroundScale, filter: `blur(${blur}px)` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18),transparent_35%,transparent_70%,rgba(0,0,0,0.1))]" />

      <motion.div className={`relative z-10 w-full max-w-6xl ${layoutClass}`} style={{ y }}>
        <div className={section.layout === "centered" ? "mx-auto max-w-3xl space-y-6" : "space-y-5"}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-stone-400">
            {section.eyebrow}
          </p>
          <h2 className={`text-[clamp(2rem,5.6vw,3.4rem)] font-semibold leading-[0.95] tracking-[-0.04em] ${section.accent}`}>
            {section.title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
            {section.body}
          </p>
          <p className="text-[11px] uppercase tracking-[0.35em] text-stone-400/80">
            {section.highlight}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {section.images.map((image, imageIndex) => (
            <div
              key={`${section.id}-${imageIndex}`}
              className="relative aspect-[4/3] overflow-hidden bg-stone-900/70"
            >
              <Image src={image} alt={`${section.title} visual ${imageIndex + 1}`} fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
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
