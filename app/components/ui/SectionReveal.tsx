"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { revealTransition } from "@/lib/motion-helpers";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

function getSectionVariants(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 36,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...revealTransition,
        delay,
      },
    },
  };
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  amount = 0.24,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={getSectionVariants(delay)}>
      {children}
    </motion.div>
  );
}
