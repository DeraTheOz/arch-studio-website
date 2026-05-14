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
    <header
      className="relative z-20 flex items-center h-24 sm:h-32"
      data-menu-open={isOpen}>
      <PageIndicator pathname={pathname} />

      <div
        ref={navbarRef}
        className="mx-8 w-full flex items-center justify-between gap-6 sm:items-start sm:justify-start sm:w-[calc(100%-10rem)] sm:mx-auto sm:ml-12 sm:gap-16">
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
