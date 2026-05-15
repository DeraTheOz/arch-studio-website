import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/assets/logo.svg";

interface LogoProps {
  variant?: "black" | "white";
}

export default function Logo({ variant = "black" }: LogoProps) {
  const filter = variant === "white" ? "invert brightness-0" : "";

  return (
    <Link
      href="/"
      className="inline-flex h-8 w-19.25 shrink-0 items-center sm:h-10 sm:w-24.5"
      aria-label="Arch Studio home">
      <Image
        src={LogoImage}
        alt="Arch Studio Logo"
        className={`h-auto w-full ${filter}`}
        priority
      />
    </Link>
  );
}
