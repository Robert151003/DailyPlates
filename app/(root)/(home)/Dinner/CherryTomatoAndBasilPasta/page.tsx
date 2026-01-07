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
    { label: 'Cherry Tomato and Basil Pasta', href: '/Dinner/CherryTomatoAndBasilPasta' },
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
        title="Cherry Tomato and Basil Pasta MK2"
        serves="Serves 4"
        prepTime="2 mins"
        cookTime="7 mins"
        description="A weeknight pasta special that will have the whole family celebrating."
        imageUrl="/Images/CherryTomatoAndBasilPasta.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Daen Lia"
        authorUrl="https://daenskitchen.com/cherry-tomato-and-basil-pasta/"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote="Imperial (US) – Metric"
        nutrientsFooterNote=""
        ingredients={[
          { amount: "3 tbsp", item: "Olive oil, plus extra to serve" },
          { amount: "1 lb", item: "Cherry tomatoes" },
          { amount: "4", item: "Garlic cloves, peeled" },
          { amount: "1/2 cup", item: "Fresh basil, tightly packed and finely sliced" },
          { amount: "", item: "Salt and pepper" },
          { amount: "10 oz", item: "Spaghetti" },
          { amount: "1/2 tsp", item: "Chilli flakes (optional)" },
          { amount: "1/2 cup", item: "Pecorino Romano, to serve" },
        ]}
         nutrients={[
          { name: "Calories", value: "520 kcal" },
          { name: "Fat", value: "20g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "65g" },
          { name: "Sugars", value: "6g" },
          { name: "Fibre", value: "4g" },
          { name: "Protein", value: "18g" },
          { name: "Salt", value: "0.8g" },
        ]}
      />

      <Method
        headerNote="Cook Mode: Prevent your screen from going dark"
        footerNote="Finish with a drizzle of olive oil and serve immediately."
        steps={[
          {
            step: 1,
            instruction:
              "Bring a large pot of heavily salted water to the boil. Cook the pasta according to packet instructions until al dente, draining 1–2 minutes early. Reserve up to 1/2 cup of pasta water.",
          },
          {
            step: 2,
            instruction:
              "While the pasta cooks, heat the olive oil in a large frypan. Add the garlic cloves and cook for 2–3 minutes until slightly golden.",
          },
          {
            step: 3,
            instruction:
              "Add the cherry tomatoes and cook for 7–10 minutes until they burst and form a jammy sauce. Season generously with salt and pepper, then stir in the chilli flakes if using.",
          },
          {
            step: 4,
            instruction:
              "Remove the garlic, mash it into a paste with the back of a knife, then return it to the sauce and stir through.",
          },
          {
            step: 5,
            instruction:
              "On low heat, toss the pasta through the sauce, gradually adding pasta water until the sauce is silky and glossy. You may not need all the water.",
          },
          {
            step: 6,
            instruction:
              "Turn off the heat and stir through two thirds of the basil.",
          },
          {
            step: 7,
            instruction:
              "Serve topped with pecorino, remaining basil, and a drizzle of olive oil.",
          },
        ]}
      />

    </section>
  )
}

export default page;
