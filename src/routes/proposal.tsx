import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/proposal")({
  head: () => ({
    meta: [
      { title: "The Proposal — Event Manager Application" },
      {
        name: "description",
        content:
          "Event concept, logistics, employee experience, vendors, and budget for the Hostinger Event Manager application.",
      },
      { property: "og:title", content: "The Proposal — Event Manager Application" },
      {
        property: "og:description",
        content:
          "Event concept, logistics, employee experience, vendors, and budget for the Hostinger Event Manager application.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://propel-event-magic.lovable.app/proposal",
      },
    ],
  }),
  component: ProposalPage,
});

const SECTIONS = [
  {
    id: "concept",
    label: "Event Concept & Logistics",
    content: <ConceptContent />,
  },
  {
    id: "experience",
    label: "Employee Experience",
    content: "[Content coming soon]",
  },
  {
    id: "vendors",
    label: "Vendors & Budget",
    content: "[Content coming soon]",
  },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

function ConceptContent() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          The Idea
        </h3>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-card-foreground/80">
          <p>
            On September 25, 2026, as Hostinger crosses 10 million live websites, we're marking the
            moment with "10,000,000 Online" — a playful nod to our own "Three. Two. Online."
            tagline. At exactly 15:00 (Lithuania time), a synchronized counter reaches 10,000,000
            simultaneously on screens in Vilnius and Kaunas, followed by a toast and a group
            photo in both offices at once.
          </p>
          <p>
            <strong>Design note:</strong> for precision, the 15:00 moment is a pre-choreographed
            animation rather than a live feed of real signups — this guarantees Vilnius and Kaunas
            hit the milestone in perfect sync, at the exact communicated time. Employees experience
            it as a spontaneous celebration; this technical choice is disclosed here for full
            transparency.
          </p>
        </div>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Objectives & How We'll Measure Them
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-card-foreground/80">
          <li>
            <strong>Pride & culture</strong> — employees feel connected to a company-wide milestone,
            not just spectators.
          </li>
          <li>
            <strong>Employer brand</strong> — generates authentic, employee-driven content for social
            channels.
          </li>
          <li>
            <strong>One shared event, not three</strong> — Vilnius, Kaunas, and remote employees feel
            included, not separate.
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          Measured through: same-moment website visits, in-office attendance vs. invited,
          participation in the shared silent-disco experience, a short post-event pulse survey,
          and organic social posts within 48 hours.
        </p>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          High-Level Flow
        </h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm text-card-foreground/80">
            <thead className="bg-muted/50 text-card-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">What happens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">14:45</td>
                <td className="px-4 py-3">Slack reminder — gather near the screens</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">~14:58</td>
                <td className="px-4 py-3">"Almost there" nudge</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">15:00</td>
                <td className="px-4 py-3">
                  Counter hits 10,000,000 — toast, photos, social sharing encouraged
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">15:15–16:45</td>
                <td className="px-4 py-3">Back to normal work</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">16:45</td>
                <td className="px-4 py-3">Food ready</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">17:00</td>
                <td className="px-4 py-3">Everyone gathers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">17:15</td>
                <td className="px-4 py-3">Welcome words — Vilnius ↔ Kaunas connected live</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">17:30</td>
                <td className="px-4 py-3">Silent disco + live video link between offices begins</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">~19:15</td>
                <td className="px-4 py-3">Last song</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top whitespace-nowrap">19:30</td>
                <td className="px-4 py-3">Official close</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          <strong>Remote employees:</strong> rather than a live stream that only partially fits
          different time zones, remote colleagues receive a short (2–3 min) highlight video within
          24–48 hours, capturing the atmosphere of both offices.
        </p>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Preparation Timeline
        </h3>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          Roughly 6 weeks of lead time: vendor contracts and budget locked first, then catering and
          on-site content-ownership assigned, internal countdown communications rolled out over the
          following weeks, a full technical rehearsal the week before, and a post-event report with
          results within two weeks after.
        </p>
      </section>
    </div>
  );
}

function ProposalPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("concept");

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Link
          to="/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to landing
        </Link>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          The Proposal
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          A structured outline of the event concept, employee experience, and operational plan.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <nav className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`shrink-0 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>

        <section
          key={activeSection}
          className="animate-fade-in rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10"
        >
          {SECTIONS.map((section) =>
            section.id === activeSection ? (
              <div key={section.id}>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">
                  {section.label}
                </h2>
                <div className="mt-6 h-px w-full bg-border" />
                <div className="mt-6 text-base leading-relaxed text-card-foreground/80">
                  {section.content}
                </div>
              </div>
            ) : null,
          )}
        </section>
      </div>
    </div>
  );
}
