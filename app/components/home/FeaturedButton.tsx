import ArrowIcon from "@/public/assets/icons/icon-arrow.svg";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedButton() {
  return (
    <Link
      href="/portfolio"
      className="inline-flex items-center justify-center gap-6 font-bold w-full sm:w-42.25 h-18 text-arch-white bg-arch-black transition-colors hover:bg-arch-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black"
      aria-label="See all featured images">
      <span>See All</span>
      <Image
        src={ArrowIcon}
        alt=""
        width={24}
        height={18}
        aria-hidden="true"
        className="invert"
      />
    </Link>
  );
}
