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
    { label: 'Roasted Garlic', href: '/Dinner/RoastedGarlic' },
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
        title="Roasted Garlic"
        serves="4"
        prepTime="5 mins"
        cookTime="35 mins"
        description="A simple, mellow, and spreadable garlic preparation. Perfect for bread, potatoes, pasta, or adding deep flavor to any dish."
        imageUrl="/Images/RoastedGarlic.jpg"
        showVegetarian={true}
        showVegan={true}
        authorName="Elise Bauer"
        authorUrl="https://www.simplyrecipes.com/recipes/roasted_garlic"
      />

      <IngredientsList
        ingredientsHeaderNote="If you don’t have a baking pan or muffin tin, wrap the oiled garlic heads in foil before roasting."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "1 or more whole heads", item: "Garlic" },
          { amount: "A drizzle", item: "Extra virgin olive oil" },
        ]}
        nutrients={[
          { name: "Calories", value: "60 kcal" },
          { name: "Fat", value: "4g" },
          { name: "Saturates", value: "0.5g" },
          { name: "Carbs", value: "6g" },
          { name: "Sugars", value: "1g" },
          { name: "Fibre", value: "0.5g" },
          { name: "Protein", value: "1g" },
          { name: "Salt", value: "0g" },
        ]}
      />

      <Method
        headerNote="Slow roasting transforms sharp garlic cloves into buttery, caramelized gems."
        footerNote="Use roasted garlic straight, mash into spreads, or stir into sauces and pasta."
        steps={[
          { step: 1, instruction: "Preheat oven to 400°F (205°C). A toaster oven works well too." },
          { step: 2, instruction: "Peel and discard papery outer layers of the bulb, leaving skins of cloves intact." },
          { step: 3, instruction: "Slice 1/4–1/2 inch off the top of the bulb to expose cloves." },
          { step: 4, instruction: "Place garlic heads cut side up in a baking pan or muffin tin. Drizzle with olive oil, rubbing into the exposed cloves." },
          { step: 5, instruction: "Cover with foil and bake 30–40 minutes, until cloves are soft and golden." },
          { step: 6, instruction: "Cool slightly, then squeeze or pull cloves out of skins. Use as is, or mash for spreads and cooking." },
        ]}
      />
    </section>
  );
};

export default page;
