import Logo from "./Logo";
import FooterButton from "./FooterButton";
import FooterNavLinks from "./FooterNavLinks";

export default function Footer() {
  return (
    <footer className="mt-48 mb-12 sm:mt-50 sm:mb-0">
      <div className="relative mx-8 flex h-95.75 flex-col items-center gap-8 bg-arch-very-light-grey pb-12 sm:mx-0 sm:h-30 sm:w-160 sm:flex-row sm:gap-10 sm:p-0 lg:h-50 lg:w-246 lg:gap-21.25">
        <div className="absolute top-0 left-1/2 inline-flex size-30 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-arch-black sm:static sm:translate-x-0 sm:translate-y-0 lg:size-50">
          <Logo variant="white" />
        </div>

        <FooterNavLinks />

        <FooterButton />
      </div>
    </footer>
  );
}
