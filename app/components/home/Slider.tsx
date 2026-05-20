"use client";

import { useId, useState } from "react";

import heroParamourMobile from "@/public/assets/home/mobile/image-hero-paramour.jpg";
import heroParamourTablet from "@/public/assets/home/tablet/image-hero-paramour.jpg";
import heroParamourDesktop from "@/public/assets/home/desktop/image-hero-paramour.jpg";

import heroSeraphMobile from "@/public/assets/home/mobile/image-hero-seraph.jpg";
import heroSeraphTablet from "@/public/assets/home/tablet/image-hero-seraph.jpg";
import heroSeraphDesktop from "@/public/assets/home/desktop/image-hero-seraph.jpg";

import heroFederalMobile from "@/public/assets/home/mobile/image-hero-federal.jpg";
import heroFederalTablet from "@/public/assets/home/tablet/image-hero-federal.jpg";
import heroFederalDesktop from "@/public/assets/home/desktop/image-hero-federal.jpg";

import heroTrinityMobile from "@/public/assets/home/mobile/image-hero-trinity.jpg";
import heroTrinityTablet from "@/public/assets/home/tablet/image-hero-trinity.jpg";
import heroTrinityDesktop from "@/public/assets/home/desktop/image-hero-trinity.jpg";

import SliderImage from "./SliderImage";
import SliderButton from "./SliderButton";
import Button from "../ui/Button";

export const slides = [
  {
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    images: {
      mobile: heroParamourMobile,
      tablet: heroParamourTablet,
      desktop: heroParamourDesktop,
      alt: "Project Paramour museum exterior with bold concrete geometry.",
    },
  },
  {
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    images: {
      mobile: heroSeraphMobile,
      tablet: heroSeraphTablet,
      desktop: heroSeraphDesktop,
      alt: "Seraph Station transit architecture with bright futuristic lines.",
    },
  },
  {
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    images: {
      mobile: heroFederalMobile,
      tablet: heroFederalTablet,
      desktop: heroFederalDesktop,
      alt: "Federal II Tower rising above a city street.",
    },
  },
  {
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    images: {
      mobile: heroTrinityMobile,
      tablet: heroTrinityTablet,
      desktop: heroTrinityDesktop,
      alt: "Trinity Bank Tower with sweeping curved architecture.",
    },
  },
] as const;

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingId = useId();
  const activeSlide = slides[activeIndex];

  return (
    <section
      className="media-container relative h-140 bg-arch-black md:h-180"
      aria-labelledby={headingId}>
      {slides.map((slide, index) => (
        <article
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}>
          <SliderImage image={slide.images} priority={index === 0} />
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
            {activeSlide.title}
          </h1>
          <p className="mt-4 max-w-111 text-lg leading-6 text-white md:mt-3">
            {activeSlide.description}
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
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title={slide.title}
          />
        ))}
      </div>
    </section>
  );
}
