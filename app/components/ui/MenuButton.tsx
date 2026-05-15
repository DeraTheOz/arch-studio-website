"use client";

import Image from "next/image";
import CloseIcon from "@/public/assets/icons/icon-close.svg";
import HamburgerIcon from "@/public/assets/icons/icon-hamburger.svg";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuButton({ isOpen, setIsOpen }: MenuProps) {
  return (
    <button
      type="button"
      className="grid cursor-pointer place-items-center border-0 bg-transparent transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black sm:hidden"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      onClick={() => setIsOpen((current) => !current)}>
      <Image
        src={isOpen ? CloseIcon : HamburgerIcon}
        alt=""
        aria-hidden="true"
      />
    </button>
  );

  // return (
  //   <button
  //     type="button"
  //     className="grid cursor-pointer place-items-center border-0 bg-transparent sm:hidden transition-all"
  //     aria-controls="primary-navigation"
  //     aria-expanded={isOpen}
  //     aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
  //     onClick={() => setIsOpen((current) => !current)}>
  //     <Image
  //       src={isOpen ? CloseIcon : HamburgerIcon}
  //       alt="Menu action button"
  //       aria-hidden="true"
  //     />
  //   </button>
  // );
}
