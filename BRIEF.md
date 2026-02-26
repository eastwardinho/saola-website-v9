# Saola Website v9 — Build Brief

## What
A stunning, design-led website for Saola — a Vietnamese lifestyle brand selling lighting, furniture, and home accessories. This is the BEST website we've ever built. Award-worthy.

## Brand Identity (STRICT)
- **Logo**: Saola wordmark (serif font, distinctive) + star/spark symbol
- **Key Colour**: Orange #FFA400 — RESTRICTED to brand assets only, NOT for website CTAs
- **CTA Colours**: Use Coral #FF7F32 or Golden Yellow #FFB81C
- **Supporting Palette**: 22 colours (see below), max 2 per composition
- **Typography**: Basel Classic (Light for headings with -50 tracking, Book for body with +10 tracking)
  - Since Basel Classic isn't available as web font, use a similar editorial serif for headings and clean sans for body
- **Photography**: Product is always the star, warm tones, natural lighting, 5% margin around products

### Key Colour Pairings
- Classic/Matured: Navy #001871 + Caramel #AC7644
- Soft/Cute: Blush #F5D0C4 + Light Pink #F5CDF0
- Warm/Welcoming: Coral #FF7F32 + Peach #F3CFB3
- Earthy/Warm: Caramel #AC7644 + Dark Olive #5A4522

## Architecture
Static site (HTML/CSS/JS or Next.js static export). Must deploy to GitHub Pages.

### Pages
1. **Home** — Hero with brand story, featured collections, lifestyle imagery, about snippet
2. **Collections** — Grid of 4 collections with descriptions
3. **Collection Detail** (x4) — Product grid for each collection
4. **About** — Brand story, Vietnamese heritage, sustainability, the team
5. **Cafe Concept** — The cafe-retail vision, membership program
6. **Contact** — Simple contact form

### Design Requirements
- Editorial feel — like a magazine that happens to sell products
- Generous white space, let imagery breathe
- Warm tones throughout (NO cool/grey tones)
- Product images from: /home/eastwardinho/clawd/projects/saola/brand-assets/products/
- Product renders from: /home/eastwardinho/clawd/projects/saola/source-docs/SAOLA RENDERS/Pretty and Posh/
- Logo files from: /home/eastwardinho/clawd/projects/saola/brand-assets/logos/
- Brand guideline reference images from: /home/eastwardinho/clawd/projects/saola/brand-assets/reference/
- Smooth scroll, subtle animations, modern interactions
- Mobile-first responsive
- FAST — optimise images, lazy loading

### Product Data
4 Collections, 65 products total:

**Colorful Creator** (9 products): Flamingo Table Lamp, Cheese! Table Lamp, Out Mood Lamp, In Mood Lamp, Rainbow Mood Lamp, Tilt Desk Lamp, Tilt Floor Lamp, Mai Pendant, Wander Pendant

**Experimental Rebel** (10 products): Block Table Lamp, Bunny Table Lamp, Hot Dog Table Lamp, Dino Table Lamp, Domo Mood Lamp, Observatory Mood Lamp, Edo Mood Lamp, Dino Floor Lamp, Hook Floor Lamp, Hoop Pendant

**Cosmopolitan Expert** (10 products): Verta Bedside Table Lamp, Verta Table Lamp, Phi Table Lamp, Kyoto Mood Lamp, Connie Desk Lamp, Stack Floor Lamp, Butler Floor Lamp, Seline Pendant, Penny Wide Pendant, Penny Tall Pendant

**Pretty & Posh** (9 products): Lotus Table Lamp, Clove Table Lamp, Marshmallow Table Lamp, Geode Table Lamp, Hyde Mood Lamp, Ariel Mood Lamp, Geode Floor Lamp, Isabella Pendant, Wagasa Pendant

### Inspiration
- Everlane (radical transparency, editorial commerce)
- Article (clean, white-space-heavy, room-based navigation)
- Cereal Magazine (editorial photography-first)
- Aesop (warm minimalism, storytelling)

### Technical
- Next.js 14+ with App Router, static export
- Tailwind CSS
- Deploy to GitHub Pages at eastwardinho.github.io/saola-website-v9
- SEO meta tags, Open Graph
- Accessibility (WCAG AA)

## Quality Standard
The Frank Best Way — beautiful without bloat. If you wouldn't put your name on it, it's not done.
