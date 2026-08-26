"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { chapters } from "@/lib/data";
import { join } from "path";

type GalleryImage = { src: string; alt: string; caption: string; detail: string };

type Chapter = {
  id: string;
  eyebrow: string;
  title: string[];
  description: string[];
  tone: "light" | "dark";
  images: GalleryImage[];
  galleryFirst?: boolean;
  story?: {
    eyebrow?: string;
    paragraphs: string[];
  };
};

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
      >
        {loop.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(image)}
            className={`group relative h-40 w-56 shrink-0 overflow-hidden rounded-md border text-left shadow-lg transition-transform duration-500 hover:z-10 hover:scale-[1.035] sm:h-52 sm:w-80 ${dark ? "border-white/15 bg-white/5" : "border-black/15 bg-black/5"}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 224px, 320px" className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-5 text-[9px] uppercase tracking-[0.22em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{image.caption}</span>
          </button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/35 px-5 pb-8 backdrop-blur-[2px] sm:items-center sm:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className={`relative grid w-full max-w-3xl overflow-hidden rounded-md border shadow-2xl sm:grid-cols-[0.95fr_1fr] ${dark ? "border-white/15 bg-[#11110f] text-stone-100" : "border-black/15 bg-[#eeeae3] text-neutral-950"}`}
            >
              <div className="relative min-h-56 sm:min-h-80">
                <Image src={active.src} alt={active.alt} fill sizes="(max-width: 640px) 100vw, 384px" className="object-cover" />
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.28em] opacity-60">{active.caption}</p>
                  <p className="text-base leading-relaxed sm:text-lg">{active.detail}</p>
                </div>
                <button type="button" aria-label="Close image detail" onClick={() => setActive(null)} className="self-start text-[10px] uppercase tracking-[0.24em] opacity-65 transition hover:opacity-100">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChapterCopy({
  paragraphs,
  fullWidth = false,
}: {
  paragraphs: string[];
  fullWidth?: boolean;
}) {
  return (
    <div
      className={[
        "space-y-4 border-l border-current/25 pl-5",
        "text-sm leading-relaxed opacity-85 sm:text-base",
        fullWidth ? "w-full max-w-none" : "max-w-lg",
      ].join(" ")}
    >
      {paragraphs.map((paragraph, index) => (
        <p key={`${paragraph}-${index}`}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function Chapter({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const dark = chapter.tone === "dark";
  const hasTitle = chapter.title.length > 0;

  return (
    <section
      id={chapter.id}
      className="relative"
      style={{
        zIndex: index + 1,
      }}
    >
      {/* 
        Wrapper ini menentukan panjang scroll.
        Jadi chapter boleh lebih tinggi dari viewport.
      */}
      <div className="relative">
        {/* ==============================
            STICKY VISUAL LAYER
        =============================== */}
        <div
          className={[
            "sticky top-0 min-h-[100svh]",
            "overflow-hidden border-t",
            dark
              ? "border-black/100 bg-[#10100f] text-stone-100"
              : "border-black/15 bg-[#e9e5de] text-[#171614]",
          ].join(" ")}
        >
          {/* Texture */}
          <div
            className="
              pointer-events-none absolute inset-0
              opacity-[0.035]
              [background-image:radial-gradient(currentColor_0.7px,transparent_0.7px)]
              [background-size:5px_5px]
            "
          />

          {/* Content */}
          <div
            className="
              relative mx-auto flex
              min-h-[100svh]
              max-w-[1600px]
              flex-col
              px-5 py-16
              sm:px-10 sm:py-24
              lg:py-28
            "
          >
            {/* ==============================
                HEADER
            =============================== */}
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.32em] opacity-65">
                {chapter.eyebrow}
              </p>
            </div>

            {/* ==============================
                MAIN INTRO
            =============================== */}
            <div
              className={[
                "mt-14 grid gap-10",
                "sm:mt-20",
                "lg:items-end lg:gap-16",
                hasTitle
                  ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.55fr)]"
                  : "grid-cols-1",
              ].join(" ")}
            >
              {/* TITLE */}
              {hasTitle && (
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="
                    font-serif
                    text-[clamp(3.4rem,8.2vw,8.5rem)]
                    leading-[0.78]
                    tracking-normal
                  "
                >
                  {chapter.title.map((line) => (
                    <span
                      key={line}
                      className="block"
                    >
                      {line}
                    </span>
                  ))}
                </motion.h2>
              )}

              {/* DESCRIPTION */}
              {chapter.description.length > 0 && (
                <ChapterCopy
                  paragraphs={chapter.description}
                  fullWidth={!hasTitle}
                />
              )}
            </div>

            {/* ==============================
                GALLERY
            =============================== */}
            {chapter.images.length > 0 && (
              <div
                className="
                  mt-14
                  sm:mt-20
                  lg:mt-24
                "
              >
                {chapter.galleryFirst && (
                  <p className="mb-5 px-5 text-[9px] uppercase tracking-[0.32em] opacity-55 sm:px-10">
                    Klik Gambar Untuk Melihat
                  </p>
                )}

                <HorizontalGallery
                  images={chapter.images}
                  dark={dark}
                />
              </div>
            )}

            {/* ==============================
                SECONDARY STORY
            =============================== */}
            {chapter.story && (
              <div
                className="
                  mt-24
                  pb-20
                  sm:mt-32
                  sm:pb-24
                  lg:mt-40
                  lg:pb-32
                "
              >
                <div
                  className="space-y-10"
                >
                  {/* Story label */}
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.32em]
                        opacity-45
                      "
                    >
                      {chapter.story.eyebrow ?? "Continued"}
                    </p>

                  {/* Story text */}
                  <div className="w-full lg:max-w-[80%]">
                  <ChapterCopy
                    paragraphs={chapter.story.paragraphs}
                    fullWidth
                  />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TimelineStory() {
  return (
    <main className="relative overflow-clip bg-[#10100f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,118,0.1),rgba(255,255,255,0))]">
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#10100f] px-5 text-[#171614]">
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(#171614_0.7px,transparent_0.7px)] [background-size:5px_5px]" />
        <p className="absolute left-5 top-8 text-[9px] text-[#f5f5f4] uppercase tracking-[0.32em] sm:left-10">My Journey</p>
        <p className="absolute right-5 top-8 text-[9px] text-[#f5f5f4] uppercase tracking-[0.32em] sm:right-10">01</p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="relative max-w-4xl text-center">
          <p className="mb-5 text-[9px] text-[#f5f5f4] uppercase tracking-[0.42em]">Welcome to</p>
          <h1 className="font-serif text-[#f5f5f4] text-[clamp(4rem,10.5vw,11rem)] leading-none tracking-normal">MY JOURNEY</h1>
          <p className="mx-auto mt-7 max-w-xs text-xs text-[#f5f5f4] leading-relaxed sm:text-sm">Sebuah perjalanan tentang bagaimana saya menemukan, mempelajari, dan membangun hal-hal yang saya sukai.</p>
          <a href="#school" className="mt-14 inline-flex flex-col items-center gap-3 text-[9px] text-[#f5f5f4] uppercase tracking-[0.28em] transition-opacity hover:opacity-55"><span className="h-11 w-px bg-current/50" />Scroll</a>
        </motion.div>
      </section>

      {chapters.map((chapter, index) => <Chapter key={chapter.id} chapter={chapter} index={index} />)}

      <footer className="relative z-10 bg-[#10100f] px-5 py-14 text-center text-[9px] uppercase tracking-[0.28em] text-stone-400 sm:px-10">The end of journey, but the beginning of more.</footer>
    </main>
  );
}
