# TODOs

## Publication status — 2026-07-12

**No remaining hard blockers to publishing this proof-of-concept site**,
provided `private/` stays gitignored and untracked and no raw interview
material is ever committed. Verified directly via `git check-ignore -v
private/` and `git log --all --full-history -- private/` (clean) as part of
this update — see PORTFOLIO-SCOPE.md Section 7/8 for the full rationale.
All three items below are now closed out or explicitly reclassified as
non-blocking.

## Design debt (from /plan-design-review, 2026-07-12)

- [x] **Verify colour accessibility with real tools before publication.**
  ~~What: run the final hex values through an actual contrast checker (e.g.
  WebAIM Contrast Checker) and colour-blindness simulator (e.g. Coblis) —
  specifically the accent `#B5502A` on paper `#FAF7F2` (hand-calculated at
  ~4.74:1, a borderline WCAG AA pass for normal text) and the three
  evidence-status colours (sage `#4B6B53`, ochre `#A67C2E`, grey `#8A8578`)
  under deuteranopia/protanopia simulation.~~
  **Resolved 2026-07-12:** `/qa` computed real WCAG contrast ratios against
  the live rendered page (not hand math): CTA button 4.74:1, "inferred"
  status text 4.505:1 — both clear the 4.5:1 AA threshold. Colour-blindness
  simulation is removed as a publication blocker: every evidence-status tag
  already carries a text label ("verified"/"inferred"/"excluded") alongside
  its colour (see PORTFOLIO-SCOPE.md Section 4's accessibility floor —
  "never colour-only"), so colour is a reinforcing signal, not the only one,
  and WCAG 1.4.1 (Use of Color) is already satisfied by design regardless of
  simulation results.
  No longer blocks PORTFOLIO-SCOPE.md Section 7 sign-off.

## Content/evidence debt (from /plan-eng-review outside-voice pass, 2026-07-12)

- [x] **Confirm interview consent for anonymised, paraphrased public use.**
  ~~What: reconfirm with all four interview participants (P01-P04) that their
  anonymised, paraphrased account can appear in a public case study.~~
  **Resolved 2026-07-12:** consent for anonymised, paraphrased public use is
  confirmed for all four participants (P01–P04). Direct-quotation consent
  remains unconfirmed and is irrelevant either way — the published copy uses
  paraphrase only, never a direct quote — so this fully closes the
  highest-ranked credibility/ethical risk in PORTFOLIO-SCOPE.md Section 8.
  See `research/PUBLIC-INTERVIEW-SUMMARY.md`'s "Consent status" section,
  updated to match.
  No longer blocks PORTFOLIO-SCOPE.md Section 7, publication criterion 1.

- [ ] **Pre-publication source-verification checklist — optional future
  refinement, not a publication blocker.**
  What, as one bundled checklist (unchanged, just reclassified):
  - [ ] Open Food Facts cross-check on GTIN 5010044000404 (second-database
    confirmation of the Warburtons fibre/ingredient data).
  - [ ] Scan Yuka's actual score for this product — not required: the
    published copy already keeps "Yuka's score direction is inferred, not
    scanned" prominent and explicit, which is the fallback this item itself
    allowed for.
  - [ ] Pull exact wording for S3 (SACN 30g/day fibre recommendation) and
    S4 (EU claim-threshold Annex) — currently cited by topic, not by quote.
  - [ ] Confirm S9 (Sweller 1988) accessibility, or substitute the 2011
    Sweller/Ayres/Kalyuga review if paywalled.
  - [ ] Final-draft check: confirm S10 (WCRF), S11 (declining data
    accuracy), and S12 (named dietitian commentary) do not appear anywhere
    in the published copy — already confirmed absent as of the 2026-07-12
    `/qa` pass; keep re-checking on future edits.
  Why reclassified: this is a proof-of-concept portfolio piece, not a
  production product claim. It already uses the existing evidence pack,
  inline citations, and the verified/inferred/excluded labelling system to
  grade every load-bearing claim honestly — that's the credibility mechanism,
  and it's already live. Tightening individual citations further is a
  nice-to-have polish pass, not a gate.
  Does **not** block PORTFOLIO-SCOPE.md Section 7 publication-criteria
  sign-off. Revisit opportunistically, not before publishing.
