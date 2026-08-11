"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type GalleryImage = { src: string; alt: string; caption: string; detail: string };

type Chapter = {
  id: string;
  eyebrow: string;
  title: string[];
  description: string[];
  tone: "light" | "dark";
  images: GalleryImage[];
  galleryFirst?: boolean;
};

// Ganti teks, caption, dan path gambar dari data ini tanpa mengubah layout.
const chapters: Chapter[] = [
  {
    id: "school",
    eyebrow: "02 / SMA · SCHOOL JOURNEY",
    title: ["SMA", "/ SCHOOL", "JOURNEY"],
    description: [
      "Masa SMA adalah awal perjalanan saya mengenal dunia yang lebih luas. Di sini saya belajar banyak hal, bukan hanya dari pelajaran di kelas, tetapi juga dari organisasi, pertemanan, dan berbagai pengalaman.",
      "Momen-momen itu membentuk cara saya berpikir, bertumbuh, dan menentukan arah langkah saya selanjutnya."
    ],
    tone: "dark",
    galleryFirst: true,
    images: [
      { src: "/Photo1.jpeg", alt: "School memory", caption: "Class meeting — 2018", detail: "Salah satu momen kebersamaan yang paling berkesan selama di sekolah." },
      { src: "/profile.jpg", alt: "Portrait memory", caption: "A season of learning", detail: "Hari-hari kecil yang pelan-pelan membentuk arah perjalanan." },
      { src: "/icarusPotrait.jpg", alt: "Creative memory", caption: "Finding a point of view", detail: "Rasa ingin tahu mulai berubah menjadi cara untuk bercerita." }
    ]
  },
  {
    id: "kinetic",
    eyebrow: "03 / KINETIC GRAPHIC",
    title: ["KINETIC", "GRAPHIC"],
    description: [
      "Kinetic typography dan motion design adalah cara saya bercerita melalui gerakan, ritme, dan visual. Saya menikmati proses mengubah ide menjadi animasi yang komunikatif dan estetis.",
      "Setiap frame adalah kesempatan untuk menyampaikan pesan dengan cara yang lebih hidup."
    ],
    tone: "light",
    images: [
      { src: "/thumbnail/curhat.png", alt: "Motion project Curhat", caption: "Move with purpose", detail: "Eksperimen visual tentang ritme, kontras, dan pesan." },
      { src: "/thumbnail/multoTn.png", alt: "Motion project Multo", caption: "Kinetic type study", detail: "Tipografi yang bergerak untuk membangun rasa dan fokus." },
      { src: "/thumbnail/ramaisepi.png", alt: "Motion project Ramai Sepi", caption: "Keep moving forward", detail: "Potongan studi motion tentang energi dan pertumbuhan." }
    ]
  },
  {
    id: "web",
    eyebrow: "04 / WEB DEVELOPMENT & SOFTWARE ENGINEERING",
    title: ["WEB", "DEVELOPMENT", "&", "SOFTWARE", "ENGINEERING"],
    description: [
      "Saya membangun aplikasi web dengan fokus pada performa, pengalaman pengguna, dan arsitektur yang bersih. Dari frontend hingga backend, saya menikmati proses mengubah ide menjadi produk digital yang bermanfaat.",
      "Teknologi yang saya gunakan mencakup React, Next.js, TypeScript, Node.js, dan lainnya."
    ],
    tone: "dark",
    images: [
      { src: "/thumbnail/somepleasure.png", alt: "Website project", caption: "Project dashboard", detail: "Antarmuka yang menyatukan informasi, alur, dan kebutuhan pengguna." },
      { src: "/Icarus.png", alt: "Visual web project", caption: "Creative interface", detail: "Mencari titik temu antara ekspresi visual dan fungsi." },
      { src: "/fallinIcarus.jpg", alt: "Website visual", caption: "Digital product study", detail: "Sebuah eksplorasi tampilan, sistem, dan pengalaman digital." }
    ]
  },
  {
    id: "security",
    eyebrow: "05 / CYBER SECURITY",
    title: ["CYBER", "SECURITY"],
    description: [
      "Keamanan bukan hanya tentang tools, tetapi tentang cara berpikir. Saya tertarik memahami sistem, menemukan kerentanan, dan membangun solusi yang lebih aman.",
      "Saya terus belajar tentang offensive security, defensive security, networking, dan secure coding."
    ],
    tone: "light",
    images: [
      { src: "/thumbnail/setiapwaktuTn.png", alt: "Security study", caption: "Read the system", detail: "Belajar melihat detail dan hubungan di balik sebuah sistem." },
      { src: "/falloficarus.svg", alt: "Security diagram", caption: "Security mindset", detail: "Keamanan yang baik dimulai dari pemahaman, bukan kepanikan." },
      { src: "/icarusDraw.jpg", alt: "Security visual", caption: "Build with care", detail: "Merancang dan membangun dengan perhatian pada ketahanan." }
    ]
  }
];

function HorizontalGallery({ images, dark }: { images: GalleryImage[]; dark: boolean }) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const reduceMotion = useReducedMotion();
  const loop = [...images, ...images];

  return (
    <div className="relative overflow-hidden py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-current to-transparent opacity-10 sm:w-20" />
      <motion.div
        className="flex w-max gap-3 px-5 sm:gap-5 sm:px-10"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        whileHover={{ animationPlayState: "paused" } as never}
      >
        {loop.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(image)}
            className={`group relative h-40 w-56 shrink-0 overflow-hidden rounded-md border text-left shadow-lg transition-transform duration-500 hover:z-10 hover:scale-[1.035] sm:h-52 sm:w-80 ${dark ? "border-white/15 bg-white/5" : "border-black/15 bg-black/5"}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 224px, 320px" className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-[9px] uppercase tracking-[0.22em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{image.caption}</span>
          </button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className={`mx-5 mt-4 flex max-w-md items-start justify-between gap-5 rounded-md border p-4 text-sm sm:mx-auto ${dark ? "border-white/15 bg-white/10 text-stone-100" : "border-black/15 bg-black/5 text-neutral-900"}`}>
            <div><p className="mb-1 text-[10px] uppercase tracking-[0.22em] opacity-60">{active.caption}</p><p className="leading-relaxed">{active.detail}</p></div>
            <button type="button" aria-label="Close image detail" onClick={() => setActive(null)} className="text-lg opacity-60 transition hover:opacity-100">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Chapter({ chapter, index }: { chapter: Chapter; index: number }) {
  const dark = chapter.tone === "dark";
  return (
    <section id={chapter.id} style={{ zIndex: index + 1 }} className={`timeline-chapter sticky top-0 min-h-[100svh] overflow-hidden border-t ${dark ? "bg-[#10100f] text-stone-100 border-white/15" : "bg-[#e9e5de] text-[#171614] border-black/15"}`}>
      <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(currentColor_0.7px,transparent_0.7px)] [background-size:5px_5px]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between py-24 sm:py-28">
        <div className="px-5 sm:px-10"><p className="text-[9px] font-medium uppercase tracking-[0.32em] opacity-65">{chapter.eyebrow}</p></div>
        {chapter.galleryFirst && <HorizontalGallery images={chapter.images} dark={dark} />}
        <div className={`grid items-end gap-10 px-5 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.55fr)] ${chapter.galleryFirst ? "mt-10" : ""}`}>
          <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="font-serif text-[clamp(3.4rem,8.2vw,8.5rem)] leading-[0.77] tracking-[-0.075em]">
            {chapter.title.map((line) => <span key={line} className="block">{line}</span>)}
          </motion.h2>
          <div className="max-w-lg space-y-4 border-l border-current/25 pl-5 text-sm leading-relaxed opacity-85 sm:text-base">
            {chapter.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        {!chapter.galleryFirst && <div className="mt-12"><HorizontalGallery images={chapter.images} dark={dark} /></div>}
        <div className="mt-8 flex items-center justify-between px-5 text-[9px] uppercase tracking-[0.25em] opacity-50 sm:px-10"><span>Click an image to pause the moment</span><span>{String(index + 2).padStart(2, "0")}</span></div>
      </div>
    </section>
  );
}

export default function TimelineStory() {
  return (
    <main className="relative overflow-clip bg-[#e9e5de]">
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#eeeae3] px-5 text-[#171614]">
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(#171614_0.7px,transparent_0.7px)] [background-size:5px_5px]" />
        <p className="absolute left-5 top-8 text-[9px] uppercase tracking-[0.32em] sm:left-10">My Journey</p><p className="absolute right-5 top-8 text-[9px] uppercase tracking-[0.32em] sm:right-10">01</p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="relative max-w-4xl text-center">
          <p className="mb-5 text-[9px] uppercase tracking-[0.42em]">Welcome to</p>
          <h1 className="font-serif text-[clamp(4rem,10.5vw,11rem)] leading-none tracking-[-0.075em]">MY JOURNEY</h1>
          <p className="mx-auto mt-7 max-w-xs text-xs leading-relaxed sm:text-sm">Sebuah perjalanan tentang bagaimana saya menemukan, mempelajari, dan membangun hal-hal yang saya sukai.</p>
          <a href="#school" className="mt-14 inline-flex flex-col items-center gap-3 text-[9px] uppercase tracking-[0.28em] transition-opacity hover:opacity-55"><span className="h-11 w-px bg-current/50" />Scroll</a>
        </motion.div>
      </section>
      {chapters.map((chapter, index) => <Chapter key={chapter.id} chapter={chapter} index={index} />)}
      <footer className="relative z-10 bg-[#10100f] px-5 py-14 text-center text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:px-10">The end of journey, but the beginning of more.</footer>
    </main>
  );
}
