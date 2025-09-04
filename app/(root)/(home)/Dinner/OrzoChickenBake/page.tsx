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
    { label: 'High-Protein Orzo Chicken Bake', href: '/Dinner/OrzoChickenBake' },
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
        title="High-Protein Orzo Chicken Bake"
        serves="5"
        prepTime="15 mins"
        cookTime="50 mins"
        description="A one-pan high-protein meal with orzo, chicken, chorizo, and creamy vegetables—perfect for meal prep or a comforting dinner."
        imageUrl="/Images/OrzoChickenBake.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Adam Hoad Coaching"
        authorUrl="https://www.instagram.com/adamhoad_coaching/"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "250g", item: "Orzo pasta" },
          { amount: "500g", item: "Chicken breast" },
          { amount: "100g", item: "Chorizo" },
          { amount: "150g", item: "Cream cheese" },
          { amount: "2", item: "Medium peppers" },
          { amount: "200g", item: "Cherry tomatoes" },
          { amount: "100g", item: "Spinach" },
          { amount: "2 tsp", item: "Paprika" },
          { amount: "To taste", item: "Salt" },
          { amount: "To taste", item: "Black pepper" },
          { amount: "500ml", item: "Chicken stock" },
        ]}
        nutrients={[
          { name: "Calories", value: "480 kcal" },
          { name: "Fat", value: "18g" },
          { name: "Saturates", value: "7g" },
          { name: "Carbs", value: "45g" },
          { name: "Sugars", value: "6g" },
          { name: "Fibre", value: "4g" },
          { name: "Protein", value: "35g" },
          { name: "Salt", value: "1.8g" },
        ]}
        
      />

      <Method
        headerNote="Follow these steps for a creamy, high-protein orzo bake."
        footerNote="Perfect for meal prep or a comforting dinner."
        steps={[
          { step: 1, instruction: "Preheat oven to 180°C (160°C fan)." },
          { step: 2, instruction: "In a pan, sauté chicken and chorizo until golden." },
          { step: 3, instruction: "Add peppers, cherry tomatoes, and spinach; cook until softened." },
          { step: 4, instruction: "Stir in cream cheese, paprika, salt, and pepper until creamy." },
          { step: 5, instruction: "Add orzo and chicken stock, bring to a boil, then transfer to a baking dish." },
          { step: 6, instruction: "Cover and bake for 50 minutes, then serve warm." },
        ]}
      />
    </section>
  );
};

export default page;
