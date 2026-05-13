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
      className="pointer-events-none absolute top-0 left-9.75 hidden h-68 w-6 text-arch-light-grey sm:block xl:left-[max(1.5rem,calc((100vw-min(100vw-2rem,69.375rem))/2-6.375rem))]"
      aria-hidden="true">
      <span className="absolute top-0 left-2.5 h-26 w-px bg-arch-light-grey" />
      <span className="absolute top-38 left-0 text-lg leading-6 font-medium tracking-[1.125rem] uppercase [writing-mode:vertical-rl]">
        {getPageIndicator()}
      </span>
    </div>
  );
}
