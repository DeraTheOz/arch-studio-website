"use client";

import { useEffect, useId, useState } from "react";

import { HeroSlide } from "@/types/home";
import { transformSanityImage } from "@/lib/services/transformSanityImage";

import SliderImage from "./SliderImage";
import Button from "../ui/Button";
import SliderButton from "./SliderButton";

interface SliderProps {
  slides: HeroSlide[];
}

export default function Slider({ slides }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingId = useId();

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
    <section
      className="media-container relative h-140 bg-arch-black md:h-180"
      aria-labelledby={headingId}>
      {slides.map((slide, index) => (
        <article
          key={slide._key}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentIndex}>
          <SliderImage image={transformSanityImage(slide.image)} />
        </article>
      ))}

      {/* IMAGE OVERLAY */}
      <span className="image-overlay" aria-hidden="true" />

      {/* HERO TEXT */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-136 mx-8 md:ml-14 xl:ml-47.5">
          <h1
            id={headingId}
            className="text-5xl text-arch-white font-bold tracking-[-0.075rem] leading-12 sm:text-8xl sm:tracking-[-0.125rem] sm:leading-20">
            {currentSlide.title}
          </h1>
          <p className="mt-4 max-w-111 text-lg leading-6 text-white md:mt-3">
            {currentSlide.description}
          </p>

          <Button
            href="/portfolio"
            variant="hero"
            ariaLabel="View our portfolio"
            className="mt-10">
            See Our Portfolio
          </Button>
        </div>
      </div>

      {/* SLIDER BUTTON */}
      <div
        className="absolute bottom-0 -left-20 z-20 hidden md:flex"
        aria-label="Featured project slides">
        {slides.map((slide, index) => (
          <SliderButton
            key={slide.title}
            index={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            title={slide.title}
          />
        ))}
      </div>
    </section>
  );
}
