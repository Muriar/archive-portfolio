import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400"
        variants={fadeUp}
      >
        {eyebrow}
      </motion.p>
      <motion.h2 
        className="mt-4 text-3xl font-semibold tracking-normal text-neutral-950 dark:text-stone-50 sm:text-4xl"
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {children ? (
        <motion.p 
          className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300"
          variants={fadeUp}
        >
          {children}
        </motion.p>
      ) : null}
    </div>
  );
}
