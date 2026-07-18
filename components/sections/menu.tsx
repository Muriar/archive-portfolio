"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { menu } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";

export default function Menu() {
  // 🛠️ PEMETAAN WARNA INNER GLOW GRADIENT (SESUAI GAMBAR REFERENSI ANDA)
  const getMenuStyles = (label: string) => {
    switch (label) {
      case "Profil": 
         return "border-blue-500/30 bg-gradient-to-b from-blue-950/20 to-neutral-950/90 text-blue-400 shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]";
      case "Skills": 
        return "border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-neutral-950/90 text-emerald-400 shadow-[inset_0_0_20px_rgba(16,185,129,0.15)]";
      case "Timeline": 
        return "border-purple-500/30 bg-gradient-to-b from-purple-950/20 to-neutral-950/90 text-purple-400 shadow-[inset_0_0_20px_rgba(168,85,247,0.15)]";
      case "Projects": 
        return "border-orange-500/30 bg-gradient-to-b from-orange-950/20 to-neutral-950/90 text-orange-400 shadow-[inset_0_0_20px_rgba(249,115,22,0.15)]";
      case "Contact": 
        return "border-white/30 bg-gradient-to-b from-white/20 to-neutral-950/90 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15)]";
      default: 
        return "border-neutral-800 bg-neutral-900 text-white";
    }
  };

  // PEMETAAN SOFTGLOW TAMBAHAN SAAT CURSOR DIARAHKAN (HOVER EFFECT)
  const getHoverGlow = (label: string) => {
    switch (label) {
      case "Profil": return "rgba(59, 130, 246, 0.3)";
      case "Skills": return "rgba(16, 185, 129, 0.3)";
      case "Timeline": return "rgba(168, 85, 247, 0.3)";
      case "Projects": return "rgba(249, 115, 22, 0.3)";
      case "Contact": return "rgba(255, 255, 255, 0.15)";
      default: return "rgba(255, 255, 255, 0.1)";
    }
  };

  return (
    <section id="menu" className="border-b border-neutral-200 px-5 py-24 dark:border-neutral-800 sm:px-6 lg:px-8 bg-neutral-950">
      <motion.div  className="mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeading eyebrow="My Portfolio" title="Beyond Creativity">
         Saran dong ditambahin apaan lagi biar lebih menarik dan lengkap. 
         btw jangan buka di desktop ya, blom jadi soalnya versi desktopnya.
        </SectionHeading>
        
        <motion.div
          className="mx-auto mt-12 grid max-w-xl grid-cols-2 gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {menu.map((item, index) => {
            const currentStyle = getMenuStyles(item.label);
            const glowColor = getHoverGlow(item.label);

            return (
              <Link key={item.label} href={item.href} className="contents">
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  
                  // Efek Angkat dan Pendaran Eksternal saat Cursor diarahkan / disentuh
                  initial={{ boxShadow: "0 0 0px rgba(0,0,0,0)", y: 0 }}
                  whileHover={{ 
                    boxShadow: `0 0 25px ${glowColor}, 0 0 50px ${glowColor}`,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className={`group relative flex min-h-[85px] items-center justify-center rounded-2xl border px-4 py-4 text-center backdrop-blur-md cursor-pointer transition-all duration-300
                    ${currentStyle}
                    ${index === 4 ? "col-span-2" : ""}`}
                >
                  <h3 className="text-xs font-sans font-semibold tracking-wide transition-all duration-300 group-hover:tracking-wider">
                    {item.label}
                  </h3>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
