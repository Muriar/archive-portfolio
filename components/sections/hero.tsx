"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import Image from "next/image";
import { Code, Film, Layers, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center border-b border-neutral-200 px-5 pt-12 pb-20 dark:border-neutral-800 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Grid Efek */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(10,10,10,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.04)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
      
      {/* Ornamen Cahaya Latar Belakang */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/5 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5 pointer-events-none" />

      <motion.div
        className="mx-auto w-full max-w-6xl flex flex-col items-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        
        {/* ======================================================== */}
        {/* URUTAN 1: DESIGNER (Selalu di paling atas, baik mobile maupun desktop) */}
        {/* ======================================================== */}
        <div className="text-center w-full max-w-3xl flex flex-col items-center space-y-4 mt-7 mb-8 lg:mb-12">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-3 py-1">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              Graphics & Motion Designer
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-2xl font-serif font-bold leading-tight tracking-tight text-neutral-950 dark:text-stone-50 sm:text-5xl"
          >
            Muhammad Rizqi Arsyadi
          </motion.h1>
        </div>

        {/* Pembungkus Grid Utama (Untuk mengatur layout konten di bawah Nama) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ======================================================== */}
          {/* URUTAN 2: FOTO & ICON TECH STACK */}
          {/* Mobile: Tampil setelah Nama | Desktop: Menjadi Kolom Kiri (lebar 5/12) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 w-full flex flex-col items-center gap-6 order-1">
            <motion.div
              variants={fadeUp}
              className="w-full max-w-[360px] lg:max-w-full rounded-2xl border border-neutral-200 bg-stone-50 dark:bg-neutral-950 p-4 shadow-xl dark:border-neutral-800/80"
            >
              {/* Komponen Foto 3:4 */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-neutral-700/30 bg-neutral-900 shadow-inner group">
                <Image
                  src="/Photo1.jpeg"
                  alt="Muhammad Rizqi Arsyadi"
                  fill
                  className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-white text-left space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold animate-pulse">
                    Active Status
                  </p>
                  <h4 className="text-sm font-medium tracking-[0.08em]">
                    Still Learning To Everything
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Micro-Card Tech Stack */}
            <motion.div 
              variants={fadeUp}
              className="grid grid-cols-3 gap-3 w-full max-w-[360px] lg:max-w-full text-xs font-medium"
            >
              <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                <Film className="w-4 h-4 mb-1 text-cyan-400" />
                <span>Motion</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                <Code className="w-4 h-4 mb-1 text-indigo-400" />
                <span>Code</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                <Layers className="w-4 h-4 mb-1 text-purple-400" />
                <span>UI/UX</span>
              </div>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* URUTAN 3 & 4: PERKENALAN & FILOSOFI */}
          {/* Mobile: Tampil setelah Foto | Desktop: Menjadi Kolom Kanan (lebar 7/12) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2">
            
            {/* Teks Perkenalan */}
            <motion.div variants={fadeUp} className="space-y-4 max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                Halo, saya bisa dipanggil <span className="text-neutral-950 dark:text-cyan-400 font-medium">Qico</span>. Seorang{" "}
                <span className="border-b-2 border-cyan-400/30 dark:text-stone-100 font-medium">Motion Graphics Designer</span> dan{" "}
                <span className="border-b-2 border-indigo-400/30 dark:text-stone-100 font-medium">Programmer</span> yang memiliki ketertarikan mendalam dalam menciptakan visual dinamis. Saya senang menggabungkan kreativitas dengan teknologi untuk menghasilkan karya yang mampu menyampaikan cerita dan meninggalkan kesan mendalam.
              </p>
            </motion.div>

            {/* Pemisah Konten Menuju Filosofi */}
            <div className="w-full border-t border-neutral-200 dark:border-neutral-800 pt-2" />

            {/* Bagian Filosofi */}
            <motion.div 
              variants={fadeUp}
              className="w-full rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 text-neutral-950 dark:border-neutral-800/60 dark:bg-neutral-900/30 backdrop-blur-sm text-left"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-cyan-500 dark:text-cyan-400">Filosofi Utama</span>
              </div>
              <h4 className="text-lg  font-medium mb-2 tracking-wide text-stone-300">
                Fortuna Audaces Iuvat
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 italic font-light">
                &quot;Keberuntungan berpihak pada yang berani. Keberanian seseorang dalam mengambil risiko dan bertindak tegas akan membuka jalan menuju kejayaan. Peluang besar hanya tercipta melalui aksi nyata.&quot;
              </p>
            </motion.div>

             <div className="w-full border-t border-neutral-200 dark:border-neutral-800 pt-1" />

            {/* =============================== */}
            {/* TAMBAHAN BARU: KARAKTER FAVORIT */}
            {/* =============================== */}
           <motion.div 
           variants={fadeUp}
           className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-2"
           >
              <motion.div 
              className="w-full max-w-[360px] lg:max-w-full rounded-2xl border border-neutral-200 bg-stone-50 dark:bg-neutral-950 p-4 shadow-xl dark:border-neutral-800/80"
              >
                <h3 className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase pb-3">Favorite Character</h3>

               {/* Efek Cahaya Latar Belakang Karakter */}
               <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-cyan-500/10 blur-xl rounded-full pointer-events-none" />

               {/* Bingkai Foto Karakter */}
               <div className="relative w-full sm:w-24 h-32 sm:h-24 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-800 flex-shrink-0">
                 <Image
                 src="/icarusPotrait.jpg"
                 alt="Karakter Favorit"
                 fill
                 className="object-cover"
                 />
               </div>

                {/* Teks Pendukung */}
                <div className="text-left">
                 <h5 className="text-sm font-medium text-stone-200 pt-2">Rewriting Icarus by Fiona</h5>
                 <p className="text-xs text-neutral-500 italic mt-0.5">
                  &apos;Icarus laughed as he fell.<br/>
                  Threw his head back and yelled into the winds, <br/>
                  arms spread wide,<br/>
                  teeth bared to the world.&apos;<br/><br/>
                  &quot;Di dunia yang menuntut kepatuhan, dia memilih menulis ulang takdir Icarus dengan caranya sendiri. Ketika lilin meleleh dan sayapnya hancur membara, tidak ada jeritan ketakutan, melainkan tawa bebas yang menantang angin. Baginya, rasa sakit dari lelehan lilin yang membakar kulit tak sebanding dengan kemegahan dunia keemasan yang berhasil dia sentuh. Dia tidak jatuh sebagai korban yang malang, melainkan sebagai pemberontak yang dengan sadar memilih hancur demi kebebasan mutlak.
                 &quot;</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Teks Status Footer Tetap di Bawah */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400/70 dark:text-neutral-500/60 whitespace-nowrap text-center">
          website masih berada dalam tahap pengembangan
        </p>
      </div>
    </section>
  );
}
