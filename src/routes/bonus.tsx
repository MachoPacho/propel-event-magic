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
        This website and the game inside it are my own independent, additional initiative — not part
        of the official evaluated proposal or budget for the Event Manager position at Hostinger.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Why I built this
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            When I started working on this task, I didn't begin with a format — I began with a
            question: why does this actually matter, and why should it matter to the people
            celebrating it?
          </p>
          <p>
            Ten million live websites is a genuinely staggering number, but it's also almost
            impossible to actually feel. On paper, it's just digits scrolling by. That's the whole
            idea behind "10,000,000 Online" — the natural, much bigger sequel to Hostinger's own
            "Three. Two. Online." So instead of just stating the number, I wanted to let people
            experience it.
          </p>
          <p>
            That's where the game comes in. It's a small Cookie Clicker–style experience — click to
            deploy a website, then hand the work off to employees, AI, and infrastructure, and
            watch a number climb far beyond anything you could ever produce by hand. Along the way,
            it unlocks real pieces of Hostinger's own history, from a small company in Kaunas in
            2004 to the 10 million milestone being celebrated today.
          </p>
          <p>
            You won't be building Hostinger's actual websites here — but hopefully you'll walk away
            with a real sense of just how big that number is.
          </p>
        </div>
      </section>


      <div className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Ready to play?
        </h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Launch the full Grow Hostinger experience in a dedicated page.
        </p>
        <Link
          to="/game"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Play the Game →
        </Link>
      </div>
    </div>
  );
}
