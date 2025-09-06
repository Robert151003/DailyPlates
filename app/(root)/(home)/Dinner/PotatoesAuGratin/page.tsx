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
    { label: 'Potatoes au Gratin (Dauphinoise)', href: '/Dinner/PotatoesAuGratin' },
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
        title="Potatoes au Gratin (Dauphinoise)"
        serves="8–10"
        prepTime="15 mins"
        cookTime="1 hr 30 mins"
        description="A French classic side dish of thinly sliced potatoes layered with cream, garlic, and cheese, baked until golden and bubbling."
        imageUrl="/Images/PotatoesAuGratin.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Nagi"
        authorUrl="https://www.recipetineats.com/potatoes-au-gratin/#jump-watch"
      />

      <IngredientsList
        ingredientsHeaderNote="Choose starchy potatoes like Russet, Sebago, or Maris Piper for best results."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "375 ml", item: "Full-fat cream" },
          { amount: "2 cloves", item: "Garlic, minced" },
          { amount: "30 g / 2 tbsp", item: "Unsalted butter, melted" },
          { amount: "1.25 kg / 2.5 lb", item: "Starchy potatoes (Russet, Sebago, Maris Piper)" },
          { amount: "1 tsp", item: "Salt" },
          { amount: "1/4 tsp", item: "Black pepper" },
          { amount: "250 g", item: "Gruyère cheese (or cheddar, havarti, tasty), freshly grated" },
          { amount: "2 tsp", item: "Fresh thyme leaves (optional but recommended)" },
        ]}
        nutrients={[
          { name: "Calories", value: "390 kcal" },
          { name: "Fat", value: "26g" },
          { name: "Saturates", value: "16g" },
          { name: "Carbs", value: "28g" },
          { name: "Sugars", value: "2g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "11g" },
          { name: "Salt", value: "0.9g" },
        ]}
      />

      <Method
        headerNote="This rich, cheesy side dish is perfect for holidays or Sunday suppers."
        footerNote="Let stand 5 minutes before serving so the layers set."
        steps={[
          { step: 1, instruction: "Mix cream, butter, and garlic in a jug until combined." },
          { step: 2, instruction: "Preheat oven to 180°C/350°F." },
          { step: 3, instruction: "Peel and slice potatoes into 3 mm (1/8 inch) slices, or use a mandoline." },
          { step: 4, instruction: "Layer 1: Spread 1/3 potatoes in a baking dish, pour over 1/3 cream mixture, season with salt, pepper, thyme, and sprinkle 3/4 cup cheese." },
          { step: 5, instruction: "Repeat for layers 2 and 3, but do not add cheese to the top layer yet." },
          { step: 6, instruction: "Cover with foil and bake 1 hr 15 mins to 1 hr 30 mins until potatoes in the center are tender." },
          { step: 7, instruction: "Uncover, top with remaining cheese, and bake another 10–15 mins until golden and bubbling." },
          { step: 8, instruction: "Stand for 5 mins before serving." },
        ]}
      />
    </section>
  );
};

export default page;
