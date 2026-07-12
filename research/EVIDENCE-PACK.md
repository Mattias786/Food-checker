# Evidence Pack: Food-Checker Behavioural Science Case Study

**Compiled:** 12 July 2026. Web sources accessed 12 July 2026. Interview section
updated 12 July 2026 following review of four private interview transcripts.
**Companion files:** `VERIFIED-PRODUCT-EXAMPLE.md`, `SOURCES.md`,
`PUBLIC-INTERVIEW-SUMMARY.md`, `PUBLIC-INTERVIEW-SUMMARY-TEMPLATE.md`.

This pack assembles the verified evidence for the case study described in
`FOOD-CHECKER-DESIGN.md`. It keeps three layers separate throughout: **product facts**,
**source conclusions**, and **our interpretation**. It ends with an evidence register
that grades every load-bearing claim, and a clear READY / NOT READY verdict.

Nothing here is a medical recommendation. The case study is about decision friction at
the point of purchase, not clinical advice.

---

## 1. The problem, stated plainly

A shopper with a personal dietary constraint faces two steps under time pressure at the
shelf: evaluate the product, then translate that evaluation into "is this compatible with
*my* constraint." Barcode-scanning apps solve the first step with a single fixed score.
The second step, the translation, is left to the shopper. That translation is the
friction the case study targets.

## 2. The contradiction hook (verified)

**Product (fact, S1):** Warburtons Wholemeal Medium (400g). Fibre 6.4 g/100 g. First
ingredient wholemeal wheat flour. Manufacturer markets it as "high in fibre."

**Profile A, high-fibre goal (source conclusion, S3 + S4):** UK guidance sets a 30 g/day
fibre target (SACN 2015), and "high fibre" is a lawful claim only at >=6 g/100 g. At
6.4 g/100 g this loaf qualifies. **Verdict: good.**

**Profile B, low-FODMAP for IBS (source conclusion, S2):** Monash University lists
wholemeal wheat bread as high-FODMAP (fructans). **Verdict: avoid, at typical servings.**

**Interpretation:** Same barcode, opposite verdict, driven entirely by the shopper's
constraint. A fixed score cannot express both answers at once. Full working, including
the dose-dependence caveat and the note that Yuka's score direction is inferred rather
than scanned, is in `VERIFIED-PRODUCT-EXAMPLE.md`.

## 3. The incumbent's method, described neutrally (verified, S5)

By Yuka's own documentation, a food's score combines three fixed components: nutritional
quality at 60% (calculated on a Nutri-Score basis), additives at 30% (a single high-risk
additive caps the score at 49/100), and a 10% organic bonus. The score is computed the
same way for every user.

This is stated as a design fact, not a failing. It is the right tool for its job:
delivering one science-based nutrition-and-additives signal to a wide audience. The point
for this case study is narrow and factual: the published method has no input for an
individual's dietary constraint, so it cannot, by construction, give the high-fibre
shopper and the IBS shopper different answers for the same wholemeal loaf. That is the
gap Food-Checker addresses.

Fair framing to keep: Food-Checker is not "better than Yuka." It targets a different
step. Yuka evaluates the product; Food-Checker removes the personal-translation step.

## 4. Behavioural diagnosis (framework-grounded)

**COM-B (S6, Michie et al. 2011).** A behaviour needs Capability, Opportunity, and
Motivation. A generic score improves the shopper's Capability (it supplies an evaluation
they could not compute themselves) and Opportunity (it is instant, in-store). What it does
not resolve is acting on Motivation *in the shopper's specific context*: the person is
motivated to honour their own constraint, but must still translate a general score into a
personal decision. Interpretation: the residual friction sits at the point where
capability meets a personal goal that the tool does not represent.

**Dual-process theory (S7 Evans & Stanovich 2013; S8 Kahneman 2011).** Careful label
logic ("does wholemeal wheat trigger my IBS at this portion?") is slow, deliberative
Type 2 / System 2 reasoning. The shopper is doing it under System 1 conditions: rushed,
low-attention, many small decisions. A fixed score does not remove the Type 2 step for a
constrained shopper; it still has to be reasoned through manually. Personalising the
verdict is what actually removes the step.

**Cognitive load (S9, Sweller 1988).** Working memory is limited, and the low-FODMAP case
shows why the load is real: the shopper must hold a trigger list, scan an ingredient
list, and judge a dose threshold, all at the shelf. Load rises with each constraint. This
is the mechanism behind the interview-reported cost of "spending ages in store."

## 5. Scope, stated honestly

Sustainability scoring is out of scope for this case study. This is a scoping decision on
data-reliability grounds (food-miles and lifecycle data are too unreliable to build a
credible intervention on), not a claim that sustainability sits outside the behavioural
mechanism. The same point-of-purchase, high-load conditions plausibly apply to
sustainability trade-offs; it is excluded to keep an unreliable-data problem from muddying
a behavioural-friction argument.

---

## 6. Evidence register

Every load-bearing claim, graded. **Fully supported** = verified against a Reliability A
source this session. **Partly supported** = supported but with a caveat or a source still
to be opened directly. **Unsupported** = not verified here; do not publish as fact.

### Fully supported

| # | Claim | Source |
| --- | --- | --- |
| 1 | Warburtons Wholemeal Medium contains 6.4 g fibre/100 g and lists wholemeal wheat flour as its first ingredient. | S1 (manufacturer) |
| 2 | The manufacturer markets the product as "high in fibre." | S1 |
| 3 | Monash University classifies wholemeal wheat bread as high-FODMAP (fructans). | S2 |
| 4 | Yuka's score = 60% nutrition (Nutri-Score based) + 30% additives + 10% organic, computed identically for all users; one high-risk additive caps the score at 49/100. | S5 (Yuka) |
| 5 | Yuka's published method has no input for an individual dietary constraint. | S5 (by inspection of the method) |
| 6 | COM-B (Capability, Opportunity, Motivation -> Behaviour) is a validated behaviour model. | S6 |
| 7 | Dual-process theory (fast/automatic vs slow/deliberative cognition) is an established account. | S7, S8 |
| 17 | Four individual interviews were conducted, illustrating the shared decision-friction mechanism across four different dietary contexts (a self-observed skin-related avoidance pattern, an IBS trigger list, self-composed longevity principles, and clinical pre-diabetes guidance). | S13 (private transcripts + `PUBLIC-INTERVIEW-SUMMARY.md`) |
| 18 | The eight recurring themes documented in `PUBLIC-INTERVIEW-SUMMARY.md` (translation difficulty, label/ingredient complexity, time/social pressure, fallback to familiar products, competing-criteria uncertainty, desire for a fast personalised explanation, desire to know why a product was flagged, distrust of absolute/medical-sounding claims) are each grounded in specific statements across the four interviews. | S13 |

### Partly supported

| # | Claim | Source | Caveat |
| --- | --- | --- | --- |
| 8 | UK guidance recommends 30 g fibre/day for adults. | S3 | Verified body and topic; open the report to quote the exact recommendation line. |
| 9 | A "high fibre" claim requires >=6 g/100 g in GB/EU law. | S4 | Well established; regulation Annex not opened this session. Confirm wording. |
| 10 | The product is one to "avoid" for a low-FODMAP shopper. | S2 | True at typical servings; FODMAP is dose-dependent and small portions may be tolerated (Monash app not accessed). |
| 11 | Yuka would score this loaf favourably (so the same "good" reaches both shoppers). | S5 + interpretation | Direction inferred from the Nutri-Score-based method, not from a scan. Scan to confirm before asserting a number. |
| 12 | Cognitive load theory underpins the "ages in store" cost. | S9 | Foundational source not opened this session; confirm access or cite a review. |

### Unsupported (do not publish as fact until sourced)

| # | Claim | Status |
| --- | --- | --- |
| 13 | World Cancer Research Fund reviewed Yuka's additive-penalty methodology. | NOT FOUND (S10). WCRF news/blog index shows no Yuka review. Drop or source exactly. |
| 14 | Yuka's data accuracy is declining. | NOT VERIFIED (S11). No citable source located. |
| 15 | Named registered dietitians have publicly criticised Yuka's fixed scoring. | NOT VERIFIED (S12). Not needed; the gap is already shown by S5. |
| 16 | Any claim of more than four documented interviews (for example "dozens of conversations"). | STILL UNSUPPORTED. Exactly four interviews are logged, in `PUBLIC-INTERVIEW-SUMMARY.md` (S13). Do not cite a larger number, or specific quotes beyond what that file records, unless a separate, actually-documented log is produced. |
| 19 | Prevalence, market size, clinical effectiveness of any diet-symptom relationship (in particular, any diet-acne relationship), or willingness to pay. | NOT SUPPORTED BY THE INTERVIEWS (S13). Four formative interviews illustrate a recurring mechanism; they cannot establish any of these. One participant's description of a link between her diet and her skin is her own perceived pattern, stated by her as such — do not present it as an established medical or clinical finding. |

---

## 7. Verdict

**READY.**

The contradiction example is supported well enough to use publicly. The core hook rests
entirely on Reliability A sources: verified manufacturer product data (S1), the
diet-developer's own FODMAP classification (S2), and, on the fibre side, UK public-health
guidance plus the legal claim threshold the manufacturer itself relies on (S3, S4). The
verdict genuinely flips between two clearly defined profiles for one real, named product.
The behavioural framing (COM-B, dual-process, cognitive load) is anchored to citable
sources, and the incumbent's method is described from its own documentation in neutral
terms.

Two conditions before publishing, both easy to meet:

1. **Publish with the stated caveats, not without them.** Say "high-FODMAP at typical
   servings" (dose-dependence), and either scan the loaf to state Yuka's actual score or
   keep the Yuka direction as clearly-labelled inference.
2. **Drop or re-source the unsupported incumbent-criticism claims (register #13-#15).**
   The case does not need them; over-reaching on them is the main credibility risk. Lead
   the critique from Yuka's own published method (S5), which is both fair and airtight.
3. **Describe the interview evidence exactly as it is.** Exactly four individual
   interviews exist (see `PUBLIC-INTERVIEW-SUMMARY.md`), each anonymised as P01-P04.
   Present them as formative interviews illustrating a recurring mechanism, not as
   representative research, and do not use a direct quotation from any participant —
   consent to quote was not recorded in the transcripts supplied. Do not state a
   participant count higher than four.

**If, on review, you are unwilling to publish with caveat (1),** the safer alternative is
to keep the same two profiles but swap to a product whose FODMAP status is not
dose-sensitive at normal servings (for example a product whose added fibre is chicory root
/ inulin, which Monash treats as high-FODMAP, paired against its "high fibre" on-pack
claim). That removes the dose caveat, at the cost of re-verifying a new product's data.
Given the current example already clears the bar, this is a fallback, not a requirement.
