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
    { label: 'Chicken Bacon Ranch Pasta', href: '/Dinner/ChickenBaconRanchPasta' },
  ];

  return (
    <section
      className={`flex flex-col gap-10 ml-0 pl-4`}
    >

      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <IntroductoryDescription
        title="Chicken Bacon Ranch Pasta"
        serves="6"
        prepTime="15 mins"
        cookTime="25 mins"
        description="Tender rotini pasta, juicy chicken, crispy bacon, cheddar cheese, and creamy ranch Alfredo sauce combine to create a rich and satisfying family dinner."
        imageUrl="/Images/ChickenBaconRanchPasta.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Lili Clark"
        authorUrl="https://lilicooks.com/recipes/chicken-bacon-ranch-pasta?utm_source=bdrusfour&fbclid=IwZnRzaAR6SnlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEeVZ5NgIeeEiAIbr2N7D0PXej0vB0nqyP6IYtChNr1YUC5cAklAJ19gvDLYx8_aem_68WNw1RX7Q5OGPJupMTWeQ#google_vignette"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "12 oz", item: "Rotini Pasta" },
          { amount: "1 Package", item: "Bacon, Diced and Cooked" },
          { amount: "½", item: "Yellow Onion, Diced" },
          { amount: "3", item: "Boneless Skinless Chicken Breasts, Diced" },
          { amount: "1 tsp", item: "Paprika" },
          { amount: "1 tsp", item: "Garlic Powder" },
          { amount: "1 tsp", item: "Onion Powder" },
          { amount: "1 tbsp", item: "Ranch Seasoning" },
          { amount: "1 tbsp", item: "Minced Garlic" },
          { amount: "15 oz", item: "Alfredo Sauce" },
          { amount: "1 Cup", item: "Cheddar Cheese, Shredded" },
        ]}
        nutrients={[
          { name: "Calories", value: "667 kcal" },
          { name: "Fat", value: "35g" },
          { name: "Saturates", value: "15g" },
          { name: "Carbs", value: "50g" },
          { name: "Sugars", value: "4g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "45g" },
          { name: "Salt", value: "2.5g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for the best results."
        footerNote="Always ensure the chicken reaches an internal temperature of 165°F (74°C) before serving."
        steps={[
          {
            step: 1,
            instruction: "Cook the rotini pasta in a large pot according to the package instructions. Drain and set aside."
          },
          {
            step: 2,
            instruction: "In a large skillet over medium-high heat, cook the diced bacon until crispy. Remove the bacon and drain, leaving 1–2 tablespoons of bacon grease in the skillet."
          },
          {
            step: 3,
            instruction: "Add the diced onion to the skillet and cook for 2–3 minutes. Add the diced chicken breasts and season with paprika, garlic powder, onion powder, and ranch seasoning. Cook for 7–8 minutes, or until the chicken reaches 165°F (74°C)."
          },
          {
            step: 4,
            instruction: "Stir in the minced garlic and cook for 1 minute. Add the Alfredo sauce, stir well, and bring to a gentle simmer."
          },
          {
            step: 5,
            instruction: "Add the cooked pasta and half of the bacon to the skillet. Stir until everything is evenly coated in the sauce."
          },
          {
            step: 6,
            instruction: "Top with the shredded cheddar cheese and remaining bacon. Cover the skillet until the cheese has melted. Serve immediately and enjoy."
          },
        ]}
      />

    </section>
  )
}

export default page;