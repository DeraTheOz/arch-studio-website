"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import PageIndicator from "./PageIndicator";
import MenuButton from "./MenuButton";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  function isActive(href: string) {
    if (href === "/portfolio") {
      return pathname === href || pathname.startsWith("/portfolio/");
    }

    return pathname === href;
  }

  return (
    <header
      className="relative z-30 flex h-24 items-center md:h-38"
      data-menu-open={isOpen}>
      <PageIndicator pathname={pathname} />

      <div
        ref={headerRef}
        className="site-container flex items-center justify-between gap-8 md:justify-start md:gap-20">
        <Logo />

        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

        <NavLinks
          headerRef={headerRef}
          isOpen={isOpen}
          isActive={isActive}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
}
