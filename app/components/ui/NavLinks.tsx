"use client";

import Link from "next/link";
import { useEffect } from "react";

interface NavLinkProps {
  headerRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: (item: string) => boolean;
}

const navigationItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export default function NavLinks({
  headerRef,
  isOpen,
  isActive,
  setIsOpen,
}: NavLinkProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [headerRef, isOpen, setIsOpen]);

  return (
    <nav
      id="primary-navigation"
      className={`absolute top-24 right-0 z-25 w-[calc(100%-2rem)] max-w-85.75 bg-arch-very-light-grey py-10 pl-12 shadow-nav transition-all md:static md:block md:w-auto md:max-w-none md:bg-transparent md:p-0 md:shadow-none md:transition-colors ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-10 opacity-0 pointer-events-none md:visible md:translate-y-0 md:opacity-100 md:pointer-events-auto"
      }`}
      aria-label="Primary navigation">
      <ul className="flex flex-col gap-4.25 md:flex-row md:gap-14">
        {navigationItems.map((link) => {
          const isActiveLink = isActive(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[2rem] font-bold leading-10 text-arch-black transition-colors after:absolute after:right-1/5 after:-bottom-2 after:hidden after:h-px after:w-6 after:bg-arch-black after:content-[''] hover:text-arch-medium-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black md:whitespace-nowrap md:text-lg md:leading-6 md:hover:text-arch-black ${isActiveLink ? "text-arch-medium-grey after:inline-block md:text-arch-black pointer-events-none" : "md:text-arch-medium-grey"}`}
                aria-current={isActiveLink ? "page" : undefined}
                onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
