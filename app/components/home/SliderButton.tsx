"use client";

import { motion, type Transition, useReducedMotion } from "motion/react";

interface SliderButtonProps {
  index: number;
  title: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const activeIndicatorTransition: Transition = {
  type: "tween",
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const buttonInteractionTransition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 28,
  mass: 0.7,
};

export default function SliderButton({
  index,
  title,
  currentIndex,
  setCurrentIndex,
}: SliderButtonProps) {
  const isActive = index === currentIndex;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      className={`relative grid size-20 cursor-pointer place-items-center overflow-hidden text-lg font-bold transition-colors duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black ${
        isActive
          ? "text-arch-white"
          : "bg-arch-white text-arch-medium-grey hover:bg-arch-very-light-grey hover:text-arch-black"
      }`}
      aria-label={`Show ${title}`}
      aria-pressed={isActive}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : buttonInteractionTransition
      }
      onClick={() => setCurrentIndex(index)}>
      {isActive ? (
        <motion.span
          layoutId="slider-active-button"
          className="absolute inset-0 bg-arch-black"
          transition={
            shouldReduceMotion ? { duration: 0 } : activeIndicatorTransition
          }
          aria-hidden="true"
        />
      ) : null}
      <span className="relative z-10 transition-colors duration-500 ease-out">
        {index + 1}
      </span>
    </motion.button>
  );
}
