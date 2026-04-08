"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { GoogleStyleReview } from "@/components/home/google-style-review";
import type { ReviewSlide } from "@/lib/reviews-data";
import { cn } from "@/lib/utils";

type ReviewsVerticalCarouselProps = {
  reviews: ReviewSlide[];
  className?: string;
};

export function ReviewsVerticalCarousel({
  reviews,
  className,
}: ReviewsVerticalCarouselProps) {
  const n = reviews.length;
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const labelId = useId();
  const regionId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  if (n === 0) return null;

  const prevIdx = (index - 1 + n) % n;
  const nextIdx = (index + 1) % n;
  const prev = reviews[prevIdx]!;
  const current = reviews[index]!;
  const next = reviews[nextIdx]!;
  const showPeek = n > 1;

  const transitionPeek = !reduceMotion
    ? "motion-safe:transition motion-safe:duration-300 motion-safe:ease-out"
    : "";

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      <p id={labelId} className="sr-only">
        Carrusel de reseñas. Use los botones para ver la reseña anterior o
        siguiente.
      </p>
      <div className="flex flex-col items-center gap-3">
        <CarouselNavButton
          direction="up"
          onClick={goPrev}
          label="Reseña anterior"
          controlsId={regionId}
        />

        <div
          id={regionId}
          className="relative w-full px-0.5"
          role="region"
          aria-roledescription="carrusel"
          aria-labelledby={labelId}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              goPrev();
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              goNext();
            }
          }}
        >
          <div className="flex flex-col items-stretch">
            {showPeek ? (
              <div
                className={cn(
                  "relative z-[5] -mb-7 flex h-[3.75rem] w-full justify-center overflow-hidden rounded-t-lg border border-b-0 border-border/50 bg-muted/40",
                  transitionPeek,
                )}
                aria-hidden
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div
                      className={cn(
                        "w-full max-w-[calc(100%-0.25rem)] origin-bottom scale-[0.94] opacity-[0.82]",
                        transitionPeek,
                      )}
                    >
                      <GoogleStyleReview
                        authorName={prev.authorName}
                        authorSubtitle={prev.authorSubtitle}
                        timeAgo={prev.timeAgo}
                        rating={prev.rating}
                        localGuide={prev.localGuide}
                        source={prev.source ?? "google"}
                      >
                        {prev.text}
                      </GoogleStyleReview>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div
              className={cn(
                "relative z-20 w-full rounded-lg shadow-[0_10px_38px_-14px_rgba(0,0,0,0.2)]",
                showPeek && "-my-px",
                !reduceMotion &&
                  "motion-safe:transition motion-safe:duration-300 motion-safe:ease-out",
              )}
            >
              <GoogleStyleReview
                authorName={current.authorName}
                authorSubtitle={current.authorSubtitle}
                timeAgo={current.timeAgo}
                rating={current.rating}
                localGuide={current.localGuide}
                source={current.source ?? "google"}
              >
                {current.text}
              </GoogleStyleReview>
            </div>

            {showPeek ? (
              <div
                className={cn(
                  "relative z-[5] -mt-7 flex h-[3.75rem] w-full justify-center overflow-hidden rounded-b-lg border border-t-0 border-border/50 bg-muted/40",
                  transitionPeek,
                )}
                aria-hidden
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 overflow-hidden">
                  <div className="absolute left-0 right-0 top-0 flex justify-center">
                    <div
                      className={cn(
                        "w-full max-w-[calc(100%-0.25rem)] origin-top scale-[0.94] opacity-[0.82]",
                        transitionPeek,
                      )}
                    >
                      <GoogleStyleReview
                        authorName={next.authorName}
                        authorSubtitle={next.authorSubtitle}
                        timeAgo={next.timeAgo}
                        rating={next.rating}
                        localGuide={next.localGuide}
                        source={next.source ?? "google"}
                      >
                        {next.text}
                      </GoogleStyleReview>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <CarouselNavButton
          direction="down"
          onClick={goNext}
          label="Reseña siguiente"
          controlsId={regionId}
        />

        <p className="text-center text-xs text-muted-foreground" aria-live="polite">
          {index + 1} / {n}
        </p>
      </div>
    </div>
  );
}

function CarouselNavButton({
  direction,
  onClick,
  label,
  controlsId,
}: {
  direction: "up" | "down";
  onClick: () => void;
  label: string;
  controlsId: string;
}) {
  const Icon = direction === "up" ? ChevronUp : ChevronDown;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
        "bg-[#dadce0] text-[#5f6368] shadow-sm",
        "transition-colors hover:bg-[#bdc1c6] hover:text-[#3c4043]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "active:scale-[0.97]",
      )}
      aria-label={label}
      aria-controls={controlsId}
    >
      <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
    </button>
  );
}
