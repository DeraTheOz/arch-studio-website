"use client";

interface PageIndicatorProps {
  pathname: string;
}

export default function PageIndicator({ pathname }: PageIndicatorProps) {
  function getPageIndicator(): string {
    if (pathname.startsWith("/portfolio")) return "PORTFOLIO";
    if (pathname.startsWith("/about")) return "ABOUT US";
    if (pathname.startsWith("/contact")) return "CONTACT";
    return "HOME";
  }

  return (
    <div className="page-kicker" aria-hidden="true">
      <span className="h-24 w-px bg-arch-light-grey" />
      <span className="text-lg font-medium leading-6 tracking-[1.125rem] uppercase [writing-mode:vertical-rl]">
        {getPageIndicator()}
      </span>
    </div>
  );
}
