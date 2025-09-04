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
    { label: 'Creamy Pasta Bake with Beetroot and Smoked Ham', href: '/Dinner/BeetrootPastaBake' },
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

      {/* Introductory Description */}
      <IntroductoryDescription
        title="Creamy Pasta Bake with Beetroot and Smoked Ham"
        serves="4"
        prepTime="20 mins"
        cookTime="20 mins"
        description="A simple one-pot dish the whole family will enjoy. Creamy pasta bake with earthy beetroot, smoky ham, and bubbling cheese topping."
        imageUrl="/Images/BeetrootPastaBake.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Love Beetroot"
        authorUrl="https://www.lovebeetroot.co.uk/recipes"
      />

      {/* Ingredients */}
      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "2 tbsp", item: "Plain Flour" },
          { amount: "500g", item: "Cooked Beetroot" },
          { amount: "1", item: "Onion, finely chopped" },
          { amount: "50g", item: "Unsalted Butter" },
          { amount: "1 clove", item: "Garlic" },
          { amount: "450ml", item: "Milk" },
          { amount: "150g", item: "Mature Cheddar, grated" },
          { amount: "1 bunch", item: "Chives, snipped" },
          { amount: "375g", item: "Pasta (any shape – penne or conchiglie work well)" },
          { amount: "150ml", item: "Double Cream" },
          { amount: "200g", item: "Smoked Ham, torn into shreds" },
        ]}
        nutrients={[
          { name: "Calories", value: "640 kcal" },
          { name: "Fat", value: "28g" },
          { name: "Saturates", value: "16g" },
          { name: "Carbs", value: "66g" },
          { name: "Sugars", value: "9g" },
          { name: "Fibre", value: "6g" },
          { name: "Protein", value: "32g" },
          { name: "Salt", value: "2.5g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Follow these steps for a creamy, golden pasta bake."
        footerNote="Best enjoyed hot with a crisp green salad."
        steps={[
          { step: 1, instruction: "Preheat the oven to 180°C." },
          { step: 2, instruction: "Cook pasta according to packet instructions. Drain and reserve." },
          { step: 3, instruction: "Set a heavy-based saucepan over a low heat, sweat the onion in the butter for 10–15 mins until soft. Add garlic and fry for 1 min, then stir through the flour." },
          { step: 4, instruction: "Pour in milk and cream, bring up to the boil, stirring constantly until thickened. Simmer for 2–3 mins to cook the flour." },
          { step: 5, instruction: "Turn off the heat, stir through half the cheese, ham and chives. Season with salt and black pepper." },
          { step: 6, instruction: "Mix in the cooked pasta and beetroot, spoon into a baking dish, scatter with remaining cheese and bake for 20 mins until golden and bubbling. Serve immediately with a green salad." },
        ]}
      />
    </section>
  )
}

export default page;
