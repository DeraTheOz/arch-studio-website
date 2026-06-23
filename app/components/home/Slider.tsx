"use client";

import { useEffect, useId, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";

import { HeroSlide } from "@/types/home";
import { transformSanityImage } from "@/lib/services/transformSanityImage";
import { containerVariants, itemVariants } from "@/lib/motion-helpers";

import SliderImage from "./SliderImage";
import Button from "../ui/Button";
import SliderButton from "./SliderButton";

interface SliderProps {
  slides: HeroSlide[];
}

export default function Slider({ slides }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingId = useId();
  const shouldReduceMotion = useReducedMotion();

  useEffect(
    function () {
      const interval = setInterval(() => {
        setCurrentIndex((current) =>
          current === slides.length - 1 ? 0 : current + 1,
        );
      }, 5000);

      return () => clearInterval(interval);
    },
    [slides.length],
  );

  if (!slides.length) return null;
  const currentSlide = slides[currentIndex];

  return (
    <motion.section
      className="media-container relative h-140 bg-arch-black md:h-180"
      aria-labelledby={headingId}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      variants={shouldReduceMotion ? undefined : containerVariants}>
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <article
            key={slide._key}
            className={`absolute inset-0 transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}>
            <motion.div
              key={isActive ? `${slide._key}-active` : `${slide._key}-inactive`}
              className="h-full w-full"
              initial={isActive && !shouldReduceMotion ? "hidden" : false}
              animate={isActive && !shouldReduceMotion ? "visible" : undefined}
              variants={shouldReduceMotion ? undefined : itemVariants}>
              <SliderImage image={transformSanityImage(slide.image)} />
            </motion.div>
          </article>
        );
      })}

      {/* IMAGE OVERLAY */}
      <span className="image-overlay" aria-hidden="true" />

      {/* HERO TEXT */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center"
        variants={shouldReduceMotion ? undefined : itemVariants}>
        <motion.div
          key={currentSlide._key}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          variants={shouldReduceMotion ? undefined : containerVariants}
          className="max-w-136 mx-8 md:ml-14 xl:ml-47.5">
          <motion.h1
            id={headingId}
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="text-5xl text-arch-white font-bold tracking-[-0.075rem] leading-12 sm:text-8xl sm:tracking-[-0.125rem] sm:leading-20">
            {currentSlide.title}
          </motion.h1>
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="mt-4 max-w-111 text-lg leading-6 text-white md:mt-3">
            {currentSlide.description}
          </motion.p>

          <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
            <Button
              href="/portfolio"
              variant="hero"
              ariaLabel="View our portfolio"
              className="mt-10">
              See Our Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SLIDER BUTTON */}
      <LayoutGroup id={`slider-controls-${headingId}`}>
        <motion.div
          className="absolute bottom-0 -left-20 z-20 hidden md:flex"
          aria-label="Featured project slides"
          variants={shouldReduceMotion ? undefined : itemVariants}>
          {slides.map((slide, index) => (
            <SliderButton
              key={slide.title}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              title={slide.title}
            />
          ))}
        </motion.div>
      </LayoutGroup>
    </motion.section>
  );
}
