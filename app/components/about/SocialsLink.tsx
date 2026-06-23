import { SOCIAL_ICONS } from "@/lib/helpers";

type SocialsLinkProps = {
  label: string;
  type: keyof typeof SOCIAL_ICONS;
  href?: string;
};

export default function SocialsLink({
  label,
  type,
  href = "#",
}: SocialsLinkProps) {
  const icon = SOCIAL_ICONS[type];

  return (
    <a
      href={href}
      className="grid size-10 place-items-center text-arch-white transition-colors hover:text-arch-light-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-white"
      aria-label={label}>
      <span
        aria-hidden="true"
        className="block bg-current"
        style={{
          width: icon.width,
          height: icon.height,
          mask: `url(${icon.src}) center / contain no-repeat`,
          WebkitMask: `url(${icon.src}) center / contain no-repeat`,
        }}
      />
    </a>
  );
}
