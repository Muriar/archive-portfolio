"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, AtSign, Camera, MessageCircle, Send } from "lucide-react";

type ContactChannel = {
  title: string;
  handle: string;
  note: string;
  href: string;
  icon: typeof Camera;
  accent: string;
};

const channels: ContactChannel[] = [
  { title: "Instagram", handle: "@qico.0", note: "Kabar terbaru, proses, dan hal-hal kecil yang sedang dibuat.", href: "https://www.instagram.com/qico.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: Camera, accent: "bg-[#ff6b4a]" },
  { title: "WhatsApp", handle: "Mari ngobrol", note: "Untuk pertanyaan cepat atau ajakan berkolaborasi.", href: "https://wa.me/6285929996070", icon: MessageCircle, accent: "bg-[#9eee55]" },
  { title: "Email", handle: "muhammadrizqiarsyadi@gmail.com", note: "Untuk brief, proposal, atau pesan yang lebih panjang.", href: "mailto:muhammadrizqiarsyadi@gmail.com", icon: AtSign, accent: "bg-[#a69cff]" },
];

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate overflow-hidden bg-[#f3efe7] text-[#171717]">
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-[#ffe366] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#a69cff] blur-3xl opacity-35" />

      <section className="relative mx-auto min-h-screen max-w-[1440px] px-5 pb-10 pt-28 sm:px-9 sm:pt-32 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(340px,.82fr)] lg:gap-20">
          <div>
            <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b4a]" /> Titip pesan / 06
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.08 }} className="mt-9 max-w-4xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[.78] tracking-[-0.07em]">
              Ada ide?<br />
              <span className="relative inline-block italic text-[#ff6b4a]">Mari bikin.
                <svg className="absolute -bottom-3 left-0 h-4 w-full text-[#171717]" viewBox="0 0 300 20" fill="none" aria-hidden="true"><path d="M3 15C72 2 203 2 296 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.28 }} className="mt-14 grid max-w-xl gap-8 border-t-2 border-[#171717] pt-5 sm:grid-cols-[1fr_auto]">
              <p className="text-base leading-7 text-[#4e4b46]">Punya proyek yang terasa seru, butuh teman berpikir, atau sekadar ingin menyapa? Kirimkan pesan. Saya selalu tertarik pada percakapan yang baik.</p>
              <span className="h-fit -rotate-3 bg-[#ffe366] px-3 py-2 text-center text-[10px] font-bold uppercase leading-4 tracking-[0.16em] shadow-[4px_4px_0_#171717]">Biasanya balas<br />dalam 1–2 hari</span>
            </motion.div>

            <motion.a href="mailto:muhammadrizqiarsyadi@gmail.com" whileHover={reduceMotion ? undefined : { y: -3, x: 3 }} className="mt-10 inline-flex items-center gap-3 bg-[#171717] px-5 py-4 text-sm font-medium text-[#f3efe7] shadow-[5px_5px_0_#ff6b4a] transition-shadow hover:shadow-[8px_8px_0_#ff6b4a]">
              <AtSign className="h-4 w-4" aria-hidden="true" /> muhammadrizqiarsyadi@gmail.com <Send className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </div>

          <motion.aside initial={{ opacity: 0, rotate: reduceMotion ? 0 : 2, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, rotate: -1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.18 }} className="self-end border-2 border-[#171717] bg-[#fffdf8] p-5 shadow-[9px_9px_0_#171717] sm:p-7 lg:mb-7">
            <div className="flex items-start justify-between border-b border-[#171717]/20 pb-5">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff6b4a]">Catatan kecil</p><p className="mt-2 font-serif text-2xl italic">Pilih cara yang paling nyaman.</p></div>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#9eee55] text-sm font-bold">!</span>
            </div>
            <div className="mt-1">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return <motion.a key={channel.title} href={channel.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: reduceMotion ? 0 : 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.35 + index * 0.09 }} className="group grid grid-cols-[40px_1fr_auto] gap-3 border-b border-[#171717]/15 py-5 last:border-0">
                  <span className={`grid h-10 w-10 place-items-center rounded-full ${channel.accent}`}><Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" /></span>
                  <span><span className="block text-sm font-bold">{channel.title}</span><span className="mt-0.5 block text-xs text-[#615e57]">{channel.handle}</span><span className="mt-2 block max-w-[260px] text-xs leading-5 text-[#615e57]">{channel.note}</span></span>
                  <ArrowUpRight className="mt-1 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </motion.a>;
              })}
            </div>
          </motion.aside>
        </div>

        <footer className="mt-20 flex items-center justify-between border-t border-[#171717]/25 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#615e57]">
          <span>© 2026 Muhammad Rizqi Arsyadi</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-[#171717] hover:text-[#ff6b4a]">Ke atas <span aria-hidden="true">↑</span></button>
        </footer>
      </section>
    </main>
  );
}
