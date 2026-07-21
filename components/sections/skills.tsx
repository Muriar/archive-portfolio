"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeading } from "../section-heading";
import Image from "next/image";

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  return (
    <motion.section id="skills" className="border-b border-neutral-200 px-5 py-24 dark:border-neutral-800 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950">
      <motion.div className="mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}>
        <SectionHeading eyebrow="Skills" title="Software">
        &quot;Kumpulan software yang menyelamatkan proyek saya dari revisi tiada akhir. Di sinilah imajinasi diubah menjadi aset visual siap pakai, lengkap dengan tumpukan renderan di jam 3 pagi (tidak usah mandi).&quot;
        </SectionHeading>
        <motion.div
          className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* 🛠️ SINKRONISASI TIPE: Tambahkan tipe 'level: number' pada parameter map */}
          {skills.map((skill: { name: string; level: number; description: string; logo: string }) => {
            const isOpen = activeSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                layout
                onClick={() => toggleSkill(skill.name)}
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.15)",
                  borderColor: "rgba(16, 185, 129, 0.3)",
                  y: isOpen ? 0 : -2
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col justify-center rounded-xl border p-5 transition-colors duration-500 cursor-pointer overflow-hidden
                  ${isOpen 
                    ? "border-emerald-500/50 bg-white dark:border-emerald-500/40 dark:bg-neutral-900" 
                    : "border-neutral-300 bg-white/40 dark:border-neutral-800 dark:bg-neutral-900/40"
                  } text-neutral-950 dark:text-white`}
              >
                {/* Bagian Atas: Nama & Panah */}
                <div className="flex items-center justify-between w-full">
                  <h3 className={`text-sm font-sans font-semibold tracking-wide transition-colors duration-300 
                    ${isOpen ? "text-emerald-500 dark:text-emerald-400" : "group-hover:text-emerald-500 dark:group-hover:text-emerald-400"}`}>
                    {skill.name}
                  </h3>
                  <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs opacity-50 font-mono text-neutral-400"
                  >
                    ▼
                  </motion.span>
                </div>

                {/* Bagian Bawah: Mengembang Saat Diklik */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex flex-col items-center w-full"
                    >
                      {/* Logo Aplikasi */}
                      {skill.logo && (
                        <div className="h-14 w-14 mb-3 flex items-center justify-center p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-inner">
                          <Image 
                            src={skill.logo} 
                            alt={`${skill.name} Logo`} 
                            className="h-full w-full object-contain"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                          />
                        </div>
                      )}

                      {/* 🛠️ TAMBAHAN BARU: GARIS STATISTIK KEMAHIRAN (PROGRESS BAR) */}
                      <div className="w-full max-w-xs mb-5 px-2">
                        <div className="flex justify-between items-center mb-1 font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
                          <span>Tingkat Kemahiran</span>
                          <span className="text-emerald-500 dark:text-emerald-400 font-bold">{skill.level}%</span>
                        </div>
                        {/* Latar Belakang Garis */}
                        <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                          {/* Garis Isi yang Bergerak Mengisi Otomatis */}
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                          />
                        </div>
                      </div>
                      
                      {/* Teks Deskripsi */}
                      <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify font-sans tracking-wide">
                        {skill.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
