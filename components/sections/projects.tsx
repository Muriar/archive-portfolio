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
        <SectionHeading eyebrow="Selected Work" title="Projects with purpose and restraint">
          A collection of my best motion graphics and visual effects projects.
        </SectionHeading>
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {Karya.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <div className="mb-10 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{project.year}</span>
                  <span className="transition group-hover:translate-x-1">Open</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-normal">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
