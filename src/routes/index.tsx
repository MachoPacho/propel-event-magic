import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE_META } from "@/lib/og-meta";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "10,000,000 Online — Event Manager Application" },
      {
        name: "description",
        content:
          "An interactive landing experience for the Event Manager application at Hostinger.",
      },
      { property: "og:title", content: "10,000,000 Online — Event Manager Application" },
      {
        property: "og:description",
        content:
          "An interactive landing experience for the Event Manager application at Hostinger.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://10m.online/" },
      ...OG_IMAGE_META,
    ],
    links: [{ rel: "canonical", href: "https://10m.online/" }],
  }),
  component: LandingPage,
});

const START_VALUE = 9_998_000;
const TARGET_VALUE = 10_000_000;
const DURATION_MS = 2500;

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function formatNumber(value: number) {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function LandingPage() {
  const [displayValue, setDisplayValue] = useState(START_VALUE);
  const [isComplete, setIsComplete] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("landingIntroPlayed") === "true";

    if (alreadyPlayed || prefersReducedMotion) {
      setDisplayValue(TARGET_VALUE);
      setIsComplete(true);
      setShowCTAs(true);
      return;
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);
      const current = START_VALUE + (TARGET_VALUE - START_VALUE) * eased;

      setDisplayValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(TARGET_VALUE);
        setIsComplete(true);
        setTimeout(() => {
          setShowCTAs(true);
          sessionStorage.setItem("landingIntroPlayed", "true");
        }, 800);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="font-display text-[13vw] font-bold leading-none tracking-tighter tabular-nums sm:text-[11vw] md:text-[9vw] lg:text-[8rem]"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="bg-gradient-to-r from-glow-violet via-primary to-glow-blue bg-clip-text text-transparent">
            {formatNumber(displayValue)}
          </span>
        </div>

        <div
          className={`mt-4 transition-all duration-700 ${
            isComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Online
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all duration-700 sm:flex-row sm:gap-5 ${
            showCTAs ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Link
            to="/proposal"
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-base font-semibold text-primary-foreground shadow-[0_0_40px_-10px_var(--color-primary)] transition-all hover:bg-primary/90 hover:shadow-[0_0_50px_-8px_var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            The Proposal
          </Link>
          <Link
            to="/bonus"
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full border border-border bg-secondary/50 px-8 py-3.5 font-display text-sm font-medium text-secondary-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Bonus Initiative
          </Link>
        </div>
      </div>
    </section>
  );
}
