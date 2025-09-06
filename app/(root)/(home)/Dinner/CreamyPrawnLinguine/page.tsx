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
    { label: 'Creamy Prawn Linguine', href: '/Dinner/CreamyPrawnLinguine' },
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
        title="Creamy Prawn Linguine"
        serves="2"
        prepTime="10 mins"
        cookTime="10 mins"
        description="This pasta is loaded with juicy prawns and wrapped in a dreamy creamy sauce!"
        imageUrl="/Images/CreamyPrawnLinguine.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Chris Collins"
        authorUrl="https://www.dontgobaconmyheart.co.uk/creamy-prawn-linguine"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "150–200 g", item: "Raw peeled prawns/shrimp" },
          { amount: "200 g", item: "Linguine or other long-cut pasta" },
          { amount: "160 ml", item: "Heavy/Double cream, at room temp" },
          { amount: "60 ml", item: "Dry white wine" },
          { amount: "20 g", item: "Freshly grated Parmesan" },
          { amount: "1 large", item: "Shallot, very finely diced (approx 1/4 cup)" },
          { amount: "1 large", item: "Fresh red chilli, deseeded & finely diced" },
          { amount: "1 clove", item: "Garlic, finely diced" },
          { amount: "1 tbsp", item: "Fresh parsley, finely diced (plus more to garnish)" },
          { amount: "1 tbsp", item: "Unsalted butter" },
          { amount: "Drizzle", item: "Olive oil" },
          { amount: "To taste", item: "Salt & pepper" },
        ]}
        nutrients={[
          { name: "Calories", value: "640 kcal" },
          { name: "Fat", value: "32g" },
          { name: "Saturates", value: "18g" },
          { name: "Carbs", value: "55g" },
          { name: "Sugars", value: "4g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "32g" },
          { name: "Salt", value: "1.5g" },
        ]}
      />

      <Method
        headerNote="A quick 20-minute pasta dish with prawns in a creamy white wine sauce."
        footerNote="Garnish with extra parsley and parmesan if desired."
        steps={[
          { step: 1, instruction: "Add pasta to salted boiling water and cook until al dente." },
          { step: 2, instruction: "Pat prawns dry and season with salt and pepper." },
          { step: 3, instruction: "Add a drizzle of oil to a large pan over medium-high heat. Fry prawns for ~1 min per side until golden and just cooked through. Remove and lower heat to medium." },
          { step: 4, instruction: "Melt butter in the pan, add shallot and chilli. Fry until soft and just starting to colour, then add garlic and fry for another minute." },
          { step: 5, instruction: "Pour in the wine and simmer a few minutes until mostly evaporated, scraping the pan to deglaze." },
          { step: 6, instruction: "Stir in cream, parsley, parmesan, and season with salt & pepper. Simmer 2 minutes until slightly thickened." },
          { step: 7, instruction: "Transfer pasta directly from pot into the sauce. Toss to combine, then toss in prawns. Use reserved pasta water to loosen sauce if needed." },
          { step: 8, instruction: "Serve with extra parsley and parmesan." },
        ]}
      />
    </section>
  );
};

export default page;
