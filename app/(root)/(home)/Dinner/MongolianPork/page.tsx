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
    { label: 'Mongolian Pork', href: '/Dinner/MongolianPork' },
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
        title="Mongolian Pork"
        serves="4"
        prepTime="10 mins"
        cookTime="10 mins"
        description="Mongolian Pork is a quick and easy meal you can whip up in 30 minutes. The sticky, sweet sauce is balanced with garlic, ginger and soy sauce, making it the perfect easy weeknight dinner."
        imageUrl="/Images/MongolianPork.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Christina Hitchcock"
        authorUrl='https://www.itisakeeper.com/71149/mongolian-pork/#recipe'
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "1 lb", item: "Pork tenderloin" },
          { amount: "1/4 cup", item: "Cornstarch" },
          { amount: "2 tbsp", item: "Canola oil" },
          { amount: "4", item: "Garlic cloves, minced" },
          { amount: "1 tbsp", item: "Freshly grated ginger" },
          { amount: "1/2 cup", item: "Low-sodium soy sauce" },
          { amount: "1/3 cup", item: "Dark brown sugar" },
          { amount: "1/4 cup", item: "Water" },
          { amount: "2", item: "Green onions, green parts only, sliced into 2 inch pieces" },
          { amount: "1/2 tsp", item: "Ground black pepper" },
          { amount: "2 tsp", item: "Sesame seeds, for garnish" },
          { amount: "", item: "Rice, to serve" },
        ]}
        nutrients={[
          { name: "Calories", value: "329 kcal" },
          { name: "Carbohydrates", value: "30g" },
          { name: "Protein", value: "26g" },
          { name: "Fat", value: "12g" },
          { name: "Saturated Fat", value: "2g" },
          { name: "Polyunsaturated Fat", value: "3g" },
          { name: "Monounsaturated Fat", value: "6g" },
          { name: "Trans Fat", value: "1g" },
          { name: "Cholesterol", value: "74mg" },
          { name: "Sodium", value: "1130mg" },
          { name: "Potassium", value: "572mg" },
          { name: "Fiber", value: "1g" },
          { name: "Sugar", value: "19g" },
          { name: "Vitamin A", value: "64IU" },
          { name: "Vitamin C", value: "2mg" },
          { name: "Calcium", value: "49mg" },
          { name: "Iron", value: "2mg" },
        ]}
      />

      <Method
        headerNote="Coat the pork evenly and keep the pan hot so the sauce reduces quickly at the end."
        footerNote="Serve over rice and finish with sesame seeds for the best sticky-sweet result."
        steps={[
          { step: 1, instruction: "Cut the pork tenderloin into 1/2 inch pieces." },
          { step: 2, instruction: "Add the cornstarch to a large zip top bag, add the pork pieces, and seal the bag, removing as much air as possible." },
          { step: 3, instruction: "Shake the bag to coat the pork in the cornstarch, then remove the pork pieces and transfer them to a plate." },
          { step: 4, instruction: "Add the canola oil to a large skillet over medium-high heat. When shimmering, add the pork in an even layer, cooking in batches if needed." },
          { step: 5, instruction: "Cook the pork for 4-5 minutes, flip, and cook for another 2-3 minutes or until the internal temperature reaches 140°F." },
          { step: 6, instruction: "Transfer the pork to a clean plate and set aside." },
          { step: 7, instruction: "In the same skillet, add the garlic and grated ginger and cook for 30 seconds until fragrant." },
          { step: 8, instruction: "Add the soy sauce, brown sugar, and water, then stir to combine and bring the sauce to a simmer." },
          { step: 9, instruction: "Return the pork and add the sliced green onions. Cook for 3 minutes until the sauce thickens." },
          { step: 10, instruction: "Serve over rice and sprinkle with sesame seeds for garnish." },
        ]}
      />
    </section>
  )
}

export default page