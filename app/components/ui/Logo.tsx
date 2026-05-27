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
      className="inline-flex shrink-0 items-center"
      aria-label="Arch Studio home">
      <Image
        src={LogoImage}
        alt="Arch Studio Logo"
        className={`h-8 w-auto md:h-10 ${filter}`}
        style={{ width: "auto" }}
      />
    </Link>
  );
}
