"use client";

import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/assets/logo.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex h-8 w-19.25 shrink-0 items-center sm:h-10 sm:w-24.5"
      aria-label="Arch Studio home">
      <Image
        src={LogoImage}
        alt="Arch Studio Logo"
        className="h-auto w-full"
        priority
      />
    </Link>
  );
}
