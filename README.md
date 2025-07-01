# Food-checker
Building AI course project

## Summary
A mobile app that uses AI to evaluate the nutritional quality and environmental impact of food products in real-time. Shoppers scan barcodes to receive a score out of 100, a plain language summary of nutritional pros and cons, and a traffic-light indicator for sustainability. The goal: empower consumers to make informed, personalised, and sustainable dietary choices effortlessly.

## Background
Most people want to eat healthily and responsibly, but navigating supermarket labels is confusing. According to the IGD, over 60% of UK shoppers say they struggle to understand nutritional information on packaging, and a growing body of evidence links poor labelling comprehension to rising rates of diet-related conditions like obesity and hypertension. Packages are often overloaded with technical jargon, marketing claims, and inconsistent standards.

Movements like "eat whole foods" or "shop local" are gaining momentum but at the point of purchase, most consumers lack accessible and actionable data to guide healthier, greener decisions. The result? Poor food choices driven by habit, confusion, or convenience.

<p align="center">
  <img src="https://github.com/user-attachments/assets/00d6c664-a002-4ff0-bf26-38779c0e0d98"width:100%; max-width:none;" />
</p>

## How is it used?
Users scan a food product's barcode in store. the app responds instantly with:
 - A health score (0-100) based on nutritional value.
 - A plain English summary of nutritional pros and cons (e.g. "Low in saturated fat, but contains high added sugars").
 - A sustainability indicator (green/yellow/red) based on estimated food miles, packaging, and ingredients.
 - Optional personalised filters based on goals or sensitivities, such as:
  
    - Low sodium (for blood pressure)  
    - High protein (for training)  
    - Gluten-free, lactose-free, IBS-friendly  
    - Keto / vegan / low sugar profiles

Over time, the app learns user preferences to suggest healthier or more sustainable swaps.

## Data sources and AI methods
####  **Data Sources**
**• Nutritional information sourced from:**
 - [Open Food Facts API](https://static.openfoodfacts.org/data/openfoodfacts-mongodbdump.gz) and [USDA FoodData Central](https://www.usda.gov/) for macro/micronutrient data.
 - User and brand contributions to expand coverage, especially for independent or niche food producers not listed in global databases.

**• Environmental impact data drawn from:**
 - [Ethical consumer](https://www.ethicalconsumer.org/), academic [Lifecycle Assessment (LCA)](https://ecochain.com/) databases, and publicly available product sustainability disclosures (e.g. packaging, emissions, origin).
 - Potential collaboration with [Environmental Working Group (EWG)](https://www.ewg.org/) to bolster transparency and credibility, especially regarding additive safety and pesticide use.

####  **AI Techniques**
**• Nutritional scoring model trained via supervised learning (e.g. logistic regression, decision trees) using datasets labeled by healthfulness according to established dietary frameworks (e.g. WHO, NHS Eatwell Guide, Nutri-Score).**
 - These models classify foods into percentile scores.
 - With richer data, deep learning architectures (e.g. feedforward neural networks) could better model nuanced nutrient-risk pattern recognition (e.g. fiber-fat-sugar trade-offs).

**• Nutritional label summarization powered by transformer-based LLMs (e.g. GPT, BERT).**
 - Converts dense ingredient and nutrition data into user-friendly health summaries.
 - Could highlight red flags (e.g. high sugar, emulsifiers, allergen risks) at a glance.

**• Environmental impact modeling via a hybrid of linear regression and rule-based AI:**
 - Predicts estimated carbon footprint, food miles, and packaging impact.
 - Outputs are categorized with a traffic-light system (e.g. "UK-grown + recyclable packaging = green", "Air-freighted + plastic = red").

**• Personalization engine:**
 - Uses collaborative filtering, nearest-neighbor models, and eventually RNNs to track evolving dietary preferences (e.g. gluten-free, low-sodium, keto).
 - Learns from user input and behavior to offer tailored scoring and suggestions.

**• Product identification and matching:**
 - Begins with barcode scanning or text search linked to public APIs.
 - Future development may explore CNN-based OCR/image models to scan packaging visually.

## Challenges
Data quality: Some products lack complete or reliable nutrition or origin data.

Environmental complexity: Establishing food miles or processing impact can be tough without full supply chain visibility.

User fatigue: For a pleasant UX the results must be near-instant and intuitive; otherwise the process risks feeling cumbersome or discouraging.

Cultural variance: Food preferences and availability vary by region; scoring must be context-sensitive and inclusive. 

## What next?
 - Develop a proof-of-concept app using a sample dataset and barcode API.
 - Test user flows and core scoring functionality in real-world settings.
 - Partner with trusted food labeling authorities, sustainability certifiers, and transparent food brands to improve data quality, build trust, and expand the app’s verified product coverage.
 - Explore future integration with online grocery stores, smart kitchen devices, or diet planning tools.

## Acknowledgments
Services providing similar features already exist, such as [Yuka](https://yuka.io/en/), [NHS Health App](https://apps.apple.com/gb/app/nhs-food-scanner/id1182946415). However, these often rely on binary or low variable quality scoring, lack personalisation and sustinability analysis, and don't adapt to the user over time. Food-Checker aims to bridge those gaps by combining AI, user experience design, and trustworthy data to create a smarter, more ethical way to shop.

That said, Food-Checker is designed to empower healthier choices through AI, but is not a diagnostic or medical tool. Ethical use, transparency, and respect for personal health data are core to the approach.

## Demo
Explore the prototype here: [FoodChecker](https://foodchecker.lovable.app/)
