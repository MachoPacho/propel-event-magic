import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { OG_IMAGE_META } from "@/lib/og-meta";

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
      { property: "og:url", content: "https://10m.online/proposal" },
      ...OG_IMAGE_META,
    ],
    links: [
      {
        rel: "canonical",
        href: "https://10m.online/proposal",
      },
    ],
    scripts: [
      {
        src: "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",
        type: "module",
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
            photo in both offices at once. 15:00 Lithuania time was also chosen with our international
            remote colleagues in mind — it lands at a reasonable morning hour in Brazil and evening
            in Indonesia.
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
            listening channels: your local DJ, and a cross-city channel to tune into the other
            office's DJ live. The headsets technically support a third channel — extending live audio
            to remote employees is a possible future direction, pending a technical conversation with
            the vendor, and isn't part of this plan.
          </li>
          <li>
            <strong>Virtual Canvas</strong> — a collaborative visual board that remote employees
            control live from the website, projected on a large screen behind the DJs in both
            offices simultaneously. This is remote employees' main way to actively shape something
            both physical locations experience together in real time.
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
          Every in-office attendee receives a custom-designed gift marking the milestone: a pair of
          "10,000,000" novelty glasses, in the spirit of classic New Year's Eve number glasses —
          designed specifically for this celebration and produced via 3D printing. Remote employees
          receive a digital voucher (an audiobook platform subscription, for example).
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
          <model-viewer
            src="/gift-glasses.glb"
            camera-controls
            auto-rotate
            rotation-per-second="20deg"
            shadow-intensity="0.5"
            exposure="1"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "380px",
              margin: "0 auto",
              display: "block",
            }}
          />
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Interactive 3D preview — drag to rotate.
          </p>
        </div>
      </section>
    </div>
  );
}

const BUDGET_ITEMS = [
  {
    id: "equipment",
    category: "Equipment",
    total: "€3,200",
    items: [
      { label: "200 silent disco headsets (100 per office)", cost: "€1,400" },
      { label: "2 DJs (own equipment, full day)", cost: "€800" },
      { label: "Portal screen rental (live video link between offices)", cost: "€700" },
      { label: "Technical reserve", cost: "€300" },
    ],
  },
  {
    id: "music",
    category: "Music licensing",
    total: "€200",
    items: [
      { label: "LATGA (public performance license)", cost: "€100" },
      { label: "AGATA (public performance license)", cost: "€100" },
    ],
  },
  {
    id: "takeaway",
    category: "Employee takeaway",
    total: "€2,560",
    items: [
      { label: "In-office gifts — custom 3D-printed '10,000,000' novelty glasses, ~260 people (estimate, pending final quote)", cost: "€1,560" },
      { label: "Remote digital vouchers, ~100 people × €10", cost: "€1,000" },
    ],
  },
  {
    id: "catering",
    category: "Catering",
    total: "€3,380",
    items: [
      { label: "Single vendor for both offices, ~260 people × €13/person", cost: "€3,380" },
    ],
  },
  {
    id: "decorations",
    category: "Decorations & atmosphere",
    total: "€640",
    items: [
      { label: "Venue styling for both offices (signage, photo backdrop, ambient decor)", cost: "€640" },
    ],
  },
];

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
        <Accordion type="multiple" className="mt-4 overflow-hidden rounded-xl border border-border">
          {BUDGET_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="px-4 text-card-foreground hover:no-underline">
                <span className="font-medium">{item.category}</span>
                <span className="ml-auto mr-4 font-semibold tabular-nums">{item.total}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 text-card-foreground/80">
                <ul className="space-y-2 border-t border-border/50 pt-3">
                  {item.items.map((sub) => (
                    <li key={sub.label} className="flex justify-between gap-4">
                      <span>{sub.label}</span>
                      <span className="tabular-nums">{sub.cost}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-muted/50 px-4 py-3">
          <span className="font-semibold text-card-foreground">Total</span>
          <span className="font-bold tabular-nums text-card-foreground">€9,980</span>
        </div>
        <p className="mt-4 text-base leading-relaxed text-card-foreground/80">
          The full amount stays within the €10,000 limit, with a small buffer for last-minute
          adjustments.
        </p>
        <div className="mt-4 rounded-lg border border-border bg-muted/40 p-4 text-sm leading-relaxed text-card-foreground/80">
          <strong>Note:</strong> this budget assumes Hostinger's internal media/content team covers
          event-day photography and the highlight video edit at no additional cost. If that
          assumption doesn't hold, external photography and videography for both offices would add an
          estimated €600–1,200, which would exceed the current budget — this is flagged here for
          transparency rather than hidden.
        </div>
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
            <strong>Gift production (3D-printed glasses)</strong> — AKORE (akore.lt), pending final
            quote.
          </li>
          <li>
            <strong>Catering, Portal screens, gift production</strong> — vendor selection finalized
            during the execution phase, ahead of the event date.
          </li>
        </ul>
      </section>
    </div>
  );
}

function ProposalPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("concept");
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    concept: null,
    experience: null,
    vendors: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    SECTIONS.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: SectionId) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl overflow-x-hidden px-4 py-12 sm:px-6 lg:px-8">
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

      <div className="grid min-w-0 gap-8 lg:grid-cols-[240px_1fr]">
        <nav
          aria-label="Jump to section"
          className="relative min-w-0 max-w-full lg:sticky lg:top-24 lg:self-start"
        >
          <div
            className="scrollbar-hide -mx-4 flex min-w-0 max-w-full touch-pan-x flex-row flex-nowrap gap-2 overflow-x-auto overflow-y-hidden whitespace-nowrap px-4 pb-2 pr-10 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:whitespace-normal lg:px-0 lg:pb-0 lg:pr-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition-all lg:whitespace-normal lg:px-4 lg:py-3 ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-[-1rem] w-6 bg-gradient-to-r from-transparent to-background lg:hidden"
          />
        </nav>


        <div className="space-y-8">
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10"
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">
                {section.label}
              </h2>
              <div className="mt-6 h-px w-full bg-border" />
              <div className="mt-6 text-base leading-relaxed text-card-foreground/80">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
