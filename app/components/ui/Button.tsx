import Image from "next/image";
import Link from "next/link";

import ArrowIcon from "@/public/assets/icons/icon-arrow.svg";

type ButtonVariant = "hero" | "about" | "featured" | "footer" | "map";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  hero: "w-63 leading-6.25",
  about: "w-46.75",
  featured: "w-full sm:w-42.25",
  footer:
    "w-63 leading-6.25 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:translate-x-1/2",
  map: "bg-transparent hover:bg-transparent w-37.75 h-6.25 !text-arch-black",
};

const baseStyles =
  "group relative inline-flex h-18 items-center justify-center gap-6 overflow-hidden font-bold text-arch-white bg-arch-black transition-[background-color,transform] duration-300 ease-out hover:bg-arch-dark-grey active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black";

export default function Button({
  children,
  href,
  variant = "hero",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const variantClasses = variantStyles[variant];
  const finalClassName = `${baseStyles} ${variantClasses} ${className}`.trim();

  return (
    <Link href={href} className={finalClassName} aria-label={ariaLabel}>
      <span className="relative z-10">{children}</span>
      <Image
        src={ArrowIcon}
        alt=""
        width={variant === "footer" ? 26 : 24}
        height={variant === "footer" ? 20 : 18}
        aria-hidden="true"
        className={`relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1 ${
          variant === "footer"
            ? "h-5 w-6.5 invert"
            : variant === "map"
              ? ""
              : "invert"
        }`}
      />
    </Link>
  );
}
