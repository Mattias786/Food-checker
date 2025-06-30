# Food-checker
Building AI course project
# Summary
A mobile app that uses AI to evaluate the nutritional quality and environmental impact of food products. Shoppers can scan barcodes to receive a health score out of 100, a summary of nutritional pros and cons, and a traffic-light indicator for food mileage. The goal: empower consumers to make informed, sustainable dietary choices.
# Background
When going to the shops, many people have good intentions in regards to buying healthily and sustainibly. Although some would say "Well thats easy. Read the various packages and compare the options", but as we all know it is not that simple. Changing dietary habits is challenging due to ingrained behaoivors, misinformation, and marketing manipultion. Whilst movements like buy wholefoods and "eat local" are gaining traction, a major information gap persists in how accessible and actionable the data is at point of puchase. 

<p align="center">
  <img src="https://github.com/user-attachments/assets/df317331-7dd9-4c67-a5b1-f87199163d9a" width="45%" style="margin-right: 10px;" />
  <img src="https://github.com/user-attachments/assets/d71786f2-5910-4a16-a387-abba4da9ee56" width="45%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d375ca4a-78ed-48a9-b970-eb6f4b5facc6" style="width:100%; max-width:none;" />
</p>

# How is it used?
Users would scan a food product’s barcode in-store. The app then:
 - Shows a health score (0-100) based on nutritional value.
 - Summarizes nutritional strengths/weaknesses.
 - Displays a traffic-light color (green/yellow/red) based on food miles or sustainability data.
Users could create unique profiles with their specific dietary needs and aspirations, for example macro-nutrients could be filtred based on: low calorie (weight loss), vegan, sodium interance, glucose sensitivitity (perfect for Diabetics), high fat low sugars (in line with keto diet), dair (lactose intolerant or skin concerns), IBS and so on.

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
 - These models classify foods into traffic-light tiers or percentile scores.
 - With richer data, deep learning architectures (e.g. feedforward neural networks) could better model complex nutrient interactions (e.g. fiber-fat-sugar trade-offs).
2. Nutritional label summarization powered by transformer-based LLMs (e.g. BERT, GPT).
 - Converts dense ingredient and nutrition data into a user-friendly summary of pros and cons, prioritizing readability and time-to-decision.
 - Could highlight red flags (e.g. high sugar, emulsifiers, allergen risks) in under 100 words.
3. Environmental impact modeling via a hybrid of linear regression and rule-based AI:
 - Predicts estimated carbon footprint, food miles, and packaging burden.
 - Rule-based agents categorize outputs using a traffic-light system (e.g. "UK-grown + recyclable packaging = green", "Air-freighted + plastic = red").
4. Personalization engine:
 - Uses collaborative filtering, nearest-neighbor models, and eventually RNNs to track evolving dietary preferences (e.g. gluten-free, low-sodium, keto).
 - Learns from user input and behavior to offer tailored scoring and suggestions.
5. Product identification and matching:
 - Begins with barcode scanning or text search linked to public APIs (e.g. Open Food Facts).
 - Future development may explore CNN-based OCR/image models to recognize unscanned items via visual packaging cues.





# Challenges
While the plan is straighforward and in theory the necessary data should be accessible, several potential roadblocks remain - remembering the principle 'garbage in, garbage out.'

 - Data reliability: Some products might lack complete or up-to-date nutrition and origin data.
 - Processing food miles: Accurately estimating mileage can be hard, especially when supply chain transparicy is poor or when dealing with products from smaller companies (SMEs).
 - User fatigue: For a pleasant user experience (UX) the results must be near-instant and intuaitve; otherwise the process risks feeling cumbersome or discouraging.
 - Cultural variance: Food norms and dietary needs differ by region, so scoring systems must remain flexible and context-sensitive.

# What next?
 - Start with a proof-of-concept app using a sample dataset and barcode scanner API, to test and demonstrate the core idea.
 - Let the development follow a cycle of experimentation, strategy building, contious refinement, and alternative exploration - a process that evolves through iteration. 
 - Reach out to labelling companies, health standards boards (such as those behind the food traffic light system), and eco-label certifies to source reliable, high quality data.
 - Leverage widespread firm inclusion for product info and sustainability claims.
 - In the long term, explore integration with online grocery platforms or even
 - Long-term: Integrate with online grocery platforms or kitchen equipment, such as teflon non stick pans or plastic cutting boards, to fact in health and environmental impacts at the point of use.

# Acknowledgments
Services providing similar features already exist, such as Yuka and teh NHS Health App. However, at the time of writing, the information they provide tends to be based on limited variables, offering only rough approximation. Morover, these tools lack personalisation and do not account for broader sustaimaibility considerations.
