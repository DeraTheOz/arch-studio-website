import type { ReactNode } from "react";
import type { Transition, Variants } from "motion/react";

// HERO / SUB-HERO
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  },
};

// SECTIONS
export type StaggeredRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
};

export type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
};

export const revealTransition: Transition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

export const revealItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

export function getStaggeredVariants(delay: number, stagger: number): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };
}
