"use client";

import { GalleryProject } from "@/lib/data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type HeroProps = {
  project: GalleryProject;
};

const Hero = ({ project }: HeroProps) => {
  const rootRef = useRef<HTMLDivElement>(null);


export default function Hero({ project }: HeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
  () => {
    const title = gsap.utils.toArray<HTMLElement>("[data-hero-title]");
    const meta = gsap.utils.toArray<HTMLElement>("[data-hero-meta]");
    const indicator = gsap.utils.toArray<HTMLElement>("[data-scroll-indicator]");

    gsap.from(title, {
      opacity: 0,
      yPercent: 120,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(meta, {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      delay: 0.3,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(indicator, {
      scaleY: 0,
      transformOrigin: "top center",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  },
  {
    scope: rootRef,
  }
 );
  
  return (
    <section 
    ref={rootRef}
    className="relative flex min-h-screen items-center overflow-hidden bg-[#090909]">

      {/* ========================= */}
      {/* Background Glow */}
      {/* ========================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 25%,
              ${project.accent}22,
              transparent 65%
            )
          `,
        }}
      />

      {/* Left Blur */}

      <div
        className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full blur-[180px]"
        style={{
          background: project.accent,
          opacity: 0.12,
        }}
      />

      {/* Right Blur */}

      <div
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-[220px]"
        style={{
          background: project.accent,
          opacity: 0.08,
        }}
      />

      {/* Film Grain */}

      <div className="film-grain pointer-events-none absolute inset-0 opacity-20" />

      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-32">

        {/* Category */}

        <p data-hero-meta className="text-[10px] uppercase tracking-[0.45em] text-stone-500">

          {project.filterTag}

        </p>

        {/* Title */}

        <h1
          data-hero-title
          className="
            mt-8
            max-w-5xl
            text-[clamp(4.8rem,16vw,12rem)]
            font-semibold
            uppercase
            leading-[0.86]
            tracking-[-0.08em]
            text-white
          "
          style={{
            fontFamily: "var(--font-display)",
          }}
        >
          {project.title}
        </h1>

        {/* Description */}

        <p
          className="
            mt-12
            max-w-2xl
            text-base
            leading-8
            text-stone-300
          "
        >
          {project.description}
        </p>

        {/* Hero Note */}

        <blockquote
          className="
            mt-10
            max-w-xl
            border-l
            border-white/10
            pl-6
            italic
            text-stone-400
          "
        >
          {project.heroNote}
        </blockquote>

        {/* Metadata */}

        <div className="mt-16 flex flex-wrap gap-10">

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">
              Duration
            </p>

            <p className="mt-2 text-2xl font-light">
              {project.duration}
            </p>

          </div>

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">
              Motion Stack
            </p>

            <p className="mt-2 text-2xl font-light">
              {project.stack.length}
            </p>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* Scroll Indicator */}
      {/* ========================= */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="flex flex-col items-center gap-4">

          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500">
            Scroll
          </span>

          <div className="h-20 w-px bg-white/10">

            <div 
            data-scroll-indicator 
            className="h-8 w-full bg-stone-300" />

          </div>

        </div>

      </div>

    </section>
  );
}