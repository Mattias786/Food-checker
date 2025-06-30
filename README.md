# Food-checker
Building AI course project
# Summary
A mobile app that uses AI to evaluate the nutritional quality and environmental impact of food products in real-time. Shoppers scan barcodes to receive a score out of 100, a plain languange summary of nutiritional pros and cons, and a traffic-light indicator for sustinability. The goal: empower consumers to make informed, personalised, and sustinable dietary choices effortlessly.

# Background
Most people want to eat healthily and responsposibly, but navigating supermarket labels is confusing. Packages are often overloaded with technical jargon, marketing claims, and inconsistent standards. 
Movement liks "eat whole foods" or "shop local" are gaining momentum but at the point of purchase, most consumers lack accessible and actionable data to guide healthier, greender decisions. The result? Poor food choices driven by habit, confusion, or convenience. 

<p align="center">
  <img src="https://github.com/user-attachments/assets/df317331-7dd9-4c67-a5b1-f87199163d9a" width="45%" style="margin-right: 10px;" />
  <img src="https://github.com/user-attachments/assets/d71786f2-5910-4a16-a387-abba4da9ee56" width="45%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d375ca4a-78ed-48a9-b970-eb6f4b5facc6" style="width:100%; max-width:none;" />
</p>

# How is it used?
Users scan a food product's barcode in store. the app responds instantly with:
 - A health score (0-100) based on nutirional value.
 - A plain English summary of nutritional pros and cons (e.g. "Low in saturated fat, but contains high added sugars").
 - A sustinability indicator (green/yellow/red) based on estimated food miles, packaging, and ingredients.
 - Optional personalised filters based on goals or sensitivities, such as:
+ Low sodium (for blood pressure)
+ High protein (for training)
+ Gluten-free, lactose-free, IBS-friendly
+ Keto/vegan/low sugar profiles
 - Over time, the app learns user prefernces to suggest healtheir or more sustinable swaps.

# Data sources and AI methods
Data sources 
1. Nutritional information sourced from:
 - [Open Food Facts API](https://static.openfoodfacts.org/data/openfoodfacts-mongodbdump.gz) and [USDA FoodData Central](https://www.usda.gov/) for macro/micronutrient data.
 - User and brand contributions to expand coverage, especially for independent or niche food producers not listed in global databases.
2. Environmental impact data drawn from:
 - [Ethical consumer](https://www.ethicalconsumer.org/), academic [Lifecycle Assessment (LCA)](https://ecochain.com/) databases, and publicly available product sustainability disclosures (e.g. packaging, emissions, origin).
 - Potential collaboration with [Environmental Working Group (EWG)](https://www.ewg.org/) to bolster transparency and credibility, especially regarding additive safety and pesticide use.

AI techniques 
1. Nutritional scoring model trained via supervised learning (e.g. logistic regression, decision trees) using datasets labeled by healthfulness according to established dietary frameworks (e.g. WHO, NHS Eatwell Guide, Nutri-Score).
 - These models classify foods into percentile scores.
 - With richer data, deep learning architectures (e.g. feedforward neural networks) could better model nuanced nutrient-risk pattern recognition (e.g. fiber-fat-sugar trade-offs).
2. Nutritional label summarization powered by transformer-based LLMs (e.g. GPT, BERT).
 - Converts dense ingredient and nutrition data into a user-friendly helath summaries.
 - Could highlight red flags (e.g. high sugar, emulsifiers, allergen risks) at a glance.
3. Environmental impact modeling via a hybrid of linear regression and rule-based AI:
 - Predicts estimated carbon footprint, food miles, and packaging impact.
 - Outputs are categorized with a traffic-light system (e.g. "UK-grown + recyclable packaging = green", "Air-freighted + plastic = red").
4. Personalization engine:
 - Uses collaborative filtering, nearest-neighbor models, and eventually RNNs to track evolving dietary preferences (e.g. gluten-free, low-sodium, keto).
 - Learns from user input and behavior to offer tailored scoring and suggestions.
5. Product identification and matching:
 - Begins with barcode scanning or text search linked to public APIs.
 - Future development may explore CNN-based OCR/image models to scan packaging visualy.

# Challenges
Data quality: Some products lack complete or reliable nutition or origin data.
Environmental complexity: Establishing food miles or processing impact can be tough without full suply chain visibility.
User fatigue: For a pleasant UX the results must be near-instant and intuitive; otherwise the process risks feeling cumbersome or discouraging.
Cultural variance: Food preferences and avilability vary by region; scoring must be context-sensitive and inclusive. 

# What next?
 - Develop a proof-of-concept app using a sample dataset and barcode API.
 - Test user flows and core scoring functionality in real-world settings.
 - Partner with trusted food labeling authorities, sustainability certifiers, and transparent food brands to improve data quality, build trust, and expand the app’s verified product coverage.
 - Explore future integration with online grocery stores, smart kitchen devices, or diet planning tools.

# Acknowledgments
Services providing similar features already exist, such as Yuka, NHS Health App. However, these often: offer very binary low quality variable scoring, lack personalisaiton and sustainability analysis, and don't adapt to the user over time. Food-Checker aims to bridge those gaps, combining AI, user experience design, and trustworthy data to create a smarter, more ethical way to shop. 
