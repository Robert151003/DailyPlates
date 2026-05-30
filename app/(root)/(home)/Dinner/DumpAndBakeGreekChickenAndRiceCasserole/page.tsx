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
    { label: 'Dump and Bake Greek Chicken and Rice Casserole', href: '/Dinner/DumpAndBakeGreekChickenAndRiceCasserole' },
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
        title="Dump and Bake Greek Chicken and Rice Casserole"
        serves="4"
        prepTime="20 mins"
        cookTime="1 hr"
        description="This Greek-inspired chicken and rice bake is an easy, healthy dinner recipe with juicy seasoned chicken thighs, basmati rice infused with lemon and spices, zucchini, grape tomatoes, and feta cheese. Finish with sliced red onion and tzatziki for a high-protein, balanced meal."
        imageUrl="/Images/DumpAndBakeGreekChickenAndRiceCasserole.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Hannah Magee, RD"
        authorUrl="https://hannahmageerd.com/dump-and-bake-greek-chicken-and-rice-casserole/"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "1.5 lbs", item: "Chicken thighs, boneless, skinless" },
          { amount: "1 tbsp", item: "Olive oil" },
          { amount: "1 tsp", item: "Paprika" },
          { amount: "1 tsp", item: "Garlic powder" },
          { amount: "½ tsp", item: "Onion powder" },
          { amount: "½ tsp", item: "Dried oregano" },
          { amount: "½ tsp", item: "Dried parsley" },
          { amount: "½ tsp", item: "Dried thyme" },
          { amount: "¼ tsp", item: "Salt" },
          { amount: "¼ tsp", item: "Black pepper" },
          { amount: "1.5 cups", item: "Basmati rice" },
          { amount: "3 cups", item: "Chicken broth" },
          { amount: "1.5 tsp", item: "Minced garlic" },
          { amount: "1-2 tbsp", item: "Lemon juice" },
          { amount: "1.5 tsp", item: "Lemon zest" },
          { amount: "1 tsp", item: "Dried parsley" },
          { amount: "½ tsp", item: "Onion powder" },
          { amount: "½ tsp", item: "Dried oregano" },
          { amount: "½ tsp", item: "Black pepper" },
          { amount: "¼ tsp", item: "Salt" },
          { amount: "1 pint", item: "Grape or cherry tomatoes" },
          { amount: "1", item: "Medium zucchini, chopped" },
          { amount: "½ cup", item: "Feta cheese, crumbled" },
          { amount: "As needed", item: "Red onion slices and tzatziki for serving" },
        ]}
        nutrients={[
          { name: "Calories", value: "393 kcal" },
          { name: "Carbs", value: "48g" },
          { name: "Protein", value: "27g" },
          { name: "Fat", value: "10g" },
          { name: "Saturates", value: "3g" },
          { name: "Fibre", value: "5g" },
          { name: "Sugars", value: "2g" },
          { name: "Salt", value: "833mg" },
        ]}
      />

      <Method
        headerNote="Follow these steps for a perfect Greek chicken and rice casserole."
        footerNote="Serve immediately topped with tzatziki, sliced red onion, and extra feta."
        steps={[
          { step: 1, instruction: "Preheat oven to 375°F. Add chicken thighs to a baking dish, drizzle with olive oil and toss with paprika, garlic powder, onion powder, oregano, parsley, thyme, salt, and black pepper." },
          { step: 2, instruction: "Add basmati rice, chicken broth, minced garlic, lemon juice and zest, parsley, onion powder, oregano, black pepper, and salt to the dish. Ensure the rice is covered with liquid." },
          { step: 3, instruction: "Add grape tomatoes, chopped zucchini, and sprinkle crumbled feta on top." },
          { step: 4, instruction: "Cover with foil and bake at 375°F for 40–45 minutes. Remove foil and bake an additional 15–20 minutes until liquid is absorbed and chicken is cooked through." },
          { step: 5, instruction: "Dish out and serve topped with tzatziki, sliced red onion, and extra feta cheese." },
        ]}
      />

    </section>
  )
}

export default page;