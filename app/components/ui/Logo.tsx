import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/assets/logo.svg";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const filter = variant === "light" ? "invert brightness-0" : "";

  return (
    <Link
      href="/"
      className="inline-flex h-8 w-19.25 shrink-0 items-center md:h-10 md:w-24.5"
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
