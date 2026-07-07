"use client";

import { timeline } from "@/lib/data";
import { motion } from "framer-motion";
import { MotionWrapper } from "../motion-wrapper";
import { SectionHeading } from "../section-heading";
import { stagger } from "@/lib/motion";

export function Timeline() {
  return (
    <section id="timeline" className="border-b border-neutral-200 px-5 py-24 dark:border-neutral-800 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950">
      <motion.div className="mx-auto max-w-4xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SectionHeading eyebrow="Timeline" title="Background">
          latar belakang saya, dari mulai awal saya mengenal dunia digital hingga sekarang. mungkin emang masih dikit, tapi saya akan terus berkembang sedikit demi sedikit.
        </SectionHeading>
        
        {/* Kontainer Garis Alur Lini Masa */}
        <div className="relative border-l-2 border-neutral-300 pl-6 dark:border-neutral-900 mt-16 max-w-xl mx-auto space-y-6">
          {timeline.map((item, index) => (
            <MotionWrapper key={item.title} className="relative group" delay={index * 0.08}>
              
              {/* Indikator Titik Penghubung di Luar Kartu */}
              <span className="absolute -left-[32px] top-6 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-400 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 transition-all duration-500 group-hover:border-purple-500 z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-700 transition-all duration-500 group-hover:bg-purple-400 group-hover:shadow-[0_0_8px_#a855f7]" />
              </span>

              {/* 🛠️ BINGKAI KARTU DENGAN SOFTGLOW UNGU BERDENYUT BERGANTIAN (FRAMER MOTION) */}
              <motion.div 
                className="p-5 rounded-2xl border border-neutral-300 bg-white/40 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950 transition-colors duration-500 
                  hover:-translate-y-0.5 hover:bg-white/60 dark:hover:bg-neutral-900/20"
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(120, 85, 140, 0.05), 0 0 30px rgba(120, 85, 140, 0.01)", 
                    "0 0 35px rgba(120, 85, 140, 0.22), 0 0 60px rgba(120, 85, 140, 0.08)", 
                    "0 0 15px rgba(120, 85, 140, 0.05), 0 0 30px rgba(120, 85, 140, 0.01)"  
                  ],
                  borderColor: [
                    "rgba(63, 63, 70, 0.4)",
                    "rgba(120, 85, 140, 0.3)",
                    "rgba(63, 63, 70, 0.4)"
                  ]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1 // 💡 Ritme denyut antar kartu bergantian secara berurutan
                }}
              >
                {/* Tag Waktu / Durasi */}
                <p className="text-[11px] font-mono font-medium tracking-wider text-neutral-500 dark:text-neutral-500 uppercase">
                  {item.date}
                </p>
                
                {/* Judul Kompetensi */}
                <h3 className="mt-1.5 text-base font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors duration-300 group-hover:text-purple-400">
                  {item.title}
                </h3>
                
                {/* Deskripsi Cerita */}
                <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify tracking-wide font-sans">
                  {item.description}
                </p>
              </motion.div>

            </MotionWrapper>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
