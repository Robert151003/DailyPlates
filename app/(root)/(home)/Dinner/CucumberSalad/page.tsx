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
    { label: 'Cucumber Salad', href: '/Dinner/CucumberSalad' },
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
        title="Cucumber Salad"
        serves="6"
        prepTime="10 mins"
        cookTime="0 mins (+20 mins chilling)"
        description="A refreshing cucumber salad with red onion, dill, and a sweet-tangy vinegar dressing. Perfect for BBQs or summer picnics."
        imageUrl="/Images/CucumberSalad.jpg"
        showVegetarian={true}
        showVegan={true}
        authorName="Love and Lemons"
        authorUrl="https://www.loveandlemons.com/cucumber-salad/#wprm-recipe-container-70912"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "2", item: "English cucumbers, very thinly sliced" },
          { amount: "1/2", item: "Large red onion, very thinly sliced" },
          { amount: "1/4 cup", item: "White wine vinegar" },
          { amount: "1 tbsp", item: "Honey or agave nectar" },
          { amount: "1 tsp", item: "Sea salt" },
          { amount: "2 tbsp", item: "Fresh dill, chopped" },
          { amount: "To taste", item: "Chopped fresh chives, optional garnish" },
          { amount: "To taste", item: "Freshly ground black pepper" },
        ]}
        nutrients={[
          { name: "Calories", value: "45 kcal" },
          { name: "Fat", value: "0.2g" },
          { name: "Saturates", value: "0g" },
          { name: "Carbs", value: "11g" },
          { name: "Sugars", value: "8g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "1g" },
          { name: "Salt", value: "0.6g" },
        ]}
      />

      <Method
        headerNote="Cool and crisp with a sweet-tangy bite."
        footerNote="Best served chilled; garnish with extra herbs for brightness."
        steps={[
          { step: 1, instruction: "In a large bowl, toss together cucumbers, onion, vinegar, honey, and salt." },
          { step: 2, instruction: "Chill in the refrigerator for 20 minutes." },
          { step: 3, instruction: "Transfer to a serving bowl, leaving excess water behind." },
          { step: 4, instruction: "Sprinkle with dill and chives if desired, season with pepper, and serve." },
        ]}
      />
    </section>
  );
};

export default page;
