# Verified Product Example: The Contradiction Hook

**Purpose:** Supply one real, named packaged product whose verdict reasonably flips
between two clearly defined user profiles, using verified product data and publicly
citable profile rules. This is the single asset the case study hangs on (see
`FOOD-CHECKER-DESIGN.md`, "The Assignment").

**Compiled:** 12 July 2026. All web sources accessed 12 July 2026.

This document deliberately separates three layers, which must not be blurred:

1. **Product facts** (what the manufacturer states).
2. **Source conclusions** (what named authorities say the profile rules are).
3. **Our interpretation** (how we read the two together). Interpretation is labelled
   as such and is not presented as verified fact.

---

## 1. Product facts (verified against the manufacturer)

**Product:** Warburtons Wholemeal Medium (400g loaf)
**Manufacturer:** Warburtons Ltd (Bolton, UK)
**Barcode (GTIN, from manufacturer product image):** 5010044000404
**Source:** Warburtons official product page, accessed 12 July 2026.
Link: https://www.warburtons.co.uk/products/breakfast/bread/wholemeal-medium-400g/

**Ingredients (verbatim from manufacturer):**
Wholemeal Wheat Flour, Water, Yeast, Vegetable Oils (Rapeseed and Sustainable Palm),
Salt, Wheat Gluten, Emulsifiers: E471, E481, E472e; Soya Flour, Preservative: Calcium
Propionate; Flour Treatment Agent: Ascorbic Acid (Vitamin C).

**Nutrition, per 100g (verbatim from manufacturer):**

| Value | Per 100g |
| --- | --- |
| Energy | 974 kJ / 231 kcal |
| Fat | 2.8 g (of which saturates 0.5 g) |
| Carbohydrate | 37.8 g (of which sugars 2.4 g) |
| Fibre | 6.4 g |
| Protein | 10.6 g |
| Salt | 0.95 g |

**Manufacturer marketing claim (verbatim):** "Baked with 100% wholemeal flour, our
Wholemeal loaves are high in fibre." The page also displays a green "High Fibre" badge.

**Verification status:** Product facts taken directly from the manufacturer (a primary
source). Not independently cross-checked against a second database in this session, as
the manufacturer is the authoritative source for its own product. Cross-checking the
same GTIN on Open Food Facts is a recommended, low-cost extra step before publishing.

---

## 2. Source conclusions (the two profile rules, each from a named authority)

### Profile A: "High-fibre goal" shopper

**Rule used:** Increasing daily dietary fibre is a recognised public-health goal, and
wholemeal bread is a standard recommended way to do it.

- The UK Scientific Advisory Committee on Nutrition (SACN) recommended that adults
  consume 30 g of dietary fibre per day (SACN, *Carbohydrates and Health*, Public
  Health England, 2015).
- A "high fibre" claim on a packaged food is permitted in GB/EU law only where the
  product contains at least 6 g of fibre per 100 g (Regulation (EC) No 1924/2006 on
  nutrition and health claims, Annex; retained in GB law).

**Applied to this product:** 6.4 g fibre per 100 g meets the 6 g/100 g legal threshold,
which is why the manufacturer's "high fibre" claim is lawful. For a shopper whose goal
is "eat more fibre," this product qualifies.

**Verdict for Profile A: COMPATIBLE / GOOD.**

### Profile B: "Low-FODMAP" shopper (managing IBS)

**Rule used:** People following a low-FODMAP diet are advised to limit high-FODMAP
foods, and wholemeal wheat bread is classified as high-FODMAP.

- Monash University (which developed the low-FODMAP diet) states on its public food
  list that the main FODMAPs in grains and cereals are fructans, and that foods
  "particularly rich in fructans include wholemeal bread." Its summary table lists
  "Wheat/rye/barley based breads" under high-FODMAP foods, with "wheat/rye/barley free
  breads" and "sourdough spelt bread" among the low-FODMAP alternatives (Monash
  University, "High and low FODMAP foods," accessed 12 July 2026).

**Applied to this product:** The first and dominant ingredient is wholemeal wheat flour,
and wheat gluten is also present, so wheat fructans are the expected primary FODMAP. For
a shopper avoiding high-FODMAP foods, this product is one to avoid at a typical serving.

**Verdict for Profile B: AVOID / NOT COMPATIBLE (at typical servings).**

---

## 3. Our interpretation (labelled as interpretation, not verified fact)

**The verdict flips.** The identical product, Warburtons Wholemeal Medium, is a
recommended choice for Profile A (high fibre, lawful "high fibre" claim, aligned with
SACN's fibre goal) and a food to avoid for Profile B (wholemeal wheat bread is
high-FODMAP per Monash). Same barcode, opposite conclusion. The difference is entirely
in the shopper's constraint, not in the product.

**Why a fixed score cannot capture this.** By Yuka's own published method (see
`SOURCES.md`), a product's score is 60% nutrition (Nutri-Score based, which rewards
fibre and wholegrain content), 30% additives, and 10% organic bonus, and it is computed
identically for every user. A wholemeal loaf that is high in fibre and low in saturated
fat is exactly the kind of product a Nutri-Score-based system rates well. So the same
generic "good" score is shown to the high-fibre shopper (for whom it is genuinely good)
and to the IBS shopper (for whom it is a trigger). The translation from "good score" to
"good for my constraint" is left to the shopper. This is the structural friction the
case study is about.

*Note: the direction of Yuka's score here (favourable) is inferred from Yuka's published
methodology, not from a scan we performed. If the piece states Yuka's actual score for
this loaf, scan the product first and record the result.*

---

## 4. Limitations to state honestly in the write-up

- **FODMAP is dose-dependent.** Monash tests FODMAP content by serving size. Its public
  guidance flags wholemeal/wheat bread as high-FODMAP, but a small portion (for example
  a single slice) can fall into a lower band in the paid Monash app. We did not have
  access to the app's per-serving thresholds in this session. The honest framing is:
  "high-FODMAP at typical servings, per Monash's public guidance." This dose nuance does
  not weaken the contradiction; if anything it strengthens the core thesis, because the
  in-store shopper cannot easily work out the safe dose from the label.
- **Yuka score direction is inferred, not scanned** (see the note in section 3).
- **Second-database cross-check not yet done.** Manufacturer data is primary and
  sufficient, but a quick Open Food Facts check on GTIN 5010044000404 is worth adding.
- **No medical claims.** This example illustrates decision friction. It is not dietary
  advice, and the case study should not imply clinical validity for any profile.

---

## 5. One-line summary for the case study

> Warburtons Wholemeal Medium is "high in fibre" (6.4 g/100 g, a lawful claim and a good
> pick for a fibre goal) and simultaneously a high-FODMAP wheat bread that an IBS shopper
> is advised to avoid. One product, two constraints, opposite verdicts, and a single
> fixed score cannot tell them apart.
