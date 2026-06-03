# Trade Value Calculator

A modern, SEO-optimized single-page website that helps gamers, collectors, and traders determine whether a trade is fair by comparing offered and received item values.

Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Interactive trade value calculator with fair / win / lose verdicts
- Preset categories: Roblox, Rocket League, Sports Cards, CS2, Pokemon
- Dark/light mode with `localStorage` persistence
- Sticky navbar, smooth scrolling, mobile menu, back-to-top button
- Framer Motion animations and scroll reveals
- AdSense-ready ad placeholders and affiliate marketplace cards
- Full SEO: metadata, Open Graph, Twitter cards, FAQ & WebSite JSON-LD
- Production-ready responsive design

## Quick Start

### Prerequisites

- Node.js 18.18+ (recommended: 20 LTS)
- npm, yarn, or pnpm

### Installation

```bash
# Clone or navigate to the project directory
cd "test project"

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Sample Trade Values (Testing)

| Your Offer | Their Offer | Expected Result        |
|------------|-------------|------------------------|
| 5000       | 5500        | You gain 10% (You Win) |
| 1000       | 1000        | Fair Trade             |
| 5000       | 4000        | You lose 20% (You Lose)|

Use the **Quick presets** buttons on the calculator for game-specific examples.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, metadata, JSON-LD
│   ├── page.tsx            # Single-page home
│   ├── globals.css         # Global styles & CSS variables
│   ├── icon.tsx            # Dynamic favicon
│   ├── opengraph-image.tsx # OG image generation
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── privacy/
│   └── terms/
├── components/
│   ├── layout/             # Navbar, Footer, PageLoader
│   ├── sections/           # Hero, Calculator, FAQ, etc.
│   ├── ui/                 # Button, AdPlaceholder, etc.
│   └── providers/          # ThemeProvider
├── data/                   # FAQ, presets, stats, affiliates
├── lib/                    # Utils, calculator logic, schemas
├── public/                 # Static assets (logo.svg)
└── styles/                 # Styles documentation
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Tailwind Configuration

Dark mode uses the `class` strategy. Custom brand colors, glow shadows, and animations are defined in `tailwind.config.ts`. Extend the theme there for new design tokens.

## Deployment (Vercel)

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Set environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your production domain (e.g. `https://tradevaluecalculator.com`)
4. Deploy. Vercel auto-detects Next.js and runs `npm run build`.

### Manual deploy via CLI

```bash
npm i -g vercel
vercel
```

## AdSense Placement Best Practices

Recommended ad positions (placeholders included in the codebase):

1. **Below hero** — `app/page.tsx` — high viewability, above the fold on scroll
2. **Between sections** — `Monetization.tsx` banner and in-content slots
3. **Avoid** placing ads directly over the calculator CTA buttons

After AdSense approval, replace `AdPlaceholder` content with your ad unit script:

```tsx
// Example: wrap AdSense ins tag inside the aside container
<aside data-ad-slot="banner" className="...">
  <ins className="adsbygoogle" ... />
</aside>
```

Tips:

- Keep ad density under ~30% of visible content on mobile
- Use responsive ad units
- Ensure sufficient content between ad units (this page has multiple sections)
- Add `ads.txt` to `/public` when approved

## Affiliate Links

Update URLs in `data/affiliate.ts` with your affiliate tracking parameters. Links use `rel="noopener noreferrer sponsored"` for compliance.

## Performance Recommendations

- Images use Next.js `Image` when adding real assets
- Fonts use `display: swap` via `next/font`
- Client components are scoped to interactive sections only
- `prefers-reduced-motion` respected in `globals.css`
- Run Lighthouse after deploy; target 90+ Performance

## SEO Checklist

- [x] Metadata API (title, description, keywords)
- [x] Open Graph & Twitter cards
- [x] Canonical URL via `NEXT_PUBLIC_SITE_URL`
- [x] `robots.ts` and `sitemap.ts`
- [x] FAQPage & WebSite JSON-LD schemas
- [x] Semantic HTML (`main`, `section`, `nav`, `article`)
- [x] Proper heading hierarchy (single `h1` in hero)

## License

MIT — use freely for personal or commercial projects.
