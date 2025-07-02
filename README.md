  # Food-checker
Final project for the Building AI course

## Summary
A mobile app that uses AI to evaluate the nutritional quality and environmental impact of food products in real-time. Shoppers scan barcodes to receive a score out of 100, a plain language summary of nutritional pros and cons, and a traffic-light indicator for sustainability. The goal: empower consumers to make informed, personalised, and sustainable dietary choices effortlessly.

## Background
Most people want to eat healthily and responsibly, but navigating supermarket labels is confusing. According to the IGD, over 60% of UK shoppers say they struggle to understand nutritional information on packaging, and a growing body of evidence links poor labelling comprehension to rising rates of diet-related conditions like obesity and hypertension. Packages are often overloaded with technical jargon, marketing claims, and inconsistent standards.

Movements like "eat whole foods" or "shop local" are gaining momentum but at the point of purchase, most consumers lack accessible and actionable data to guide healthier, greener decisions. The result? Poor food choices driven by habit, confusion, or convenience.

<p align="center">
  <img src="https://github.com/user-attachments/assets/00d6c664-a002-4ff0-bf26-38779c0e0d98"width:100%; max-width:none;" />
</p>

## How is it used?
Users scan a food product's barcode in store. The app responds instantly with:
 - A health score (0-100) based on nutritional quality.
 - A plain English summary of nutritional pros and cons (e.g. "Low in saturated fat, but contains high added sugars").
 - A sustainability indicator (green/yellow/red) based on estimated food miles, packaging, and ingredients.
 - Optional personalised filters based on goals or sensitivities, such as:
  
    - Low sodium (for blood pressure)  
    - High protein (for training)  
    - Gluten-free, lactose-free, IBS-friendly  
    - Keto / vegan / diabetic friendly profiles

Over time, the app learns user preferences to suggest healthier or more sustainable swaps.

## Data sources and AI methods
####  **Data Sources**
**• Nutritional information sourced from:**
 - [Open Food Facts API](https://static.openfoodfacts.org/data/openfoodfacts-mongodbdump.gz) and [USDA FoodData Central](https://www.usda.gov/) for macro/micronutrient data.
 - User and brand contributions to expand coverage, especially for independent or niche food producers not listed in global databases.

**• Environmental impact data drawn from:**
 - The [Ethical Consumer](https://www.ethicalconsumer.org/), academic [Lifecycle Assessment (LCA)](https://ecochain.com/) databases, and publicly available product sustainability disclosures (e.g. packaging, emissions, origin).
 - Potential collaboration with [Environmental Working Group (EWG)](https://www.ewg.org/) to bolster transparency and credibility, especially regarding additive safety and pesticide use.

####  **AI Techniques**
**• Nutritional scoring model trained via supervised learning (e.g. logistic regression, decision trees) using datasets labeled by healthfulness according to established dietary frameworks (e.g. WHO, NHS Eatwell Guide, Nutri-Score).**
 - These models will be used to classify foods into percentile scores.
 - With richer data, deep learning architectures (e.g. feedforward neural networks) could better model nuanced nutrient-risk pattern recognition (e.g. fiber-fat-sugar trade-offs).

**• Nutritional label summarisation powered by transformer-based LLMs (e.g. GPT, BERT).**
 - Converts dense ingredient and nutrition data into user-friendly health summaries.
 - Could highlight red flags (e.g. high sugar, emulsifiers, allergen risks) at a glance.

**• Environmental impact modeling via a hybrid of linear regression and rule-based AI:**
 - Predicts estimated carbon footprint, food miles, and packaging impact.
 - Outputs are categorized with a traffic-light system (e.g. "UK-grown + recyclable packaging = green", "Air-freighted + plastic = red").

**• Personalisation engine:**
 - Uses collaborative filtering, nearest-neighbor models, and eventually RNNs to track evolving dietary preferences (e.g. gluten-free, low-sodium, keto).
 - Learns from user input and behavior to offer tailored scoring and suggestions.
 - Furthermore, the app can also accommodate multi-user or group contexts, allowing users to save multiple profiles (e.g. for family members or dinner guests with allergies or intolerances).

**• Product identification and matching:**
 - Begins with barcode scanning or text search linked to public APIs.
 - Future development may explore CNN-based image models to scan packaging visually.

## Code samples:

Here you can see a couple of code snippets that illustrate how Food-Checker evaluates the nutritional quality of products — one using threshold logic for protein content, and another using a regression model to predict an overall nutrient-based health score.

### Protein Scoring (Per 100g)

This function evaluates how much protein a product contains per 100g and returns a component score plus a friendly explanation.

    if protein_per_100g < 1:
        return {
            "score": 0,
            "label": "Very Low",
            "message": "Negligible protein content. Won’t contribute much nutritionally."
        }
    elif 1 <= protein_per_100g < 3:
        return {
            "score": 10,
            "label": "Low",
            "message": "Low protein – better when paired with a protein-rich food."
        }
    elif 3 <= protein_per_100g < 6:
        return {
            "score": 25,
            "label": "Moderate",
            "message": "Moderate protein – acceptable for snacks or side dishes."
        }
    elif 6 <= protein_per_100g < 10:
        return {
            "score": 40,
            "label": "High",
            "message": "High protein – good contribution to daily intake."
        }
    elif 10 <= protein_per_100g < 15:
        return {
            "score": 55,
            "label": "Very High",
            "message": "Very high in protein – ideal for recovery or active lifestyles."
        }
    else:
        return {
            "score": 65,
            "label": "Extremely High",
            "message": "Extremely protein-dense – best consumed in balance with other nutrients."
        }

Example:

    greek_yogurt = score_protein_density(10.2)
    print(greek_yogurt)

    {
      'score': 55,
      'label': 'Very High',
      'message': 'Very high in protein – ideal for recovery or active lifestyles.'
    }
    
### Linear Regression – Predicting Nutrient-Based Health Score
This simple regression model is trained on historical data to estimate a baseline health score using only numeric nutrients (e.g. sugar, fiber, fat, etc.). It’s just one piece of the overall scoring process — other factors like emulsifiers, organic status, and whole food content are handled separately.

    from sklearn.linear_model import LinearRegression
    import numpy as np

    # Features: [sugar_g, fiber_g, saturated_fat_g, protein_g, sodium_mg]
    
    X = np.array([
    [20, 1.5, 8, 2, 500],
    [5, 4.2, 1, 7, 100],
    [12, 2.0, 5, 3, 250]
    ])

    # Health scores labelled from expert data (e.g. Nutri-Score)
    y = np.array([30, 85, 60])

    model = LinearRegression()
    model.fit(X, y)

    # Predict for a new food item
    new_product = np.array([[10, 3.5, 2, 6, 180]])
    predicted_score = model.predict(new_product)

    print(f"Estimated nutrient-based health score: {predicted_score[0]:.2f}")

Output

    Estimated nutrient-based health score: 72.46

## Challenges
 - Incomplete data: Some products lack reliable nutrition or origin information, especially from smaller or less regulated brands. This limits the accuracy of health and sustainability scores.
 - Environmental opacity: Accurately estimating food miles and production impact is difficult without full supply chain transparency. Scores rely on best available data and will be updated as more granular sources become accessible.
 - User experience: For Food-Checker to be effective, results must be near-instant and intuitive. Any delay or overload of information risks user fatigue and drop-off.
 - Cultural variation: Dietary norms and product availability differ widely across regions. Scoring and recommendations must remain flexible and inclusive to remain relevant globally.
 - Nutritional complexity: Nutrition is not one-size-fits-all. Food-Checker highlights patterns and potential red flags, but does not attempt to provide personalised dietary prescriptions.
 - Interpretation risks: Users may over-rely on a single score or assume higher numbers always mean "better." We mitigate this with contextual messaging and encourage balance over score-chasing.
 - Ethical boundaries: Food-Checker is a decision-support tool, not a medical authority. It is designed to complement, not replace, professional advice, cultural knowledge, and individual experience. 

## What next?
 - Develop a proof-of-concept app using a sample dataset and barcode API.
 - Test user flows and core scoring functionality in real-world settings.
 - Partner with trusted food labeling authorities, sustainability certifiers, and transparent food brands to improve data quality, build trust, and expand the app’s verified product coverage.
 - Explore future integration with online grocery stores, smart kitchen devices, or diet planning tools.

## Acknowledgments
Services providing similar features already exist, such as [Yuka](https://yuka.io/en/) and the [NHS Health App](https://apps.apple.com/gb/app/nhs-food-scanner/id1182946415). These platforms have made important strides in guiding healthier food choices, but they often rely on fixed scoring frameworks. Yuka, for example, applies a hardcoded 60/30/10 weighting for nutrition, additives, and organic status, which don't adapt to evolving scientific nuance, individual preferences, or context. Furthermore, environmental sustainability is entirely absent from their services.

Food-Checker aims to bridge these gaps by combining adaptive AI models, integrated sustainability insights, and transparent data to create a smarter, more inclusive and ethical way to shop.

## Demo
Explore the prototype here: [FoodChecker](https://foodchecker.lovable.app/)
