"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import PageIndicator from "./PageIndicator";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  function isActive(href: string) {
    if (href === "/portfolio") {
      return pathname === href || pathname.startsWith("/portfolio/");
    }

    return pathname === href;
  }

  return (
    <header className="relative z-20 bg-arch-white" data-menu-open={isOpen}>
      <PageIndicator pathname={pathname} />

      <div
        className="mx-8 flex h-24 items-center justify-between gap-6 sm:mx-auto sm:h-38 sm:w-[calc(100%-12.125rem)] sm:items-start sm:justify-start sm:gap-16 sm:pt-14 xl:w-[min(calc(100%-2rem),69.375rem)]"
        ref={navbarRef}>
        <Logo />

        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

        <NavLinks
          navbarRef={navbarRef}
          isOpen={isOpen}
          isActive={isActive}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
}
