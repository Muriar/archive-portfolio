"use client";

import { MotionWrapper } from "../motion-wrapper";
import { SectionHeading } from "../section-heading";
import {stagger} from "@/lib/motion";
import { motion } from "framer-motion";

import Image from "next/image";
import logoInstagramImg from "../../public/igaje.jpg";
import logoWhatsappImg from "../../public/Whatsapp.jpg";
import logoEmailImg from "../../public/emailaje.jpg";

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <MotionWrapper>
          <div className="flex flex-col items-center">
            
            {/* Judul Section */}
            <motion.div className="mb-12 text-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <SectionHeading eyebrow="Contact" title="Tell me what you need">
                Send a DM or email if you have a project in mind, or just want to say hi. I'm always online.
              </SectionHeading>
            </motion.div>

            {/* 🛠️ UBAH TATA LETAK: Menggunakan Grid agar menyamping di laptop (lg:grid-cols-3) */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              
              {/* 1. KARTU EMAIL (Hover Glow Merah) */}
              <a 
                href="mailto:muhammadrizqiarsyadi@gmail.com" 
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                    <Image src={logoEmailImg} alt="email" className="h-7 w-7 object-cover rounded-md" placeholder="blur" />
                  </div>
                  <div className="text-neutral-500 group-hover:text-red-400 transition-colors duration-300 text-lg">➔</div>
                </div>
                <div className="mt-8 text-left">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400">Mail Me</div>
                  <div className="text-lg font-serif font-medium mt-1">Email</div>
                </div>
              </a>

              {/* 2. KARTU WHATSAPP (Hover Glow Hijau) */}
              <a 
                href="https://wa.me/6285929996070" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                    <Image src={logoWhatsappImg} alt="whatsapp" className="h-7 w-7 object-cover rounded-md" placeholder="blur" />
                  </div>
                  <div className="text-neutral-500 group-hover:text-emerald-400 transition-colors duration-300 text-lg">➔</div>
                </div>
                <div className="mt-8 text-left">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400">Chat Me</div>
                  <div className="text-lg font-serif font-medium mt-1">WhatsApp</div>
                </div>
              </a>

              {/* 3. KARTU INSTAGRAM (Hover Glow Ungu) */}
              <a 
                href="https://www.instagram.com/qico.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md p-6 text-white transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] md:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                    <Image src={logoInstagramImg} alt="instagram" className="h-7 w-7 object-cover rounded-md" placeholder="blur" />
                  </div>
                  <div className="text-neutral-500 group-hover:text-purple-400 transition-colors duration-300 text-lg">➔</div>
                </div>
                <div className="mt-8 text-left">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400">Follow Me</div>
                  <div className="text-lg font-serif font-medium mt-1">Instagram</div>
                </div>
              </a>

            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
