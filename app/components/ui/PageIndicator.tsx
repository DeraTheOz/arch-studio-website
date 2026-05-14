"use client";

interface PageIndicatorProps {
  pathname: string;
}

export default function PageIndicator({ pathname }: PageIndicatorProps) {
  function getPageIndicator(): string {
    if (pathname.startsWith("/portfolio")) return "PORTFOLIO";
    if (pathname.startsWith("/about")) return "ABOUT";
    if (pathname.startsWith("/contact")) return "CONTACT";
    return "HOME";
  }

  return (
    <div
      className="hidden sm:flex flex-col items-center justify-between w-6 gap-8 text-arch-light-grey pointer-events-none mt-auto"
      aria-hidden="true">
      <span className="h-24 w-px bg-arch-light-grey" />
      <span className="text-lg leading-6 font-medium tracking-[1.125rem] uppercase [writing-mode:vertical-rl]">
        {getPageIndicator()}
      </span>
    </div>
  );
}
