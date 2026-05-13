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
      className={`absolute top-24 right-0 max-w-85.75 w-[calc(100%-2rem)] h-58.75 flex justify-start bg-arch-very-light-grey shadow-nav transition-all sm:transition-colors sm:bg-transparent sm:shadow-none sm:static ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0 pointer-events-none sm:visible sm:translate-y-0 sm:opacity-100 sm:pointer-events-auto"
      }`}
      aria-label="Primary navigation">
      <ul className="flex items-start justify-center flex-col w-61.75 h-38.5 mx-12 my-auto gap-4.25 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:w-78.25 sm:h-6.25 sm:m-0 sm:mt-2.5">
        {navigationItems.map((link) => {
          const isActiveLink = isActive(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-arch-black text-[2rem] leading-10 font-bold transition-colors hover:text-arch-medium-grey   sm:text-lg sm:hover:text-arch-black sm:leading-6 ${isActiveLink ? " text-arch-medium-grey sm:text-arch-black" : "sm:text-arch-medium-grey"}`}
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
