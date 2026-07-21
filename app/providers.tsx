"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const TransitionContext = createContext<{
  navigasiKe: (href: string) => void;
} | null>(null);

export function TerapkanTransisi({ children }: { children: React.ReactNode }) {
  const router = useNextRouter();
  const pathname = usePathname();
  
  const [sedangTransisi, setSedangTransisi] = useState(false);

  const navigasiKe = (href: string) => {
    // Jika rute tujuan sama dengan halaman saat ini, abaikan
    if (href === pathname) return;

    // 1. Ambil data halaman tujuan di latar belakang secara agresif
    router.prefetch(href); 

    // 2. Naikkan tirai menutup layar
    setSedangTransisi(true); 

    // 3. Tahan tirai selama 600ms (menunggu animasi naik selesai), lalu ganti halaman
    setTimeout(() => {
      router.push(href);
      
      // 4. Setelah rute didorong, beri jeda 250ms agar halaman baru siap, lalu turunkan tirai
      setTimeout(() => {
        setSedangTransisi(false);
      }, 250);
    }, 600); 
  };

  return (
    <TransitionContext.Provider value={{ navigasiKe }}>
      {children}
      <AnimatePresence>
        {sedangTransisi && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }} // Kurva sinematik persis hnh.my.id
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d0d] border-t border-neutral-800"
          >
            {/* Konten Loading Teks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full border-2 border-t-neutral-100 border-neutral-800 animate-spin" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 font-mono animate-pulse">
                LOADING SYSTEM...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransitionRouter() {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("Gunakan di dalam TerapkanTransisi provider");
  return context;
}
