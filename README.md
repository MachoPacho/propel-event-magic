# Event Horizon Proposal

I'm building an interactive presentation website for a job application (Event Manager position at Hostinger). The site has 3 views: Landing (with a counter), "The Proposal", and "Bonus Initiative". All site text is in English.

DESIGN

- Modern, clean tech/SaaS-style design, inspired by web hosting brand aesthetics (purple/dark tones, bold large numbers, generous white space) — but ORIGINAL, its own color palette, not a direct copy of any specific brand.

- Dark or very light background with a strong purple/blue accent for the numbers.

- Modern, geometric sans-serif font.

- Fully responsive, mobile-first.

LANDING PAGE

1. On page load, a large full-screen animated number counts up rapidly from 0 to 10,000,000 over ~4 seconds. Exact animation style doesn't matter — it just needs to clearly look like the number is spinning/growing toward the target.

2. Once it reaches 10,000,000, the number settles and the text "10,000,000 Online" is revealed.

3. After a short pause (or on scroll), two CTA buttons appear:

   - "The Proposal" — visually FIRST and DOMINANT (larger, higher-contrast color).

   - "Bonus Initiative" — secondary, smaller/more subtle button.

VIEW "THE PROPOSAL"

- Separate page (react-router), with clear navigation between three sections:

  1. Event Concept & Logistics

  2. Employee Experience

  3. Vendors & Budget

- Each section currently has placeholder text "[Content coming soon]".

- Clean, readable, document/proposal-style layout — not a marketing landing page style, since this is the official content being evaluated.

VIEW "BONUS INITIATIVE"

- Separate page, short placeholder text explaining that this website and the game on it are the candidate's own independent, additional initiative — NOT part of the official evaluated proposal or budget.

- A placeholder card/block titled "Game" with text "Coming soon" — reserving space for a game that will be integrated later (no need to generate it now).

TECHNICAL REQUIREMENTS

- Pure front-end (React + Tailwind), no backend/database, no authentication.

- react-router for navigation between the 3 views.

- Language: English.

- The counter is purely a client-side animation, no server-side sync or precision logic needed.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://propel-event-magic.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cfcca104-cb7d-4efc-a98a-caf398164e01).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
