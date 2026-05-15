"use client";

import Link from "next/link";
import { useEffect } from "react";

interface NavLinkProps {
  navbarRef: React.RefObject<HTMLDivElement | null>;
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
  navbarRef,
  isOpen,
  isActive,
  setIsOpen,
}: NavLinkProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [navbarRef, isOpen, setIsOpen]);

  return (
    <nav
      id="primary-navigation"
      className={`absolute top-24 right-0 flex h-58.75 w-[calc(100%-2rem)] max-w-85.75 justify-start bg-arch-very-light-grey shadow-nav transition-all sm:relative sm:top-0 sm:h-auto sm:w-auto sm:max-w-none sm:bg-transparent sm:shadow-none sm:transition-colors ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-10 opacity-0 pointer-events-none sm:visible sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto"
      }`}
      aria-label="Primary navigation">
      <ul className="my-auto ml-12 flex flex-col items-start justify-center gap-4.25 sm:m-0 sm:flex-row sm:items-center sm:gap-14">
        {navigationItems.map((link) => {
          const isActiveLink = isActive(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[2rem] font-bold leading-10 text-arch-black transition-colors after:absolute after:right-1/5 after:-bottom-2 after:hidden after:h-px after:w-6 after:bg-arch-black after:content-[''] hover:text-arch-medium-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black sm:text-lg sm:leading-6 sm:hover:text-arch-black ${isActiveLink ? "text-arch-medium-grey after:inline-block sm:text-arch-black pointer-events-none" : "sm:text-arch-medium-grey"}`}
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
