import Logo from "./Logo";
import FooterButton from "./FooterButton";
import FooterNavLinks from "./FooterNavLinks";

export default function Footer() {
  return (
    <footer className="mt-36 md:mt-52 xl:mt-50">
      <div className="footer-container">
        <div className="relative h-95.75 flex flex-col items-center gap-8 bg-arch-very-light-grey pb-12 md:h-30 md:flex-row md:gap-10 md:w-160 md:p-0 xl:w-246 xl:h-50 xl:gap-20">
          <div className="absolute top-0 left-1/2 inline-flex size-30 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-arch-black md:static md:translate-x-0 md:translate-y-0 xl:size-50">
            <Logo variant="light" />
          </div>

          <FooterNavLinks />

          <FooterButton />
        </div>
      </div>
    </footer>
  );
}
