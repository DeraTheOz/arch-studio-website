import Image from "next/image";
import Link from "next/link";

import ArrowIcon from "@/public/assets/icons/icon-arrow.svg";

export default function FooterButton() {
  return (
    <Link
      href="/portfolio"
      className="inline-flex h-18 w-63 items-center justify-center gap-6 bg-arch-black font-bold leading-6.25 text-arch-white transition-colors hover:bg-arch-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:translate-x-1/2"
      aria-label="See our portfolio">
      <span>See Our Portfolio</span>
      <Image
        src={ArrowIcon}
        alt=""
        aria-hidden="true"
        className="h-5 w-6.5 invert"
      />
    </Link>
  );
}
