# Food-checker
Building AI course project
# Summary
A mobile app that uses AI to evaluate the nutritional quality and environmental impact of food products. Shoppers can scan barcodes to receive a health score out of 100, a summary of nutritional pros and cons, and a traffic-light indicator for food mileage. The goal: empower consumers to make informed, sustainable dietary choices.
# Background
When going to the shops, many people have good intentions in regards to buying healthily and sustainibly. Although some would say "Well thats easy. Read the various packages and compare the options", but as we all know it is not that simple. Changing dietary habits is challenging due to ingrained behaoivors, misinformation, and marketing manipultion. Whilst movements like buy wholefoods and "eat local" are gaining traction, a major information gap persists in how accessible and actionable the data is at point of puchase. 
[Insert photo: 1st image - product that is generaly considered healthy 2nd image - comparison product. Show metrics on both products and show true disparity in stats of each]
Example to use: white supermaker bread (Hovis) and sourdough bread (Jasons)
![Uploading Screenshot 2025-06-26 at 22.28.03.png…]()
![Uploading Screenshot 2025-06-26 at 22.28.03.png…]()
![Uploading Screenshot 2025-06-26 at 22.28.03.png…]()
![Uploading Screenshot 2025-06-26 at 22.28.03.png…]()

# How is it used?
Users would scan a food product’s barcode in-store. The app then:
 - Shows a health score (0-100) based on nutritional value.
 - Summarizes nutritional strengths/weaknesses.
 - Displays a traffic-light color (green/yellow/red) based on food miles or sustainability data.
Users could create unique profiles with their specific dietary needs and aspirations, for example macro-nutrients could be filtred based on: low calorie (weight loss), vegan, sodium interance, glucose sensitivitity (perfect for Diabetics), high fat low sugars (in line with keto diet), dair (lactose intolerant or skin concerns) and so on.

# Data sources and AI methods
Data sources:
 - Open Food Facts API or USDA FoodData Central for nutrition facts. [Check how Yuka sources its nutritional data]
 - Environmental Working Group or academic lifecycle assessment datasets for environmental impact.
 - GS1 or other barcode databases for product information.

AI techniques:
 - Nutritional evaluation model based on established dietary guidelines. [needs to be more specific, which ML model will be used or at least trialled]]
 - [LLM] Text summarization for displaying nutritional pros/cons.
 - Environmental impact scoring using regression models and rule-based AI for traffic light categorization.
 - (Optional extension): Collaborative filtering for personalized suggestions.

To show AI knowledge and learning from course use words like: Conveluted Neural Network, Reciprical Neural Network, Large Language Model, Agent, Neuron, Deep learning, Parameters, Data inputs, linear regression, logistic regression, vectors, nearest neighbour model, API's, transformers etc
For example, a rough optimal route between selected places could be calculated using AI methods suitable for solving the Travelling Salesman Problem.

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
