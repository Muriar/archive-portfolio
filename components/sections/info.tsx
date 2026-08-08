"use client";

 import React from 'react';
 import { motion } from "framer-motion";
 import { stagger,fadeUp } from "@/lib/motion";

 interface infoItem {
    id : string;
    stats : string;
    label : string;
    icon : string;
 }

 export default function info() {
    const infoItem: infoItem[] = [
        { id: '1', icon: 'Kopi', stats: '100', label: 'Kopi sebanyak ini habis cuman untuk ni website' },
        { id: '2', icon: 'Bugs', stats: '5000', label: 'bug siyalan yang muncul terus terusan'},
        { id: '3', icon: 'Days', stats: '36', label: 'berapa banyak hari yang terhabiskan'},
        { id: '4', icon: 'Files', stats: '120', label: 'kebanyakan files, banyak sampahnya'}
    ];

    return (
         <section 
         id="info" 
         className="absolute w-full h-full mt-8 bg-slate-50 dark:bg-slate-900 rounded-2xl px-6">
      <div className="mx-auto">
        <motion.div
           variants={stagger}
           initial="hidden"
           animate="visible"

           className="text-center mb-10">
          <motion.h2 
            variants={fadeUp}
            className="text-3xl font-extrabold text-slate-800 dark:text-white sm:text-4xl">
            Dibalik Layar Website Ini
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            Beberapa fakta menarik selama proses perancangan dan vibe coding hwehwehwe.
          </motion.p>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl font-extrabold text-slate-800 dark:text-white sm:text-4xl">
            Blom Jadi
          </motion.h2>
         </motion.div>
    
         {/* mobile preview */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItem.map((Item) => (
            <motion.div 
            variants={fadeUp}
              key={Item.id} 
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-center transform transition duration-300 hover:scale-105"
            >
              {/* Tempat Ikon */}
              <motion.div
              variants={fadeUp}
              className="text-4xl mb-3" role="img" aria-label={Item.label}>
                {Item.icon}
              </motion.div>
              {/* Angka Statistik Utama */}
              <motion.div 
              variants={fadeUp}
              className="text-3xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
                {Item.stats}
              </motion.div>
              {/* Label Penjelasan */}
              <motion.p
              variants={fadeUp}
              className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                {Item.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    )
 }