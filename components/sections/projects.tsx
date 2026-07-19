"use client";

import { motion } from "framer-motion";
import { Karya, getYouTubeId } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeading } from "../section-heading";

export function Projects() {
  return (
    <section id="Karya" className="border-b border-neutral-200 px-5 py-24 dark:border-neutral-800 sm:px-6 lg:px-8">
      <motion.div className="mx-auto max-w-6xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible">
        <SectionHeading eyebrow="Galeri Karya" title="Masih dalam tahap pengembangan ">
          belom jadi, gatau mau pake video apaan
        </SectionHeading>
      </motion.div>
    </section>
  );
}
