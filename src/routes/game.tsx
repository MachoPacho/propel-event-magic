import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE_META } from "@/lib/og-meta";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "Grow Hostinger — Event Manager Application" },
      {
        name: "description",
        content:
          "Play the independent Grow Hostinger game created as an additional initiative for the Event Manager application.",
      },
      { property: "og:title", content: "Grow Hostinger — Event Manager Application" },
      {
        property: "og:description",
        content:
          "Play the independent Grow Hostinger game created as an additional initiative for the Event Manager application.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://10m.online/game" },
      ...OG_IMAGE_META,
    ],
    links: [{ rel: "canonical", href: "https://10m.online/game" }],
  }),
  component: GrowHostingerPage,
});

function GrowHostingerPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/bonus"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to Bonus Initiative
      </Link>

      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Grow Hostinger
      </h1>

      <div className="mt-10 flex-1 overflow-hidden rounded-2xl border border-border bg-card">
        <iframe
          src="/game.html"
          title="Grow Hostinger game"
          className="h-[calc(100vh-220px)] w-full min-h-[600px]"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}
