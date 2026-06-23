import { Metadata } from "next";
import Button from "./components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Arch Studio",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="site-container" aria-labelledby="error-title">
      <div className="eyebrow-line">
        <h1 id="error-title" className="heading-xl">
          Page not found
        </h1>

        <p className="body-copy my-6 max-w-md">
          The page you are looking for is not available. Return to the portfolio
          to continue exploring Arch Studio projects.
        </p>

        <Button href="/portfolio">Back to Portfolio</Button>
      </div>
    </section>
  );
}
