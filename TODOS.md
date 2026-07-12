# TODOs

## Design debt (from /plan-design-review, 2026-07-12)

- [ ] **Verify colour accessibility with real tools before publication.**
  What: run the final hex values through an actual contrast checker (e.g.
  WebAIM Contrast Checker) and colour-blindness simulator (e.g. Coblis) —
  specifically the accent `#B5502A` on paper `#FAF7F2` (hand-calculated at
  ~4.74:1, a borderline WCAG AA pass for normal text) and the three
  evidence-status colours (sage `#4B6B53`, ochre `#A67C2E`, grey `#8A8578`)
  under deuteranopia/protanopia simulation.
  Why: hand-calculated contrast is close enough to the AA threshold (4.5:1)
  that real font weight/anti-aliasing at build time could tip a borderline
  pass into a fail. The evidence-status colours are the site's signature
  credibility device (see DESIGN.md), so a real accessibility failure there
  undercuts the exact thing the design is built to prove.
  Depends on: the site being built with real fonts in a browser — can't be
  fully closed out at the plan stage.
  Blocks: PORTFOLIO-SCOPE.md Section 7 publication-criteria sign-off.

## Content/evidence debt (from /plan-eng-review outside-voice pass, 2026-07-12)

- [ ] **Confirm interview consent for anonymised, paraphrased public use.**
  What: reconfirm with all four interview participants (P01-P04) that their
  anonymised, paraphrased account can appear in a public case study — not
  currently recorded anywhere per `research/PUBLIC-INTERVIEW-SUMMARY.md`'s
  own "Consent status" section.
  Why: this is PORTFOLIO-SCOPE.md Section 8's single highest-ranked
  credibility risk, and an ethical one, not just a credibility one —
  publishing paraphrased interview content without confirmed consent is a
  real problem regardless of how careful the anonymisation is.
  Pros: closes the biggest open risk in the whole project.
  Cons: requires re-contacting participants — real calendar time, not
  compressible with AI assistance.
  Blocks: PORTFOLIO-SCOPE.md Section 7, publication criterion 1. **Hard
  blocker — the site must not go live without this.**

- [ ] **Pre-publication source-verification checklist.**
  What, as one bundled checklist:
  - [ ] Open Food Facts cross-check on GTIN 5010044000404 (second-database
    confirmation of the Warburtons fibre/ingredient data).
  - [ ] Scan Yuka's actual score for this product, or keep the inference
    label ("Yuka's score direction is inferred, not scanned") prominent if
    not scanned.
  - [ ] Pull exact wording for S3 (SACN 30g/day fibre recommendation) and
    S4 (EU claim-threshold Annex) — currently cited by topic, not by quote.
  - [ ] Confirm S9 (Sweller 1988) accessibility, or substitute the 2011
    Sweller/Ayres/Kalyuga review if paywalled.
  - [ ] Final-draft check: confirm S10 (WCRF), S11 (declining data
    accuracy), and S12 (named dietitian commentary) do not appear anywhere
    in the published copy — these are unverified per `research/SOURCES.md`
    and the case study doesn't need them (S5 alone is airtight).
  Why: same kind of task repeated five times ("tighten a citation before
  publishing") — bundled to keep TODOS.md scannable.
  Blocks: PORTFOLIO-SCOPE.md Section 7 publication-criteria sign-off.
