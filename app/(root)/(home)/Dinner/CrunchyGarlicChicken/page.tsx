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
    { label: 'Crunchy Garlic Chicken', href: '/Dinner/CrunchyGarlicChicken' },
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
        title="Crunchy Garlic Chicken"
        serves="2"
        prepTime="15 mins"
        cookTime="25 mins"
        description="Think chicken breasts are a bit boring? Try this garlic chicken that has the crunch and flavour of chicken kiev, but with a fraction of the prep."
        imageUrl="/Images/CrunchyGarlicChicken.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="BBC Good Food"
        authorUrl="https://www.bbcgoodfood.com/recipes/crunchy-garlic-chicken"
      />

      <IngredientsList
        ingredientsHeaderNote="Serve with lemon wedges, chives, roasted potatoes and tomatoes if desired."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "4 tbsp (40 g)", item: "Grated parmesan" },
          { amount: "5 tbsp", item: "Mayonnaise" },
          { amount: "1 tbsp", item: "Garlic & herb seasoning" },
          { amount: "50 g", item: "Panko breadcrumbs" },
          { amount: "2", item: "Boneless, skinless chicken breasts" },
          { amount: "To serve", item: "Lemon wedges" },
          { amount: "To serve", item: "Snipped chives" },
          { amount: "Optional", item: "Roasted potatoes and tomatoes" },
        ]}
        nutrients={[
          { name: "Calories", value: "520 kcal" },
          { name: "Fat", value: "28g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "20g" },
          { name: "Sugars", value: "2g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "45g" },
          { name: "Salt", value: "1.6g" },
        ]}
      />

      <Method
        headerNote="Oven-baked chicken breasts with a golden, crunchy garlic coating."
        footerNote="Slice and serve with lemon wedges, chives, and optional roast potatoes or tomatoes."
        steps={[
          { step: 1, instruction: "Heat oven to 200C/180C fan/gas 6. Line a baking tray with parchment or oiled foil." },
          { step: 2, instruction: "Mix parmesan, mayonnaise, and garlic & herb seasoning in a shallow dish. Place breadcrumbs in a second dish." },
          { step: 3, instruction: "Trim and blot chicken dry. Coat in mayo mix, then breadcrumbs, pressing crumbs on firmly. Place on tray." },
          { step: 4, instruction: "Repeat with the second breast, discarding excess coating." },
          { step: 5, instruction: "Bake 25–30 minutes until golden and cooked through (check with a knife tip)." },
          { step: 6, instruction: "Slice into thick strips, scatter with chives, and serve with lemon wedges and sides." },
        ]}
      />
    </section>
  );
};

export default page;
