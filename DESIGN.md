# Design System — Food-Checker Behavioural Science Case Study

## Product Context
- **What this is:** A single-page personal portfolio site presenting Food-Checker as a
  worked case study in applied behavioural science — a diagnostic hook, a behavioural
  diagnosis (COM-B + dual-process theory), an intervention design, an interactive
  evidence demonstration, and an honest scope/limitations statement.
- **Who it's for:** Hiring managers and consultants evaluating behavioural-science or
  SBCC talent — readers who judge whether frameworks are used correctly and evidence is
  honestly graded, not whether the app is buildable or fundable.
- **Space/industry:** Behavioural-science and SBCC consulting; adjacent to UX-research
  and academic portfolio sites in how it presents evidence, citations, and methodology.
- **Project type:** Editorial case-study / personal portfolio site. Single case-study
  page + evidence & methodology appendix + about/contact. Static, no backend, no login.
- **The one thing a reader should remember:** this person diagnoses the actual
  mechanism instead of describing the symptom — and the site proves it by reducing the
  reader's own cognitive load the same way the product claims to reduce the shopper's.
- **Independence note:** this is an independent personal project, not affiliated with,
  sponsored by, or representing any employer or consultancy. The visual identity below
  is original to this site and must not be reused to imply organisational endorsement.

## Aesthetic Direction
- **Direction:** Evidentiary Editorial — a long-form magazine narrative crossed with a
  lab-notebook evidence layer.
- **Decoration level:** Minimal. Typography and one functional colour system carry the
  entire page. No illustration, no stock imagery, no ornamental graphics.
- **Mood:** Reads like a considered, unglamorous essay — sober and confident rather than
  a pitch. Every visual device exists to carry evidence, not decoration.
- **Reference sites (patterns only, not visual identity):**
  - [The Decision Lab — Case Studies](https://thedecisionlab.com/case-studies)
  - [The Behavioural Architects — Case Studies](https://www.thebearchitects.com/our-work/case-studies/)
  - [User Interviews — UX Research Portfolio Examples](https://www.userinterviews.com/blog/ux-research-portfolio-examples-templates)
  - [Toptal — Dissecting Case Study Portfolios](https://www.toptal.com/designers/ui/case-study-portfolio)

## Typography
- **Display/Hero:** Instrument Serif — headlines and pull-quotes. Editorial warmth with
  a distinct, high-contrast character; avoids the generic "corporate serif" register
  while staying legible and restrained.
- **Body:** Source Sans 3 — very legible at long-form reading length, quiet and
  humanist rather than decorative. Carries the narrative sections.
- **UI/Labels:** Source Sans 3, same family as body, 600 weight for labels/nav/buttons.
- **Data/Tables:** IBM Plex Mono — citation tags (`[S5]`, `[P02]`), the evidence
  register table, and any numeric callouts (fibre content, thresholds). Gives the
  evidence layer a deliberate "lab notebook" precision distinct from the prose voice.
- **Code:** Not applicable — no code is shown on the site.
- **Loading:** Google Fonts — `Instrument+Serif`, `Source+Sans+3` (400/600/700),
  `IBM+Plex+Mono` (400/500). Self-host if avoiding a third-party font request matters
  for the final build; otherwise standard `<link>` load is fine for a static site.
  Required loading strategy (resolved in /plan-eng-review Performance pass):
  `<link rel="preconnect">` to `fonts.googleapis.com` and `fonts.gstatic.com`,
  and the Google Fonts URL must include `display=swap` so text renders in a
  fallback font immediately and swaps in once each web font loads — no
  flash-of-invisible-text on first paint.
- **Scale (base 18px for long-form reading comfort):**
  - Hero/H1: `clamp(2.5rem, 5vw, 4rem)` — Instrument Serif, 1.1 line-height
  - H2 (section): `2rem` — Instrument Serif, 1.2 line-height
  - H3 (subsection): `1.375rem` — Source Sans 3, 600, 1.3 line-height
  - Pull-quote: `1.75rem` — Instrument Serif italic, 1.4 line-height
  - Body: `1.125rem` (18px) — Source Sans 3, 400, 1.65 line-height
  - Small/caption: `0.9375rem` — Source Sans 3, 400
  - Mono/citation tag: `0.8125rem` — IBM Plex Mono, 500

## Color
- **Approach:** Restrained — one confident accent, warm neutrals, plus a small
  functional evidence-status system used only inside citations and the appendix.
- **Ink (primary text):** `#1C1917` on paper — warm near-black, not pure black.
- **Paper (background):** `#FAF7F2` — warm off-white, not clinical pure white.
- **Muted text (secondary/metadata):** `#6B645A`
- **Rule/border neutral:** `#E4DFD6`
- **Primary accent (links, interactive elements, key numbers):** `#B5502A` (burnt clay)
- **Accent hover/active:** `#8F3E1F`
- **Evidence-status system** (small-scale, functional — citations + appendix table only):
  - Verified / directly sourced: `#4B6B53` (muted sage)
  - Inferred / labelled as inference: `#A67C2E` (muted ochre)
  - Excluded / out of scope: `#8A8578` (warm grey)
- **Semantic (if needed beyond evidence-status):** success `#4B6B53`, warning `#A67C2E`,
  error `#B5502A`, info `#6B645A` — reuse the palette above rather than introducing new
  hues.
- **Dark mode:** Not required for v1 (single static portfolio page, editorial reading
  context favours a fixed warm-paper background). If added later: invert to ink
  `#F5F1EA` on paper `#17140F`, desaturate the evidence-status colours by ~15%, keep the
  accent hue but lighten to `#D97A4E` for sufficient contrast on dark paper.

## Spacing
- **Base unit:** 8px
- **Density:** Spacious — long-form reading needs room to breathe; this also reinforces
  the "low cognitive load" thesis the whole page is making.
- **Scale:** 2xs(4) xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64) 3xl(96)
- **Reading column:** max-width ~70ch for narrative text; evidence tables and the
  interactive comparison break out to full content width.

## Layout
- **Approach:** Hybrid — creative-editorial for the narrative (single reading column,
  generous margins, pull-quotes can bleed slightly into the margin), grid-disciplined
  for the evidence appendix table and the interactive comparison.
- **Grid:** Single column on mobile; narrative stays single-column at all breakpoints
  (no multi-column text). The evidence appendix table and the interactive comparison
  use a 2-column grid ≥768px (side-by-side profiles), stacked below that.
- **Max content width:** 720px for narrative text, 1040px for the evidence
  table/appendix and the interactive comparison "stage."
- **Border radius:** Minimal and consistent — sm:2px, md:4px, lg:8px. No bubble
  radius; this is a text-and-evidence site, not a product UI.
- **Persistent orientation aid:** a slim sticky mini-nav/progress indicator tracking
  the five-part argument (Diagnostic hook → Behavioural diagnosis → Intervention
  design → Evidence → Scope & limitations) so a scanning reader always knows where
  they are in the argument — this is itself a small demonstration of reducing
  orientation/translation cost, the same friction the case study is about.
  On mobile (<768px), this collapses to a slim horizontal progress bar pinned to
  the top of the viewport (current step indicated, tap to jump) rather than
  disappearing — the orientation aid stays present at every breakpoint.

## Motion
- **Approach:** Minimal-functional only — motion exists solely to aid comprehension.
- **Interactive comparison toggle:** ~250ms ease-in-out cross-fade between the two
  profile verdicts (colour + copy), so the "flip" reads as a single legible event, not
  a jarring swap.
- **Citation hover/tap:** underline draws in on hover (~150ms ease-out); on tap/click
  reveals a small inline source popover rather than navigating away — keeps the reader
  in place, mirroring the "don't make them do extra translation work" thesis.
- **Section entry:** a very subtle fade/slide-up (~300ms ease-out, 8px translate) on
  first scroll into view. No scroll-jacking, no parallax, no decorative animation.
- **Easing:** enter `ease-out`, exit `ease-in`, move `ease-in-out`.
- **Duration:** micro 100ms, short 150-250ms, medium 300ms. Nothing in this system
  should exceed ~300ms.
- **`prefers-reduced-motion`:** when set, all of the above become instant state
  changes — no cross-fade, no underline-draw, no fade/slide-up. Content and
  functionality are identical; only the transition animation is removed.

## Evidence-Status Colour Coding (site-specific pattern)
This is the signature device of the system, so it's worth specifying precisely.
The three statuses below are a direct relabel of `EVIDENCE-PACK.md`'s register
grades, not a separate taxonomy: fully supported → verified, partly supported →
inferred, unsupported → excluded. See `PORTFOLIO-SCOPE.md`'s "Evidence taxonomy
↔ design system mapping" section for the full table.

- Every inline citation tag (`[S5]`, `[P02]`, etc.) in the narrative body is rendered in
  IBM Plex Mono with a small coloured underline or dot matching its status: sage
  (verified/directly sourced), ochre (inferred, explicitly labelled as such in the
  adjacent text), grey (excluded/out of scope, used only in the Scope & Limitations
  section to mark what was deliberately cut).
- The same three colours key the Evidence & Methodology appendix table exactly —
  no remapping between the narrative and the appendix. Implementation-wise, the
  appendix table IS the data source (see PORTFOLIO-SCOPE.md's Architecture
  section) — each tag is a plain anchor link into its appendix row, and colour +
  status text are read from that row's data attributes, not duplicated.
- Accuracy discipline: a tag's colour must match its actual evidentiary status at all
  times. Do not use the ochre (inferred) tag as a soft "looks credible" signal — reserve
  it strictly for claims explicitly labelled as inference per the publication criteria
  in `PORTFOLIO-SCOPE.md`.
- **Excluded tags are interactive too**, behaviourally consistent with verified/inferred
  tags — tapping/hovering shows the one-line scoping rationale (e.g. the sustainability
  exclusion's reason, pulled from `PORTFOLIO-SCOPE.md` Sections 6-7) rather than a
  traditional source, since a scope-cut isn't a claim with a citation. Every tag type
  is tappable and explains itself; none are visual-only.
- **Accessibility — never colour-only (WCAG 1.4.1):** every coloured tag/dot carries
  a small mono text label alongside it (e.g. `[S5] verified`, `[P02] inferred`) so the
  status reads correctly with colour perception removed entirely — no reliance on a
  colour legend the reader has to learn. This is not optional decoration; it is the
  primary way the status is actually communicated, with colour as reinforcement.

## Mobile & Touch Behaviour

- **Citation source reveal:** desktop uses hover (per Motion, below); on touch devices,
  tapping a citation tag opens the same source popover, tapping again or tapping
  outside dismisses it. No separate content — same popover, touch-triggered.
- **Evidence appendix table:** restructures to stacked cards below ~600px viewport
  width — each citation becomes one card with its status label, claim, and source
  stacked vertically instead of columns. This is a genuine layout change per
  breakpoint, not a shrink-and-scroll of the desktop table.
- **Touch targets:** the profile toggle and every tappable citation tag have a
  minimum 44x44px touch target, even where the visible label is smaller — pad the
  hit area, don't enlarge the visible mono text.

## Keyboard & Focus

- The profile toggle and every citation tag are real focusable, keyboard-operable
  controls (native `button`/`a` elements, not `div`s with click handlers) — reachable
  via Tab, activatable via Enter/Space.
- Visible focus state: a clear outline or underline in the accent colour (`#B5502A`)
  on `:focus-visible` for both the toggle and citation tags — never `outline: none`
  without a replacement.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-12 | Initial design system created via /design-consultation | Built from `PORTFOLIO-SCOPE.md` product context and a brief research pass on behavioural-science/UX-research portfolio conventions. User explicitly requested an original visual identity independent of any employer/consultancy brand — see Product Context "Independence note." Both proposed design risks (inline evidence-status colour coding; full-width staged interactive comparison) approved as proposed. |
