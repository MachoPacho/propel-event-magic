import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/bonus")({
  head: () => ({
    meta: [
      { title: "Bonus Initiative — Event Manager Application" },
      {
        name: "description",
        content:
          "An independent, additional initiative created alongside the official Hostinger Event Manager application.",
      },
      { property: "og:title", content: "Bonus Initiative — Event Manager Application" },
      {
        property: "og:description",
        content:
          "An independent, additional initiative created alongside the official Hostinger Event Manager application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BonusPage,
});

function BonusPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to landing
      </Link>

      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Bonus Initiative
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        This website, and the game reserved below, are my own independent, additional initiative.
        They are not part of the official evaluated proposal or budget for the Event Manager
        position at Hostinger.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
        <iframe
          src="/game.html"
          title="Server Clicker game"
          className="h-[780px] w-full md:h-[700px]"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <div className="mt-4 text-center">
        <a
          href="/game.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Open in fullscreen
        </a>
      </div>
    </div>
  );
}
