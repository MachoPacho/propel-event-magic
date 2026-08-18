import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    content: <ExperienceContent />,
  },
  {
    id: "vendors",
    label: "Vendors & Budget",
    content: <VendorsContent />,
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

function ExperienceContent() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Walking Through the Day
        </h3>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-card-foreground/80">
          <p>
            <strong>14:45–15:00 — The countdown.</strong> Employees gather near screens in both
            offices as the Slack reminder goes out. At 15:00, the counter hits 10,000,000 in perfect
            sync across Vilnius and Kaunas — a toast, a group photo, and a moment everyone is
            encouraged to share on social media.
          </p>
          <p>
            <strong>15:15–16:45 — Back to normal work.</strong> A deliberately short,
            non-disruptive break in the day — not a full afternoon off.
          </p>
          <p>
            <strong>16:45 onward — The celebration begins.</strong> Food is ready, everyone gathers
            in a shared space, and a short welcome connects both offices live before the main event
            starts.
          </p>
        </div>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Food & Drinks
        </h3>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          A shared catering partner serves both offices, so the experience feels identical in
          Vilnius and Kaunas rather than two separate parties. The final menu will be confirmed
          closer to the date based on dietary needs collected from attendees — the priority is
          quality over quantity, keeping the format casual and easy to enjoy while mingling.
        </p>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Activities & Engagement
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-card-foreground/80">
          <li>
            <strong>Silent disco</strong> — 200 headsets across both offices, two live DJs, and two
            listening channels: your local DJ, a cross-city channel to tune into the other office's
            DJ live, and a shared collaborative board that remote employees control in real time,
            projected as visuals behind the DJs.
          </li>
          <li>
            <strong>The Portal</strong> — a live video link between Vilnius and Kaunas lets
            employees see and wave to colleagues in the other office in real time. Paired with the
            quiet audio environment of the silent disco, it's an easy, low-pressure way to connect
            across cities.
          </li>
          <li>
            <strong>Freedom to move</strong> — headsets can be worn around the neck while mingling;
            there's no fixed seating or schedule beyond the two anchor moments (15:00 and
            17:00–19:30).
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Remote Employee Experience
        </h3>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          Full live participation in the evening isn't realistic across time zones, so remote
          colleagues get two dedicated ways in: real-time control of the visual channel powering the
          silent disco's shared board, and a short (2–3 minute) highlight video published within
          24–48 hours after the event, capturing the atmosphere of both offices.
        </p>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Memorable Takeaway
        </h3>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          Every in-office attendee receives a small physical gift to mark the milestone. Remote
          employees receive a digital voucher (an audiobook platform subscription, for example) — a
          takeaway that works just as well wherever they're logging in from.
        </p>
      </section>
    </div>
  );
}

function VendorsContent() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Budget Priorities
        </h3>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          With a fixed €10,000 budget, spending was prioritized in this order:{" "}
          <strong>equipment and technical setup first</strong> (the silent disco and Portal link are
          what make the "one event, two cities" concept actually work),{" "}
          <strong>then music licensing</strong> (a legal requirement for any live DJ setup),{" "}
          <strong>then the employee takeaway</strong>, <strong>then catering</strong>, and{" "}
          <strong>decorations/atmosphere last</strong>. This ordering reflects a simple principle:
          the interactive, connective elements of the celebration take priority over decorative
          ones.
        </p>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Budget Breakdown
        </h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm text-card-foreground/80">
            <thead className="bg-muted/50 text-card-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Details</th>
                <th className="px-4 py-3 font-semibold">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 align-top font-medium">Equipment</td>
                <td className="px-4 py-3">
                  200 silent disco headsets (100 per office) + 2 DJs, Portal screen rental for the
                  live video link, technical reserve
                </td>
                <td className="px-4 py-3 align-top whitespace-nowrap">€3,200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium">Music licensing</td>
                <td className="px-4 py-3">
                  Public performance licensing for live DJ sets, both offices
                </td>
                <td className="px-4 py-3 align-top whitespace-nowrap">€200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium">Employee takeaway</td>
                <td className="px-4 py-3">
                  Small in-office gift (~260 people) + digital voucher for remote employees (~100
                  people)
                </td>
                <td className="px-4 py-3 align-top whitespace-nowrap">€2,560</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium">Catering</td>
                <td className="px-4 py-3">Single vendor serving both Vilnius and Kaunas identically</td>
                <td className="px-4 py-3 align-top whitespace-nowrap">€3,380</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium">Decorations & atmosphere</td>
                <td className="px-4 py-3">Visual styling for both venues</td>
                <td className="px-4 py-3 align-top whitespace-nowrap">€640</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-semibold">Total</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 align-top whitespace-nowrap font-semibold">€9,980</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          The full amount stays within the €10,000 limit, with a small buffer for last-minute
          adjustments.
        </p>
      </section>

      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
          Vendors
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-card-foreground/80">
          <li>
            <strong>Silent disco equipment & DJs</strong> — silentdisco.lt
          </li>
          <li>
            <strong>Music licensing (LATGA/AGATA)</strong> — Leidžiam.lt
          </li>
          <li>
            <strong>Catering, Portal screens</strong> — vendor selection finalized during the
            execution phase, ahead of the event date.
          </li>
        </ul>
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
