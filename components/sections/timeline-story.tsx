"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { chapters } from "@/lib/data";

type GalleryImage = { src: string; alt: string; caption: string; detail: string };
type Chapter = {
  id: string;
  eyebrow: string;
  title: string[];
  description: string[];
  tone: "light" | "dark";
  images: GalleryImage[];
  story?: { eyebrow?: string; paragraphs: string[] };
};

const palettes = [
  { paper: "bg-[#f6f0e5]", ink: "text-[#18212f]", line: "border-[#18212f]", accent: "bg-[#ff7455]", wash: "bg-[#ffc6b7]" },
  { paper: "bg-[#]", ink: "text-[#f8f4ec]", line: "border-[#f8f4ec]", accent: "bg-[#ffc6b7]", wash: "bg-[#a8eb83]" },
  { paper: "bg-[#f6d95f]", ink: "text-[#22201d]", line: "border-[#22201d]", accent: "bg-[#ef7257]", wash: "bg-[#f8e9a2]" },
  { paper: "bg-[#e4e1f8]", ink: "text-[#282344]", line: "border-[#282344]", accent: "bg-[#8e7bea]", wash: "bg-[#c5bdf5]" },
];

function ImageViewer({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-[100] grid place-items-end bg-[#18212f]/60 px-4 py-4 backdrop-blur-sm sm:place-items-center sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      
      <motion.div initial={{ opacity: 0, y: 18, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 18 }} transition={{ duration: 0.25 }} onClick={(event) => event.stopPropagation()} className="grid w-full max-w-4xl overflow-hidden border-2 border-[#18212f] bg-[#fffdf7] shadow-[10px_10px_0_#ff7455] sm:grid-cols-[1.1fr_.9fr]">
        <div className="relative min-h-64 sm:min-h-[30rem]">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 640px" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-10 p-6 sm:p-8">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#5c6da9]">{image.caption}</p><p className="mt-5 font-serif text-2xl leading-tight italic text-[#18212f]">{image.detail}</p></div>
          <button type="button" onClick={onClose} className="inline-flex items-center gap-2 self-start text-[10px] font-bold uppercase tracking-[.16em] hover:text-[#ff7455]"><X className="h-4 w-4" /> Tutup</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Gallery({ images, palette }: { images: GalleryImage[]; palette: (typeof palettes)[number] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <>
      <div className="mt-10 overflow-hidden border-y-2 border-current py-4 sm:mt-14">
        <motion.div className="flex w-max gap-4" animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 42, ease: "linear", repeat: Infinity }}>
          {[...images, ...images].map((image, index) => (
            <button key={`${image.src}-${index}`} type="button" onClick={() => setActive(image)} className="group relative h-48 w-72 shrink-0 overflow-hidden border-2 border-current text-left shadow-[4px_4px_0_current] transition-transform duration-300 hover:-translate-y-1 sm:h-56 sm:w-96">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 288px, 384px" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className={`absolute inset-x-0 bottom-0 px-4 py-3 text-[10px] font-bold uppercase tracking-[.16em] ${palette.accent} text-[#18212f]`}>{image.caption}</span>
              <ArrowUpRight className="absolute right-3 top-3 h-5 w-5 rounded-full bg-[#fffdf7] p-1 text-[#18212f] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>{active && <ImageViewer image={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </>
  );
}

function ChapterCard({ chapter, index }: { chapter: Chapter; index: number }) {
  const palette = palettes[index % palettes.length];
  const reduceMotion = useReducedMotion();
  const chapterNumber = String(index + 1).padStart(2, "0");
  return (
    <section id={chapter.id} className={`${palette.paper} ${palette.ink} relative border-b-2 ${palette.line} overflow-hidden`}>
      <div className={`pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full ${palette.wash} opacity-65 blur-2xl`} />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-9 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[130px_minmax(0,1fr)] lg:gap-16">
          <div className="flex items-center gap-4 lg:block">
            <span className={`grid h-14 w-14 place-items-center rounded-full border-2 ${palette.line} ${palette.accent} text-sm font-bold text-[#18212f] lg:h-20 lg:w-20 lg:text-lg`}>{chapterNumber}</span>
            <div className={`h-px flex-1 ${chapter.tone === "dark" ? "bg-white/35" : "bg-black/25"} lg:mt-6 lg:h-24 lg:w-px`} />
            <p className="text-[10px] font-bold uppercase tracking-[.18em] opacity-65 lg:mt-6">Bab {chapterNumber}</p>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.65 }}>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] opacity-65">{chapter.eyebrow}</p>
              <h2 className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[.8] tracking-[-.065em]">
                {chapter.title.map((line, titleIndex) => <span key={line} className={titleIndex === 1 ? "block italic" : "block"}>{line}</span>)}
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.18 }} className="mt-11 grid max-w-3xl gap-5 border-l-2 border-current pl-5 text-sm leading-7 opacity-80 sm:text-base">
              {chapter.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </motion.div>
            {chapter.images.length > 0 && <Gallery images={chapter.images} palette={palette} />}
            {chapter.story && <div className="mt-14 max-w-3xl border-t-2 border-current pt-5 sm:mt-20"><p className="text-[10px] font-bold uppercase tracking-[.2em] opacity-60">{chapter.story.eyebrow ?? "Catatan lanjutan"}</p><div className="mt-6 grid gap-5 text-sm leading-7 opacity-80 sm:text-base">{chapter.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TimelineStory() {
  const reduceMotion = useReducedMotion();
  return (
    <main className="overflow-hidden bg-[#18212f]">
      <section className="relative grid min-h-[100svh] overflow-hidden bg-[#d9e6ff] px-5 py-20 text-[#18212f] sm:px-9 lg:px-14">
        <div className="pointer-events-none absolute -left-36 -top-24 h-[34rem] w-[34rem] rounded-full bg-[#a8eb83] opacity-65 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-0 h-[32rem] w-[32rem] rounded-full bg-[#ff9c84] opacity-55 blur-3xl" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-between border-y-2 border-[#18212f] py-5">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-[.2em]"><span>Jejak digital</span><span>01 / 09</span></div>
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8 }} className="py-14 sm:py-20">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#4569c9]">Sebuah catatan perjalanan</p>
            <h1 className="mt-7 max-w-6xl font-serif text-[clamp(4.6rem,13vw,12rem)] leading-[.75] tracking-[-.08em]">Bukan jalan<br /><span className="italic text-[#4569c9]">yang lurus.</span></h1>
            <p className="mt-12 max-w-xl border-l-2 border-[#18212f] pl-5 text-base leading-7 text-[#4e5b70]">Dari ruang kelas, layar timeline, hingga baris kode—ini potongan hal-hal yang membentuk cara saya melihat dan membuat sesuatu.</p>
          </motion.div>
          <a href={`#${chapters[0]?.id ?? "school"}`} className="inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] hover:text-[#4569c9]"><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-current"><ArrowDown className="h-4 w-4" /></span> Mulai membaca</a>
        </div>
      </section>
      {chapters.map((chapter, index) => <ChapterCard key={chapter.id} chapter={chapter} index={index} />)}
      <footer className="bg-[#18212f] px-5 py-14 text-center text-[10px] font-bold uppercase tracking-[.2em] text-[#d9e6ff] sm:px-9">Satu bab selesai, ruang untuk bab berikutnya tetap terbuka.</footer>
    </main>
  );
}
