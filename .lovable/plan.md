# Interactive Application Presentation Site

A three-view, front-end-only presentation site for an Event Manager application at Hostinger. English throughout, mobile-first, no backend.

## Design direction

- Very dark background (near-black with a slight blue tint) with a distinctive violet-to-electric-blue accent — its own palette, not a copy of any hosting brand.
- Geometric sans-serif typography (Space Grotesk headings, DM Sans body), huge tabular numerals, generous spacing.
- All colors defined as semantic tokens in the global stylesheet; light accents used sparingly so numbers dominate.

## Landing (`/`)

- Full-screen counter animating 9,998,000 → 10,000,000 over roughly 4 seconds with an ease-out curve, monospaced-width digits so the layout doesn't jitter.
- On completion the number settles and the label "10,000,000 Online" fades in beneath it.
- After a short pause two CTAs appear:
  - "The Proposal" — large, filled, high-contrast primary button, first in order.
  - "Bonus Initiative" — smaller, subdued outline/ghost button.
- Respects reduced-motion: number appears at final value immediately.

## The Proposal (`/proposal`)

- Document-style layout: restrained header, readable measure, serif-free but editorial spacing — not marketing hero styling.
- In-page section navigation (sticky side/top nav on desktop, horizontal tabs on mobile) between:
  1. Event Concept & Logistics
  2. Employee Experience
  3. Vendors & Budget
- Each section renders its heading plus placeholder body "[Content coming soon]".

## Bonus Initiative (`/bonus`)

- Short paragraph clarifying that this website and its game are the candidate's own independent, additional initiative — not part of the official evaluated proposal or budget.
- A reserved card titled "Game" with body "Coming soon".

## Shared

- Minimal header with a link back home and links to both views; simple footer.
- Per-page metadata (title, description, social tags) for each of the three routes.

## Technical notes

- Routing uses the project's built-in TanStack Router file routes (`src/routes/index.tsx`, `proposal.tsx`, `bonus.tsx`) rather than react-router-dom — react-router is not supported on this stack, and navigation behavior is identical.
- Counter implemented client-side with `requestAnimationFrame`; no server logic, no data layer.
- Fonts loaded via a `<link>` in the root route head; tokens added to `src/styles.css`.
- The placeholder index page is replaced by the landing view.
