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
    { label: 'Hairy Bikers Spanish Chicken', href: '/Dinner/HairyBikersSpanishChicken' },
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
        title="Hairy Bikers Spanish Chicken"
        serves="Serves 4"
        prepTime="10 mins"
        cookTime="40 mins"
        description="Get ready for a flavor fiesta with Hairy Bikers Spanish Chicken! It's perfect for busy weeknights or a cozy family dinner. My family loves it, and I know yours will too! Give it a try!"
        imageUrl="/Images/SpanishChicken.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Recipes Clan"
        authorUrl="https://www.facebook.com/photo.php?fbid=122247576956252722&set=a.122103602576252722&type=3&mibextid=wwXIfr&rdid=of57Xko9G1zF2ghl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Avsim8EsL%2F%3Fmibextid%3DwwXIfr"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "4", item: "Chicken thighs (about 800g or 1.75 lbs)" },
          { amount: "1", item: "Onion, chopped (approximately 150g or 1 medium onion)" },
          { amount: "2", item: "Garlic cloves, minced" },
          { amount: "1", item: "Bell pepper, sliced (about 150g or 1 medium bell pepper)" },
          { amount: "1 can", item: "Diced tomatoes (400g or 14 oz)" },
          { amount: "240ml", item: "Chicken broth (1 cup)" },
          { amount: "1 tsp", item: "Smoked paprika" },
          { amount: "1 tsp", item: "Dried oregano" },
          { amount: "", item: "Salt and pepper to taste" },
          { amount: "2 tbsp", item: "Olive oil" },
        ]}
        nutrients={[
          { name: "Calories", value: "380 kcal" },
          { name: "Fat", value: "24g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "8g" },
          { name: "Sugars", value: "4g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "32g" },
          { name: "Salt", value: "0.8g" },
        ]}
      />

      <Method
        headerNote="Follow these steps for a hearty and flavour-packed Spanish Chicken dish."
        footerNote="Serve warm, and feel free to garnish with fresh herbs for an extra touch of freshness."
        steps={[
          { step: 1, instruction: "Heat the olive oil in a large pan over medium heat." },
          { step: 2, instruction: "Add the chopped onion and minced garlic, cooking until softened and fragrant." },
          { step: 3, instruction: "Toss in the chicken thighs, browning them on all sides to lock in flavor." },
          { step: 4, instruction: "Stir in the sliced bell pepper, diced tomatoes, chicken broth, smoked paprika, and oregano." },
          { step: 5, instruction: "Season with salt and pepper to your liking." },
          { step: 6, instruction: "Bring the mixture to a boil, then reduce the heat, cover, and let it simmer for 30-40 minutes until the chicken is fully cooked." },
          { step: 7, instruction: "Serve warm, optionally garnished with fresh herbs." },
        ]}
      />

    </section>
  );
};

export default page;
