"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  getStaggeredVariants,
  RevealItemProps,
  revealItemVariants,
  StaggeredRevealProps,
} from "@/lib/motion-helpers";

export default function StaggeredReveal({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  amount = 0.3,
}: StaggeredRevealProps) {
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
      variants={getStaggeredVariants(delay, stagger)}>
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (as === "article") {
    if (shouldReduceMotion) {
      return <article className={className}>{children}</article>;
    }

    return (
      <motion.article className={className} variants={revealItemVariants}>
        {children}
      </motion.article>
    );
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={revealItemVariants}>
      {children}
    </motion.div>
  );
}
