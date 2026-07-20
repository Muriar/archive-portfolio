"use client";

import { timeline } from "@/lib/data";
import { motion } from "framer-motion";
import { MotionWrapper } from "../motion-wrapper";
import { SectionHeading } from "../section-heading";
import { stagger } from "@/lib/motion";

export function Timeline() {
  return (
    <section id="timeline" className="border-b border-neutral-200 px-5 py-24 dark:border-neutral-800 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <motion.div className="mx-auto max-w-5xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SectionHeading eyebrow="Timeline" title="Background">
          latar belakang saya, dari mulai awal saya mengenal dunia digital hingga sekarang. mungkin emang masih dikit, tapi saya akan terus berkembang sedikit demi sedikit.
        </SectionHeading>
        
        {/* Kontainer Garis Alur Lini Masa (Zig-Zag di Desktop, Sisi Kiri di Mobile) */}
        <div className="relative mt-20 max-w-5xl mx-auto before:absolute before:top-0 before:bottom-0 before:w-[2px] before:bg-neutral-300 dark:before:bg-neutral-900 before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 space-y-12 md:space-y-16">
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.title} 
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Indikator Titik Penghubung Tengah (Melingkar & Mengikuti Warna Tema) */}
                <span className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-50 dark:bg-neutral-950 z-20 border border-neutral-400 dark:border-neutral-800 transition-all duration-500 group">
                  <span 
                    style={{ backgroundColor: item.borderColor }}
                    className="h-2 w-2 rounded-full transition-all duration-500 shadow-[0_0_10px_currentColor]" 
                  />
                </span>

                {/* Wrapper Lebar Kartu */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <MotionWrapper 
                    className="relative group" 
                    delay={index * 0.1}
                    // Arah masuk yang bervariasi: Kartu kiri masuk dari kiri, kartu kanan masuk dari kanan
                    variants={{
                      hidden: { opacity: 0, x: isEven ? 40 : -40 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                  >
                    {/* BINGKAI KARTU DENGAN SOFTGLOW DIKONTROL VARIABEL DATA */}
                    <motion.div 
                      className="p-6 rounded-2xl border bg-white/40 backdrop-blur-md dark:bg-neutral-950/40 transition-all duration-500 hover:-translate-y-1 hover:bg-white/70 dark:hover:bg-neutral-900/10 cursor-default"
                      style={{
                        borderColor: item.borderColor
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 15px ${item.glowColor}, 0 0 30px rgba(0, 0, 0, 0.01)`, 
                          `0 0 35px ${item.borderColor}, 0 0 50px rgba(0, 0, 0, 0.05)`, 
                          `0 0 15px ${item.glowColor}, 0 0 30px rgba(0, 0, 0, 0.01)`  
                        ]
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                    >
                      {/* Tag Waktu / Durasi */}
                      <p className="text-[10px] font-mono font-semibold tracking-wider text-neutral-500 dark:text-neutral-500 uppercase">
                        {item.date}
                      </p>
                      
                      {/* Judul Kompetensi */}
                      <h3 className={`mt-2 text-lg font-sans font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors duration-300 ${item.accentColor}`}>
                        {item.title}
                      </h3>
                      
                      {/* Deskripsi Cerita */}
                      <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify tracking-wide font-sans font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </MotionWrapper>
                </div>

                {/* Sisi Kosong untuk Penyeimbang Grid pada Layar Desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}