"use client";

import { useEffect, useTransition } from "react";

import Button from "./components/ui/Button";
import SectionReveal from "./components/ui/SectionReveal";

type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: ErrorBoundaryProps) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error(error);
  }, [error]);

  function handleRetry() {
    startTransition(() => {
      unstable_retry();
    });
  }

  return (
    <SectionReveal delay={0.04}>
      <section className="site-container" aria-labelledby="error-title">
        <div className="eyebrow-line max-w-135">
          <p className="mb-4 text-sm font-bold tracking-[0.25rem] text-arch-medium-grey uppercase">
            Error
          </p>

          <h1 id="error-title" className="heading-xl">
            Something went wrong
          </h1>

          <p className="body-copy mt-6 max-w-md">
            We could not load this part of Arch Studio. Try refreshing the page
            or return to the portfolio to keep exploring our work.
          </p>

          {error.digest ? (
            <p className="mt-4 text-sm font-bold text-arch-medium-grey">
              Error reference: {error.digest}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleRetry}
              disabled={isPending}
              aria-busy={isPending}
              className="inline-flex h-18 items-center justify-center gap-3 bg-arch-black px-8 font-bold text-arch-white transition-colors hover:bg-arch-dark-grey disabled:cursor-wait disabled:bg-arch-dark-grey focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arch-black">
              {isPending ? (
                <span
                  className="size-4 animate-spin rounded-full border-2 border-arch-white border-r-transparent"
                  aria-hidden="true"
                />
              ) : null}
              {isPending ? "Retrying..." : "Try again"}
            </button>

            <Button href="/portfolio">Back to Portfolio</Button>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
