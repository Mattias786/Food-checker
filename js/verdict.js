// Pure verdict logic, zero DOM dependency. See PORTFOLIO-SCOPE.md Section 10.

export const HIGH_FIBRE_THRESHOLD_G_PER_100G = 6;

export const PROFILES = {
  HIGH_FIBRE: 'high-fibre',
  LOW_FODMAP: 'low-fodmap',
};

function computeHighFibreVerdict(product) {
  const fibre = product.fibrePer100g;
  if (fibre >= HIGH_FIBRE_THRESHOLD_G_PER_100G) {
    return {
      verdict: 'good',
      label: 'Compatible',
      reasoning: `${fibre}g fibre per 100g meets the >=${HIGH_FIBRE_THRESHOLD_G_PER_100G}g/100g threshold for a lawful "high fibre" claim (Regulation (EC) No 1924/2006), supporting the UK SACN 30g/day fibre recommendation.`,
    };
  }
  return {
    verdict: 'avoid',
    label: 'Below fibre threshold',
    reasoning: `${fibre}g fibre per 100g falls below the >=${HIGH_FIBRE_THRESHOLD_G_PER_100G}g/100g threshold for a "high fibre" claim, so it does not support a high-fibre goal as strongly as labelled high-fibre products.`,
  };
}

function computeLowFodmapVerdict(product) {
  if (product.isHighFodmap) {
    return {
      verdict: 'avoid',
      label: 'High-FODMAP at typical servings',
      reasoning: 'Classified as high-FODMAP (fructans) at typical servings, per Monash University\'s public food list. FODMAP content is dose-dependent; a smaller portion may be better tolerated.',
    };
  }
  return {
    verdict: 'good',
    label: 'Compatible',
    reasoning: 'Not classified as high-FODMAP at typical servings, per Monash University\'s public food list.',
  };
}

/**
 * @param {{fibrePer100g: number, isHighFodmap: boolean}} product
 * @param {'high-fibre'|'low-fodmap'} profile
 */
export function computeVerdict(product, profile) {
  switch (profile) {
    case PROFILES.HIGH_FIBRE:
      return computeHighFibreVerdict(product);
    case PROFILES.LOW_FODMAP:
      return computeLowFodmapVerdict(product);
    default:
      throw new Error(`Unknown profile: ${profile}`);
  }
}
