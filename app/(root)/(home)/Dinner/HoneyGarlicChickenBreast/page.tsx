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
    { label: 'Honey Garlic Chicken Breast', href: '/Dinner/HoneyGarlicChickenBreast' },
  ];

  return (
    <section className="flex flex-col gap-10 ml-0 pl-4">
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <IntroductoryDescription
        title="Honey Garlic Chicken Breast"
        serves="4"
        prepTime="4 mins"
        cookTime="8 mins"
        description="Quick, golden seared chicken breasts coated in a sticky-sweet honey garlic sauce. Fast, simple, and absolutely delicious!"
        imageUrl="/Images/HoneyGarlicChickenBreast.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Nagi (RecipeTin Eats)"
        authorUrl="https://www.recipetineats.com/honey-garlic-chicken/"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "500 g", item: "Chicken breast, boneless and skinless (2 pieces)" },
          { amount: "To taste", item: "Salt and pepper" },
          { amount: "1/4 cup", item: "Flour" },
          { amount: "3 1/2 tbsp (50 g)", item: "Unsalted butter (or 2 1/2 tbsp olive oil)" },
          { amount: "2 cloves", item: "Garlic, minced" },
          { amount: "1 1/2 tbsp", item: "Apple cider vinegar (or white/clear vinegar)" },
          { amount: "1 tbsp", item: "Soy sauce, light or all-purpose" },
          { amount: "1/3 cup", item: "Honey (or maple syrup)" },
        ]}
        nutrients={[
          { name: "Calories", value: "320 kcal" },
          { name: "Fat", value: "12g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "25g" },
          { name: "Sugars", value: "22g" },
          { name: "Fibre", value: "0g" },
          { name: "Protein", value: "28g" },
          { name: "Salt", value: "1.1g" },
        ]}
      />

      <Method
        headerNote="Follow these steps for juicy chicken with sticky honey garlic sauce."
        footerNote="Tip: You can swap chicken for pork, beef, prawns, or tofu!"
        steps={[
          { step: 1, instruction: "Cut breasts in half horizontally to create 4 thin steaks. Season with salt and pepper." },
          { step: 2, instruction: "Dredge chicken lightly in flour and shake off excess." },
          { step: 3, instruction: "Heat most of the butter in a skillet over high heat, reserving 1 tsp. Sear chicken 2–3 mins on one side, 1 min on the other. Reduce heat to medium-high." },
          { step: 4, instruction: "Push chicken aside, add garlic and remaining butter. Stir briefly until fragrant." },
          { step: 5, instruction: "Add vinegar, soy sauce, and honey. Stir to combine, bring to a simmer, and cook 1 min until slightly thickened." },
          { step: 6, instruction: "Turn chicken in the sauce to coat. If sauce is too thick, add a splash of water." },
          { step: 7, instruction: "Serve immediately with sauce drizzled over the top." },
        ]}
      />
    </section>
  );
};

export default page;
