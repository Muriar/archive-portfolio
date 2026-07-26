"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {motion, useReducedMotion  } from "framer-motion";
import { CinematicLink } from "@/components/sections/GaleriKarya/cinematic-link";
import { galleryProjects, type GalleryFilter } from "@/lib/data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function GalleryExperience() {
  const [activeSlug, setActiveSlug] = useState(galleryProjects[0]?.slug);
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return galleryProjects;
    }

    return galleryProjects.filter(
      (project) => project.filterTag === activeFilter
    );
  }, [activeFilter]);

  const activeProject = useMemo(() => {
    return (
      filteredProjects.find((project) => project.slug === activeSlug) ??
      filteredProjects[0] ??
      galleryProjects[0]
    );
  }, [activeSlug, filteredProjects]);

  useEffect(() => {
    if (!filteredProjects.length) {
      return;
    }

    const isVisible = filteredProjects.some(
      (project) => project.slug === activeSlug
    );

    if (!isVisible) {
      setActiveSlug(filteredProjects[0].slug);
    }
  }, [activeFilter, activeSlug, filteredProjects]);

// ======================================================
// UPDATE FIX BUG 
// HERO ANIMATION
// Hanya dijalankan sekali ketika halaman pertama kali di-mount.
// Tidak akan dipanggil lagi ketika activeFilter berubah.
// ======================================================
useGSAP(
  () => {
    if (reduceMotion) return;

    const heroLines =
      gsap.utils.toArray<HTMLElement>("[data-hero-line]");

    const heroMeta =
      gsap.utils.toArray<HTMLElement>("[data-hero-meta]");

    // Animasi judul
    gsap.from(heroLines, {
      opacity: 0,
      yPercent: 120,
      stagger: 0.08,
      duration: 1.15,
      ease: "power4.out",
    });

    // Animasi subtitle
    gsap.from(heroMeta, {
      opacity: 0,
      y: 18,
      stagger: 0.06,
      duration: 0.9,
      delay: 0.35,
      ease: "power3.out",
    });

    // Progress line di bagian bawah halaman
    const progressFill = rootRef.current?.querySelector(
      "[data-scroll-progress]"
    ) as HTMLDivElement | null;

    if (progressFill) {
      gsap.fromTo(
        progressFill,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  },

  // Tidak ada activeFilter di sini.
  // Hero hanya dianimasikan sekali.
  {
    scope: rootRef,
    dependencies: [reduceMotion],
  }
);

// ======================================================
// UPDATE FIX BUG 
// ARCHIVE CARD ANIMATION
// Akan dipanggil setiap activeFilter berubah.
// Hero tidak ikut dianimasikan ulang.
// ======================================================
useGSAP(
  () => {
    if (reduceMotion) return;

    const archiveCards =
      gsap.utils.toArray<HTMLElement>("[data-archive-card]");

    gsap.from(archiveCards, {
      opacity: 0,
      y: 28,
      stagger: 0.08,
      duration: 0.8,
      ease: "power3.out",
    });
  },
  {
    scope: rootRef,
    dependencies: [activeFilter],
  }
);

  return (
    <main
      ref={rootRef}
      className="relative overflow-hidden bg-[#090909] text-stone-50"
    >
      <div className="film-grain pointer-events-none absolute inset-0 opacity-20" />
      <div
        data-drift
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_68%)] blur-3xl"
      />
      <div
        data-drift
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(150,129,104,0.18),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="relative items-start pb-1 pt-12">
          <div className="max-w-4xl space-y-10">
            <p
              data-hero-meta
              className="text-[10px] uppercase tracking-[0.45em] text-stone-400"
            >
              Motion / Typography / Edit / Code
            </p>

            <h1
              className="text-display max-w-3xl text-[clamp(4.4rem,17vw,11rem)] leading-[0.86] tracking-[-0.07em] uppercase text-stone-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block overflow-hidden">
                <span data-hero-line className="block">
                  Galeri
                </span>
              </span>
              <span className="block overflow-hidden text-stone-300">
                <span data-hero-line className="block">
                  Karya
                </span>
              </span>
            </h1>

            <p
              data-hero-meta
              className="max-w-2xl text-sm leading-7 text-stone-300 sm:text-base"
            >
              Ruang tunggal untuk melihat karya motion, kinetic typography,
              video editing, dan eksperimen front-end sebagai satu arsip
              sinematik, bukan sekadar daftar proyek.
            </p>
            
          </div>

          <div className="absolute right-0 top-6 hidden max-w-xs rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-right backdrop-blur-sm lg:block">
            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400">
              Archive index
            </p>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Setiap karya diperlakukan sebagai scene, dengan ritme, cahaya, dan
              tipografi yang dibangun untuk terasa manusiawi.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2
                className="text-display text-1xl uppercase tracking-[0.15em] text-stone-400"
              >
                All of My Project
              </h2>
            </div>
          </div>
 
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Semua Karya", value: "all" as const },
              { label: "Video Editing", value: "video editing" as const },
              { label: "Photo Editing", value: "photo editing" as const }
            ].map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition-colors duration-300",
                    isActive
                      ? "border-stone-100 bg-stone-100 text-stone-900"
                      : "border-white/10 bg-white/[0.03] text-stone-300 hover:bg-white/8"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {filteredProjects.map((project, index) => {
              const isActive = project.slug === activeSlug;

              return (
                <motion.article
                  key={project.slug}
                  data-archive-card
                  layout
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={cn(
                    "group overflow-hidden rounded-[1.75rem] border p-4 transition-colors duration-300",
                    isActive
                      ? "border-stone-300/30 bg-white/[0.06]"
                      : "border-white/10 bg-white/[0.03]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveSlug(project.slug)}
                    className="block w-full text-left"
                  >
                    <div className="grid gap-3 sm:grid-cols-[0.95fr_1.05fr] sm:gap-4">
                      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
                        <div className="aspect-video">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={cn(
                              "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
                              index % 2 === 0 ? "opacity-90" : "opacity-100"
                            )}
                          />
                        </div>
                        <div className="absolute inset-0 from-black via-black/20 to-transparent" />
                      </div>

                      <div className="flex flex-col justify-between gap-4">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                            <h3
                              className="text-display text-[1 rem] leading-none text-stone-100 sm:text-1xl"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <CinematicLink
                      href={project.links[0].href}
                      className="w-full h-full items-center justify-center text-center rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-200 transition-colors duration-300 hover:bg-white/10"
                    >
                      Detail
                    </CinematicLink>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <div className="flex items-center justify-between gap-4 pb-4 pt-1 text-[10px] uppercase tracking-[0.35em] text-stone-500">
          <span>Galeri Karya</span>
          <span
            data-scroll-progress
            className="h-px flex-1 origin-left scale-x-0 bg-stone-300/40"
          />
          <span>Archive index</span>
        </div>
      </div>
    </main>
  );
}
