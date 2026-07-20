"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Optional override for framer-motion variants */
  variants?: any;
};

export function MotionWrapper({
  children,
  className,
  delay = 0,
  variants = fadeUp
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
