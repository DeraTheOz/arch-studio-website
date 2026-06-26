"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
  useReducedMotion,
} from "motion/react";

import CloseIcon from "@/public/assets/icons/icon-close.svg";
import HamburgerIcon from "@/public/assets/icons/icon-hamburger.svg";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuButtonTransition: Transition = {
  type: "tween",
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};

const menuIconVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction * 6,
    rotate: direction * -8,
    scale: 0.94,
  }),
  center: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction * -6,
    rotate: direction * 8,
    scale: 0.94,
  }),
};

export default function MenuButton({ isOpen, setIsOpen }: MenuProps) {
  const shouldReduceMotion = useReducedMotion();
  const iconDirection = isOpen ? 1 : -1;

  return (
    <motion.button
      type="button"
      className="relative grid size-8 place-items-center overflow-hidden transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black md:hidden"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
      transition={shouldReduceMotion ? { duration: 0 } : menuButtonTransition}
      onClick={() => setIsOpen((current) => !current)}>
      <AnimatePresence initial={false} custom={iconDirection}>
        <motion.span
          key={isOpen ? "close" : "menu"}
          className="absolute grid size-8 place-items-center"
          custom={iconDirection}
          variants={shouldReduceMotion ? undefined : menuIconVariants}
          initial={shouldReduceMotion ? { opacity: 0 } : "enter"}
          animate={shouldReduceMotion ? { opacity: 1 } : "center"}
          exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
          transition={
            shouldReduceMotion ? { duration: 0.12 } : menuButtonTransition
          }>
          <Image
            src={isOpen ? CloseIcon : HamburgerIcon}
            alt=""
            aria-hidden="true"
          />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
