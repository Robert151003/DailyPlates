'use client'

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';
import IngredientsList from '@/components/RecipeComponents/IngredientsList';
import IntroductoryDescription from '@/components/RecipeComponents/IntroductoryDescription';
import Method from '@/components/RecipeComponents/Method';

const page = () => {

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Dinner', href: '/Dinner' },
    { label: 'Salmon Sushi Bake', href: '/Dinner/SalmonSushiBake' },
  ];

  return (
    <section className="flex flex-col gap-10 ml-0 pl-4">

      {/* Breadcrumbs */}
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      {/* Intro */}
      <IntroductoryDescription
        title="Sushi Bake"
        serves="4"
        prepTime="20 mins"
        cookTime="15 mins"
        description="A crowd-pleasing deconstructed sushi dish made with seasoned rice, creamy salmon and crab, baked until warm and indulgent. Scoop, wrap, and enjoy with crispy seaweed snacks."
        imageUrl="/Images/SalmonSushiBake.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="ou.christian"
        authorUrl="https://onehappybite.com/salmon-sushi-bake-viral-recipe/"
      />

      {/* Ingredients */}
      <IngredientsList
        ingredientsHeaderNote="Everything you love about sushi — no rolling required 🍣"
        ingredientsFooterNote="Sriracha mayo can be substituted with mayo + sriracha to taste."
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "2 cups", item: "Uncooked Sushi Rice" },
          { amount: "2 tbsp", item: "Rice Vinegar" },
          { amount: "1 tbsp", item: "White Sugar" },
          { amount: "½ tsp", item: "Salt" },
          { amount: "10 oz", item: "Imitation Crab" },
          { amount: "8 oz", item: "Salmon (cooked & shredded)" },
          { amount: "4 oz", item: "Cream Cheese" },
          { amount: "⅓ cup", item: "Sriracha Mayo" },
          { amount: "", item: "Furikake Seasoning" },
          { amount: "", item: "Seaweed Snacks (for serving)" },
          { amount: "", item: "Sesame Seeds (optional)" },
          { amount: "", item: "Green Onion, chopped" },
        ]}
        nutrients={[
          { name: "Calories", value: "540 kcal" },
          { name: "Fat", value: "28g" },
          { name: "Saturates", value: "10g" },
          { name: "Carbs", value: "48g" },
          { name: "Sugars", value: "6g" },
          { name: "Protein", value: "26g" },
          { name: "Salt", value: "1.6g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="This dish is all about layers and gentle mixing."
        footerNote="Serve immediately while warm for the best texture and flavour."
        steps={[
          {
            step: 1,
            instruction: "Cook the sushi rice according to package instructions."
          },
          {
            step: 2,
            instruction: "In a microwave-safe bowl, combine rice vinegar, sugar, and salt. Microwave for about 30 seconds until dissolved, then gently mix into the cooked rice. Set aside."
          },
          {
            step: 3,
            instruction: "Season the salmon with salt and pepper. Cook in an air fryer at 400°F for 10–12 minutes, or bake at 375°F for 15–17 minutes until cooked through."
          },
          {
            step: 4,
            instruction: "In a large bowl, shred the imitation crab and cooked salmon. Add cream cheese and Sriracha mayo, then mix until smooth and well combined."
          },
          {
            step: 5,
            instruction: "Preheat the oven to 400°F (200°C). Prepare a 9x9-inch or 9x13-inch baking dish."
          },
          {
            step: 6,
            instruction: "Transfer the seasoned sushi rice into the baking dish and gently press to flatten. Sprinkle generously with furikake."
          },
          {
            step: 7,
            instruction: "Spread the salmon-crab mixture evenly over the rice and smooth the surface."
          },
          {
            step: 8,
            instruction: "Bake for 10–15 minutes until heated through."
          },
          {
            step: 9,
            instruction: "Remove from the oven and top with extra Sriracha mayo, chili furikake, sesame seeds, and chopped green onions."
          },
          {
            step: 10,
            instruction: "Scoop portions and wrap with seaweed snacks to serve. Enjoy!"
          },
        ]}
      />

    </section>
  )
}

export default page
