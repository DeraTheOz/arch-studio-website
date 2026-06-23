"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { ResponsiveImageSet } from "@/types/types";
import { containerVariants, itemVariants } from "@/lib/motion-helpers";
import ResponsiveImage from "./ResponsiveImage";

type SubpageHeroProps = {
  label: string;
  heading: string;
  children: ReactNode;
  image: ResponsiveImageSet;
};

export default function SubpageHero({
  label,
  heading,
  children,
  image,
}: SubpageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="media-container">
      <motion.div
        className="relative h-auto md:h-180"
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
        variants={shouldReduceMotion ? undefined : containerVariants}>
        {/* Image Container */}
        <motion.div
          className="relative h-60 bg-arch-black md:h-full md:w-full xl:w-158.75"
          variants={shouldReduceMotion ? undefined : itemVariants}>
          <ResponsiveImage
            image={image}
            priority
            sizes={{
              mobile: "100vw",
              tablet: "calc(100vw - 12.125rem)",
              desktop: "635px",
            }}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/35" aria-hidden="true" />
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="relative -mt-11 ml-0 w-[calc(100%-2rem)] bg-arch-white pt-16 pr-8 pl-8 md:absolute md:right-0 md:bottom-0 md:mt-0 md:w-128.5 md:pt-0 md:pr-0 md:pl-14 xl:w-157 xl:pl-45.5"
          variants={shouldReduceMotion ? undefined : itemVariants}>
          {/* Label */}
          <motion.p
            className="hidden absolute right-0 -top-22 text-arch-very-light-grey font-bold leading-50 tracking-[-0.1875rem] md:block md:text-[9rem] xl:text-[15.625rem] xl:tracking-[-0.3125rem]"
            aria-hidden="true"
            variants={shouldReduceMotion ? undefined : itemVariants}>
            {label}
          </motion.p>

          {/* Text Content */}
          <motion.div
            className="eyebrow-line md:pt-32 xl:pt-42"
            variants={shouldReduceMotion ? undefined : itemVariants}>
            <h1 className="heading-xl max-w-111.5">{heading}</h1>
            <div className="body-copy mt-6 max-w-111.5">{children}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
