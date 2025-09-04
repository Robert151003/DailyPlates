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
    { label: 'Korean Spinach', href: '/Dinner/KoreanSpinach' },
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
        title="Spinach"
        serves="4"
        prepTime="10 mins"
        cookTime="15 mins"
        description="This quick and healthy Korean side dish combines fresh spinach with garlic, sesame oil, and a touch of salt for a light yet umami-packed treat. Perfect as a banchan or a complement to bibimbap and kimbap!"
        imageUrl='/Images/KoreanSpinach.jpg'
        showVegetarian={true}
        showVegan={true}
        authorName="Sue Pressey"
        authorUrl="https://mykoreankitchen.com/simply-seasoned-korean-spinach-salad-sigeumchi-namul-version-1"
      />

      <IngredientsList
        ingredientsHeaderNote="Perfectly seasoned spinach 🍃"
        ingredientsFooterNote="Tip: gently squeeze the spinach to remove excess water."
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "250g", item: "English spinach or baby spinach (9 ounces)" },
          { amount: "1 tsp", item: "Fine sea salt (to add to the water)" },
          { amount: "6 cups", item: "Water to boil" },
          { amount: "1 tsp", item: "Green onion, finely chopped" },
          { amount: "1/2 tsp", item: "Minced garlic" },
          { amount: "1/4 tsp", item: "Fine sea salt, or to taste" },
          { amount: "1 tsp", item: "Toasted sesame seeds" },
          { amount: "1 Tbsp", item: "Sesame oil" },
        ]}
        nutrients={[
          { name: "Calories", value: "50 kcal" }, 
          { name: "Fat", value: "3g" },
          { name: "Saturates", value: "0.5g" },
          { name: "Carbs", value: "4g" },
          { name: "Sugars", value: "0.5g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "3g" },
          { name: "Salt", value: "1.3g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for perfectly seasoned spinach."
        footerNote="Serve with rice and a variety of Korean side dishes for a complete meal."
        steps={[
          { step: 1, instruction: "Trim the spinach roots (if any) and wash the spinach thoroughly in cold water." },
          { step: 2, instruction: "Boil 6 cups of water in a pot for 5 to 7 minutes. Add 1 tsp of fine sea salt. Once the water starts boiling, plunge the spinach into the pot and let it cook for 30 seconds." },
          { step: 3, instruction: "Drain the water and rinse the spinach under cold water for 1–2 minutes. Gently squeeze the spinach to remove excess water." },
          { step: 4, instruction: "Divide the spinach into 2–3 pieces using a knife. (If using baby spinach, you can skip this step.)" },
          { step: 5, instruction: "Add the seasoning sauce (green onion, minced garlic, salt, toasted sesame seeds, sesame oil) and mix well with your hands." },
          { step: 6, instruction: "Serve with a bowl of rice and an assortment of Korean side dishes for a complete meal." },
        ]}
      />


    </section>
  )
}

export default page