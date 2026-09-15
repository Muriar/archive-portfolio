"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Braces, Coffee, Heart, Sparkles } from "lucide-react";

const notes = [
  { number: "01", title: "Dibuat pelan-pelan", text: "Halaman ini tumbuh dari rasa ingin tahu, potongan ide, dan banyak percobaan kecil.", icon: Coffee, color: "bg-[#ff7b5c]" },
  { number: "02", title: "Masih bergerak", text: "Tidak semua sudut sudah selesai. Itu memang bagian dari ceritanya—akan terus diperbaiki.", icon: Sparkles, color: "bg-[#ffd84d]" },
  { number: "03", title: "Ditulis dengan tangan", text: "Bukan template yang tinggal tempel: setiap bagian dicoba sampai terasa pas untuk ditinggali.", icon: Braces, color: "bg-[#9ee493]" },
];

export default function Info() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate overflow-hidden bg-[#e8edf5] text-[#18212f]">
      <div className="pointer-events-none absolute left-[8%] top-36 h-64 w-64 rounded-full bg-[#9ee493]/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#ffb49f]/45 blur-3xl" />

      <section className="relative mx-auto min-h-screen max-w-[1440px] px-5 pb-10 pt-28 sm:px-9 sm:pt-32 lg:px-14">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b5c]" /> Di balik layar / 07
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,.88fr)] lg:items-end lg:gap-20">
          <div>
            <motion.h1 initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.08 }} className="max-w-4xl font-serif text-[clamp(3.9rem,9.5vw,8.8rem)] leading-[.8] tracking-[-0.07em]">
              Ruang kecil<br />untuk <span className="italic text-[#4569c9]">hal besar.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.28 }} className="mt-11 max-w-xl border-l-2 border-[#18212f] pl-5 text-base leading-7 text-[#4d596b]">
              Website ini adalah rumah digital Muhammad Rizqi Arsyadi: tempat menyimpan karya, mencatat perjalanan, dan berbagi hal yang sedang dipelajari.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, rotate: reduceMotion ? 0 : -3, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, rotate: 2, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.18 }} className="border-2 border-[#18212f] bg-[#fffdf8] p-6 shadow-[9px_9px_0_#4569c9] sm:p-7">
            <div className="flex items-start justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4569c9]">Status ruang</p><p className="mt-2 font-serif text-3xl italic">Sedang bertumbuh.</p></div>
              <Heart className="h-8 w-8 fill-[#ff7b5c] text-[#18212f]" aria-hidden="true" />
            </div>
            <p className="mt-8 border-t border-[#18212f]/15 pt-4 text-sm leading-6 text-[#5f5b55]">Beberapa bagian mungkin berubah, berpindah, atau belum sempurna. Anggap saja kamu sedang melihat buku sketsa yang terbuka.</p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {notes.map((note, index) => {
            const Icon = note.icon;
            return (
              <motion.article key={note.number} initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.1 }} className="group relative min-h-64 border-2 border-[#18212f] bg-[#f8f6f0] p-6 transition-transform duration-300 hover:-translate-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#647087]">{note.number}</span>
                <span className={`absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full ${note.color} transition-transform duration-300 group-hover:rotate-12`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <div className="absolute bottom-6 left-6 right-6"><h2 className="font-serif text-3xl italic tracking-[-0.04em]">{note.title}</h2><p className="mt-3 text-sm leading-6 text-[#566174]">{note.text}</p></div>
              </motion.article>
            );
          })}
        </div>

        <footer className="mt-20 flex items-center justify-between border-t border-[#18212f]/25 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#5d687a]">
          <span>Terima kasih sudah mampir.</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[#18212f] hover:text-[#4569c9]">Kembali ke atas ↑</button>
        </footer>
      </section>
    </main>
  );
}
