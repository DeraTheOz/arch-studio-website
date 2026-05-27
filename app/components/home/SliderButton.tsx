"use client";

interface SliderButtonProps {
  index: number;
  title: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SliderButton({
  index,
  title,
  currentIndex,
  setCurrentIndex,
}: SliderButtonProps) {
  const isActive = index === currentIndex;

  return (
    <button
      key={title}
      type="button"
      className={`grid size-20 place-items-center text-lg font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black cursor-pointer ${
        isActive
          ? "bg-arch-black text-arch-white"
          : "bg-arch-white text-arch-medium-grey hover:bg-arch-very-light-grey hover:text-arch-black"
      }`}
      aria-label={`Show ${title}`}
      aria-pressed={index === currentIndex}
      onClick={() => setCurrentIndex(index)}>
      {index + 1}
    </button>
  );
}
