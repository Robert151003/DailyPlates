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
    { label: 'Honey Garlic Salmon', href: '/Dinner/HoneyGarlicSalmon' },
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
        title="Honey Garlic Salmon (5 Ingredients, 15 Minutes)"
        serves="2"
        prepTime="5 mins"
        cookTime="10 mins"
        description="A terrific way to serve salmon that is crazy quick and easy — and soooo delicious!"
        imageUrl="/Images/HoneyGarlicSalmon.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Nagi | RecipeTin Eats"
        authorUrl="https://www.recipetineats.com/honey-garlic-salmon-5-ingredients-15-minutes"
      />

      <IngredientsList
        ingredientsHeaderNote="Just 5 core ingredients for the sauce and salmon, plus optional garnishes."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "4 tbsp", item: "Honey" },
          { amount: "2 tbsp", item: "Soy sauce (all-purpose or light)" },
          { amount: "1 tbsp", item: "White vinegar (or other, except balsamic)" },
          { amount: "1 large clove", item: "Garlic, minced" },
          { amount: "2 fillets (200 g each)", item: "Salmon or trout, skinless" },
          { amount: "Drizzle", item: "Olive oil" },
          { amount: "To taste", item: "Salt and pepper" },
          { amount: "Optional", item: "Sesame seeds" },
          { amount: "Optional", item: "Chives or shallots/scallions, finely sliced" },
        ]}
        nutrients={[
          { name: "Calories", value: "420 kcal" },
          { name: "Fat", value: "21g" },
          { name: "Saturates", value: "4g" },
          { name: "Carbs", value: "22g" },
          { name: "Sugars", value: "20g" },
          { name: "Fibre", value: "0g" },
          { name: "Protein", value: "35g" },
          { name: "Salt", value: "1.7g" },
        ]}
      />

      <Method
        headerNote="Quick 15-minute salmon dish with a sticky honey-garlic sauce."
        footerNote="Top with sesame seeds and fresh chives or shallots for garnish."
        steps={[
          { step: 1, instruction: "Take salmon out of the fridge 20 minutes before cooking. Pat dry and season with salt and pepper." },
          { step: 2, instruction: "Whisk honey, soy sauce, vinegar, and garlic together in a small bowl." },
          { step: 3, instruction: "Heat oil in a non-stick pan over medium-high. Cook salmon 3–4 minutes on the first side until golden, then 2–3 minutes on the other side." },
          { step: 4, instruction: "Pour sauce over salmon. Cook 1 minute until slightly thickened, checking salmon doneness (medium rare recommended)." },
          { step: 5, instruction: "If sauce thickens too quickly, add water 1 tbsp at a time." },
          { step: 6, instruction: "Remove salmon to plates, drizzle with sauce, and garnish with sesame seeds and chives/scallions." },
        ]}
      />
    </section>
  );
};

export default page;
