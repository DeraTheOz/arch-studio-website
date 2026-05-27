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
  "inline-flex items-center justify-center gap-6 font-bold h-18 text-arch-white bg-arch-black transition-colors hover:bg-arch-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black";

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
      <span>{children}</span>
      <Image
        src={ArrowIcon}
        alt=""
        width={variant === "footer" ? 26 : 24}
        height={variant === "footer" ? 20 : 18}
        aria-hidden="true"
        className={
          variant === "footer"
            ? "h-5 w-6.5 invert"
            : variant === "map"
              ? ""
              : "invert"
        }
      />
    </Link>
  );
}
