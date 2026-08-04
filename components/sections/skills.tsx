"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { skills } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

interface coreSkills {
  number: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  poster?: string;
}

const coreSkills:coreSkills[] = [
  {
    number: "01",
    title: "Motion Graphics",
    description:
      "Saat ini saya sedang mendalami dunia motion graphic. Fokus utama saya adalah belajar bagaimana cara menyederhanakan data atau informasi yang rumit menjadi visual yang menarik dan mudah dipahami oleh penonton.",
    video: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/EEA.mp4",
  },
  {
    number: "02",
    title: "Kinetic Typography",
    description:
      "Teknik ini mengajarkan saya cara membuat teks atau huruf bergerak secara dinamis mengikuti ritme suara lagu. Saya belajar cara agar pesan dan emosi dapat tersampaikan.",
    video: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/timeles.mp4",
  },
  {
    number: "03",
    title: "Video Editing",
    description:
      "Saya menguasai dasar-dasar video editing. Saya belajar cara memberikan emosi dalam viedo dan merangkai berbagai potongan video mentah menjadi satu kesatuan cerita yang utuh",
    video: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/WhatsApp%20Video%202026-07-27%20at%2022.14.11.mp4",
  },
  {
    number: "04",
    title: "Developer",
    description:
      "Sebagai pemula, saya mempelajari berbagai logika coding dan macam bahasa pemrograman, serta bagaimana sebuah aplikasi atau situs web dibangun dari nol.",
    video: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/28320-369325356_medium.mp4",
  },
  {
    number: "05",
    title: "Typography",
    description:
      "Saya belajar jika memilih jenis huruf tidak boleh asal-asalan, namun harus memperhatikan readability agar pesan di dalam teks dapat ditangkap oleh pembaca.",
    video: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/setiapWaktu.mp4",
  },
  {
    number: "06",
    title: "Color & Compositing",
    description:
      "Saya sedang mempelajari color and compositing untuk tahap akhir produksi video. Selain itu, saya juga berlatih memperbaiki warna (color correction) dan memberikan nuansa tertentu (color grading) untuk membangun suasana di dalam video maupun foto.",
    video: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/WhatsApp%20Video%202026-07-27%20at%2022.14.10%20(1).mp4",
  },
];


export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setActiveSkill((current) =>
      current === skillName ? null : skillName
    );
  };

  return (
    <motion.section
      id="skills"
      className="border-b border-neutral-200 bg-neutral-50 px-5 py-24 text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* =========================================================
            HEADER
        ========================================================= */}

      <section className="relative items-start pb-1">
          <div className="max-w-4xl space-y-10">
            <p
              data-hero-meta
              className="text-[10px] uppercase tracking-[0.45em] text-stone-400"
            >
             Editor / Vibe Coder HEHEHE
            </p>
            <h1
              className="text-display max-w-3xl text-[clamp(4.4rem,17vw,11rem)] leading-[0.86] tracking-[-0.07em] uppercase text-stone-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block overflow-hidden">
                <span data-hero-line className="block">
                  Skills
                </span>
              </span>
            </h1>
            <p
              data-hero-meta
              className="max-w-2xl text-sm leading-7 text-stone-300 sm:text-base"
            >
              Saya bekerja di antara desain, gerak, dan visual storytelling. Menggabungkan motion graphics, typography, editing, dan visual effects untuk mengubah ide sederhana menjadi visual yang memiliki ritme dan karakter.
            </p>
          </div>
        </section>

        {/* =========================================================
            CORE SKILLS
        ========================================================= */}
<motion.div
  variants={fadeUp}
  className="mt-20"
>
  {/* Header */}

  <div className="mb-7 flex items-end justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        01 — Expertise
      </p>

      <h2 className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">
        Core Skills
      </h2>
    </div>
  </div>

  {/* =====================================================
      MOBILE-FIRST SKILL GRID
  ===================================================== */}

  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl">
    
    {coreSkills.map((skill, index) => {
      const isHero = index === 0;
      const isLast = index === coreSkills.length - 1;

      return (
        <motion.article
          key={skill.number}
          variants={fadeUp}
          className={`
          group
          relative
          flex
          flex-col
          justify-between
          overflow-hidden
          rounded-xl
          mb-1
          ml-1
          border
          border-neutral-400
          bg-[#111]
            "
            ${isHero || isLast ? "col-span-2" : "col-span-1"}
            ${isHero ? "min-h-[330px] sm:min-h-[360px]" : "min-h-[220px] sm:min-h-[250px]"}
            p-5 sm:p-7
          `}
        >

         <div className="absolute inset-0 overflow-hidden rounded-xl">

  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster={skill.poster}
    className="
      absolute
      inset-0
      md:object-[center_30%]
      h-full
      w-full
      opacity-80
      object-cover
      blur-[1px]
      transition-all
      duration-700
    "
  >
    <source src={skill.video} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/45" />
  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/80" />
</div>

          {/* Content */}

          <div>
            <h3
              className={`
                max-w-1xl
                font-semibold
                align-text-top
                uppercase
                tracking-[-0.04em]
                leading-[0.9]
                z-10
                text-white
                mix-blend-difference

                ${
                  isHero
                    ? "text-[clamp(2.8rem,11vw,6rem)]"
                    : "text-1xl sm:text-xl"
                }
              `}
            >
              {skill.title}
            </h3>

            <p
              className={`
                max-w-xl
                text-white
                mix-blend-difference
                ${
                  isHero
                    ? "mt-5 text-sm leading-6 sm:text-base"
                    : "mt-4 text-xs leading-5 sm:text-sm"
                }
              `}
            >
              {skill.description}
            </p>
          </div>
        </motion.article>
      );
    })}
  </div>
</motion.div>

        <div className="w-full border-t border-neutral-200 dark:border-neutral-800 pt-1" />

        {/* =========================================================
            SOFTWARE
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          className="relative z-10 mt-20"
        >
          <div className="mb-7 flex items-end justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                02 — Tools
              </p>

              <h2 className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">
                Software
              </h2>
            </div>

            <span className="hidden font-mono text-[10px] text-neutral-400 sm:block">
              THE TOOLBOX
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div>
              <div className="space-y-2">
                {skills
                  .filter(
                    (skill: {
                      name: string;
                      description: string;
                      logo: string;
                    }) => skill.name)
                  .map(
                    (skill: {
                      name: string;
                      description: string;
                      logo: string;
                    }) => {
                      const isOpen = activeSkill === skill.name;

                      return (
                        <motion.div
                          key={skill.name}
                          layout
                          className={`overflow-hidden rounded-xl border transition-colors duration-500`}
                        >
                          {/* Button / Header */}

                          <button
                            type="button"
                            onClick={() => toggleSkill(skill.name)}
                            className="flex w-full z-[10] items-center justify-between gap-4 p-5 text-left bg-[#00000a]
                            "
                            aria-expanded={isOpen}
                          >
                            <div className="flex items-center gap-4">
                              {skill.logo && (
                                <div className="relative w-16 sm:w-16 h-16 sm:h-16 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-800 flex-shrink-0">
                                  <Image
                                    src={skill.logo}
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="h-full w-full object-contain"
                                  />
                                </div>
                              )}

                              <div>
                                <h3 className="text-sm font-semibold tracking-wide text-white">
                                  {skill.name}
                                </h3>

                                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                                  Creative Tool
                                </p>
                              </div>
                            </div>

                            <motion.span
                              animate={{
                                rotate: isOpen ? 180 : 0,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              className="text-xs text-neutral-400"
                            >
                              ↓
                            </motion.span>
                          </button>

                          {/* Expanded Content */}

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                transition={{
                                  duration: 0.35,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              >
                                <div className="border-t border-neutral-200 px-5 pb-6 pt-5 dark:border-neutral-800 bg-[#00000a]">
                                  <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
                                    {/* Logo */}

                                    {skill.logo && (
                                      <div className="hidden rounded-xl overflow-hidden border border-neutral-700 bg-neutral-800 flex-shrink-0">
                                        <Image
                                          src={skill.logo}
                                          alt=""
                                          width={48}
                                          height={48}
                                          className="h-full w-full object-contain"
                                        />
                                      </div>
                                    )}

                                    <div>
                                      <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                                        {skill.description}
                                      </p>

                                      <div className="mt-5 flex flex-wrap gap-2">
                                        {getSoftwareTags(skill.name).map(
                                          (tag) => (
                                            <span
                                              key={tag}
                                              className="rounded-full border border-neutral-200 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
                                            >
                                              {tag}
                                            </span>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* =========================================================
   SOFTWARE TAGS
========================================================= */

function getSoftwareTags(name: string) {
  const tags: Record<string, string[]> = {
    "Alight Motion": [
      "Motion Graphics",
      "Typography",
      "VFX",
      "Compositing",
    ],

    "After Effects": [
      "Motion Graphics",
      "Compositing",
      "VFX",
      "Animation",
    ],

    CapCut: [
      "Video Editing",
      "Typography",
      "Transitions",
      "Short Form",
    ],

    Canva: [
      "Visual Design",
      "Layout",
      "Presentation",
      "Graphic Design",
    ],

    Lightroom: [
      "Color",
      "Photo Editing",
      "Color Grading",
      "Retouching",
    ],

    "Visual Studio Code": [
      "Coding",
      "Debugging",
      "Development"
    ],
    Valorant: [
      "Gaming",
      "Stress",
      "Game Femboy"
    ]
  };

  return tags[name] ?? ["Creative", "Visual", "Editing"];
}