import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

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
  }),
  component: ProposalPage,
});

const SECTIONS = [
  {
    id: "concept",
    label: "Event Concept & Logistics",
    content: "[Content coming soon]",
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
                <p className="mt-6 text-base leading-relaxed text-card-foreground/80">
                  {section.content}
                </p>
              </div>
            ) : null
          )}
        </section>
      </div>
    </div>
  );
}
