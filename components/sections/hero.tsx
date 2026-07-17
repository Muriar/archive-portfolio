"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-start border-b border-neutral-200 px-5 pt-12 pb-20 dark:border-neutral-800 sm:px-6 lg:px-8"
    >
      {/* Background Grid Efek */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(10,10,10,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.06)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]" />
      
      <motion.div
        className="mx-auto grid grid-cols-1 justify-items-center text-center w-full max-w-2xl gap-y-8"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        
        {/* 1. Posisi */}
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400 mt-6"
        >
          Graphics & Motion Designer
        </motion.p>

        {/* 2. NAMA */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl font-serif font-semibold leading-tight tracking-normal text-neutral-950 dark:text-stone-50 sm:text-4xl -mt-4"
        >
          Muhammad Rizqi Arsyadi
        </motion.h1>
        <motion.div 
          variants={fadeUp} 
          className="w-full flex justify-center"
        >
          <motion.div
            className="w-[90%] max-w-[600px] rounded-2xl border border-neutral-200 bg-stone-50 dark:bg-neutral-950 p-6 shadow-md dark:border-neutral-800"
            animate={{
              boxShadow: [
                "0 0 30px rgba(255, 255, 255, 0.04), 0 0 60px rgba(255, 255, 255, 0.01)", // Ukuran Terkecil (Mengecil)
                "0 0 65px rgba(255, 255, 255, 0.10), 0 0 120px rgba(255, 255, 255, 0.04)", // Ukuran Terbesar (Membesar)
                "0 0 30px rgba(255, 255, 255, 0.04), 0 0 60px rgba(255, 255, 255, 0.01)"  // Kembali ke awal
              ]
            }}
            transition={{           //ini animasi glownya
              duration: 4,          // Durasi 4 detik
              repeat: Infinity,     // Ngulang
              ease: "easeInOut"
            }}
          >
            {/* Bagian Atas: Komponen Foto 3:4 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] border border-neutral-700 bg-neutral-900 p-0 text-white shadow-2xl lg:rounded-[1.5rem]">
              <Image
                src="/Photo1.jpeg"
                alt="Muhammad Rizqi Arsyadi"
                fill
                className="object-cover z-0"
                priority
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              <div className="relative z-20 flex h-full flex-col justify-between p-6 text-white pointer-events-none text-left">
                <p className="text-sm uppercase tracking-[0.18em]">
                  Still Learning To Everything
                </p>
                <p className="text-sm uppercase tracking-[0.59em]">
                  Fortuna Audaces Iuvat
                </p>
              </div>
            </div>

            {/* Garis Pembatas Tipis Internal */}
            <div className="w-full border-t border-neutral-200 dark:border-neutral-800 my-6 opacity-60" />

            {/* Bagian Bawah: Teks Deskripsi */}
            <div className="text-center w-full px-2">
              <h3 className="text-2xl font-serif font-medium mb-3 text-neutral-950 dark:text-stone-50">
                Halo!!
              </h3>
              <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
                Halo, saya Muhammad Rizqi Arsyadi tapi bisa juga dipanggil Qico, seorang Motion Graphics dan Programmer yang memiliki ketertarikan
                dalam menciptakan visual yang dinamis dan menarik. Saya senang menggabungkan kreativitas dengan 
                teknologi untuk menghasilkan karya yang mampu menyampaikan cerita dan meninggalkan kesan.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400 mt-6 -mb-2"
        >
          Filosofi
        </motion.p>
         <motion.div 
           className="w-[90%] max-w-[600px] rounded-2xl border border-neutral-200     bg-stone-50 p-8 text-neutral-950 shadow-md dark:border-neutral-800  dark:bg-neutral-950 dark:text-white"
           animate={{
            boxShadow: [
              "0 0 30px rgba(255, 255, 255, 0.04), 0 0 60px rgba(255, 255, 255, 0.01)", 
              "0 0 65px rgba(255, 255, 255, 0.10), 0 0 120px rgba(255, 255, 255, 0.04)", 
              "0 0 30px rgba(255, 255, 255, 0.04), 0 0 60px rgba(255, 255, 255, 0.01)"  
            ]
           }}
           transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5 // delay
           }}
          >
          <h4 className="text-2xl font-serif font-medium mb-4 tracking-wide">
            Fortuna Audaces Iuvat
          </h4>
          <div className="w-full border-t border-neutral-200 dark:border-neutral-800 my-4 opacity-60" />
          <p className="text-sm md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 italic font-light px-2 md:px-4">
            "Berarti 'Keberuntungan berpihak pada mereka yang berani'. Kalimat ini menjadi landasan pengingat 
            bahwa dalam dunia kreatif dan teknologi yang terus berevolusi, keberanian untuk mencoba hal baru, 
            menghadapi kegagalan, dan keluar dari zona nyaman adalah kunci utama untuk menemukan peluang serta 
            menciptakan karya visual yang luar biasa."
          </p>
        </motion.div>
        
        <motion.hr 
          variants={fadeUp}
          className="w-full border-t border-neutral-200 dark:border-neutral-800 my-2"
        />
        
      </motion.div>
    </section>
  );
}
