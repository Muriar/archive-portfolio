"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { skills } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

const coreSkills = [
  {
    number: "01",
    title: "Motion Graphics",
    description:
      "Creating dynamic visual compositions through movement, timing, rhythm, and transitions.",
  },
  {
    number: "02",
    title: "Kinetic Typography",
    description:
      "Turning words, lyrics, and typography into visual movement that follows rhythm and emotion.",
  },
  {
    number: "03",
    title: "Video Editing",
    description:
      "Combining footage, music, pacing, and visual elements into cohesive visual sequences.",
  },
  {
    number: "04",
    title: "Visual Effects",
    description:
      "Enhancing visuals through compositing, effects, atmosphere, and visual treatment.",
  },
  {
    number: "05",
    title: "Visual Design",
    description:
      "Building compositions through typography, layout, hierarchy, color, and visual direction.",
  },
  {
    number: "06",
    title: "Color & Compositing",
    description:
      "Refining visuals through color treatment, layering, blending, and consistent visual tone.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Concept",
    description: "Finding the idea, direction, and visual language.",
  },
  {
    number: "02",
    title: "Design",
    description: "Building composition, typography, and visual elements.",
  },
  {
    number: "03",
    title: "Motion",
    description: "Bringing the design to life through timing and movement.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Polishing effects, compositing, color, and visual details.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Preparing the final visual for its intended platform and format.",
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

        {/* =========================================================
    EXPERTISE / CORE SKILLS
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

    <span className="hidden font-mono text-[10px] text-neutral-400 sm:block">
      06 AREAS
    </span>
  </div>

  {/* =====================================================
      MOBILE-FIRST SKILL GRID
  ===================================================== */}

  <div className="grid grid-cols-2 gap-px overflow-hidden border dark:border-neutral-800 rounded-xl">
    
    {coreSkills.map((skill, index) => {
      const isHero = index === 0;
      const isLast = index === coreSkills.length - 1;

      return (
        <motion.article
          key={skill.number}
          variants={fadeUp}
          className={`
            relative flex flex-col justify-between
            overflow-hidden
            rounded-xl
            dark:bg-neutral-950

            ${isHero || isLast ? "col-span-2" : "col-span-1"}

            ${isHero ? "min-h-[330px] sm:min-h-[360px]" : "min-h-[220px] sm:min-h-[250px]"}

            p-5 sm:p-7
          `}
        >
          {/* Number */}

          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] text-neutral-400">
              {skill.number}
            </span>

            {isHero && (
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                Primary
              </span>
            )}
          </div>

          {/* Content */}

          <div>
            <h3
              className={`
                max-w-3xl
                font-semibold
                uppercase
                tracking-[-0.04em]
                leading-[0.9]

                ${
                  isHero
                    ? "text-[clamp(2.8rem,11vw,6rem)]"
                    : "text-xl sm:text-2xl"
                }
              `}
            >
              {skill.title}
            </h3>

            <p
              className={`
                max-w-xl
                text-neutral-500
                dark:text-neutral-400

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

          {/* Decorative index line */}

          <div
            className={`
              absolute bottom-0 left-0
              h-px
              bg-neutral-300
              dark:bg-neutral-700

              ${
                isHero || isLast
                  ? "w-1/3"
                  : "w-1/4"
              }
            `}
          />
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
          className="relative z-10 mt-24"
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
            {/* Creative Tools */}

            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Creative Tools
              </p>

              <div className="space-y-2">
                {skills
                  .filter(
                    (skill: {
                      name: string;
                      description: string;
                      logo: string;
                    }) =>
                      !["Visual Studio Code", "Valorant"].includes(
                        skill.name
                      )
                  )
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
                            className="flex w-full z-[10] items-center justify-between gap-4 p-5 text-left bg-[#11131a]"
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
                                <div className="border-t border-neutral-200 px-5 pb-6 pt-5 dark:border-neutral-800 bg-[#11131a]">
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
  };

  return tags[name] ?? ["Creative", "Visual", "Editing"];
}