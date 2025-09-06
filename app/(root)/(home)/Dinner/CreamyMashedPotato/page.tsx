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
    { label: 'Creamy Mashed Potato', href: '/Dinner/CreamyMashedPotato' },
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
        title="Creamy Mashed Potato"
        serves="6"
        prepTime="10 mins"
        cookTime="20 mins"
        description="This is Nagi’s essential mashed potato recipe — creamy, buttery, and rich without being heavy. A must-have for holidays, Sunday suppers, or any comforting meal."
        imageUrl="/Images/CreamyMashedPotato.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Nagi"
        authorUrl="https://www.recipetineats.com/mashed-potato"
      />

      <IngredientsList
        ingredientsHeaderNote="Classic creamy mashed potato with butter, milk, and optional garnish."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "1.5 kg", item: "Potatoes, peeled and cut into 2.5 cm / 1” cubes (Sebago, Russet, or Maris Piper preferred)" },
          { amount: "1 tbsp", item: "Salt (for cooking)" },
          { amount: "50 g", item: "Unsalted butter, chopped" },
          { amount: "85 ml", item: "Milk, preferably warmed" },
          { amount: "0.5 tsp", item: "Salt" },
          { amount: "To garnish", item: "Extra melted butter" },
          { amount: "To garnish", item: "Chives or parsley, chopped" },
        ]}
        nutrients={[
          { name: "Calories", value: "210 kcal" },
          { name: "Fat", value: "8g" },
          { name: "Saturates", value: "5g" },
          { name: "Carbs", value: "32g" },
          { name: "Sugars", value: "2g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "4g" },
          { name: "Salt", value: "0.7g" },
        ]}
      />

      <Method
        headerNote="Creamy, fluffy mashed potatoes perfect for pairing with gravies, roasts, or any comforting main."
        footerNote="Serve hot, topped with melted butter and fresh herbs. Includes options for making ahead."
        steps={[
          { step: 1, instruction: "Place potatoes in a large pot with 1 tbsp salt and cover with water 10 cm above potatoes." },
          { step: 2, instruction: "Bring to a boil, then reduce to a rapid simmer. Cook ~15 minutes until very soft (fall apart when jabbed with a fork)." },
          { step: 3, instruction: "Drain well and return potatoes to pot. Let sit 1 minute, shaking occasionally to evaporate water." },
          { step: 4, instruction: "Add butter, milk, and 0.5 tsp salt. Mash until smooth and creamy, adjusting milk for desired consistency." },
          { step: 5, instruction: "Avoid over-mashing with blenders or processors (they can make potatoes gluey). Use a masher or cautious mixer pulses." },
          { step: 6, instruction: "Transfer to serving bowl, swirl the surface, drizzle melted butter, and sprinkle with chives/parsley." },
          { step: 7, instruction: "Make-ahead options: keep warm up to 30 min covered, up to 2 hrs over simmering water, 4 hrs in a slow cooker on warm, or prepare day-ahead using a dedicated make-ahead recipe." },
        ]}
      />
    </section>
  );
};

export default page;
