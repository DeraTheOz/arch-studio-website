"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export default function FooterNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="mt-auto md:mt-0" aria-label="Footer navigation">
      <ul className="flex flex-col items-center justify-center gap-8 font-bold leading-6.25 text-arch-medium-grey md:flex-row md:gap-12 xl:gap-15">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/portfolio"
              ? pathname === link.href || pathname.startsWith("/portfolio/")
              : pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-arch-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black ${isActive ? "pointer-events-none text-arch-black" : ""}`}
                aria-current={isActive ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
