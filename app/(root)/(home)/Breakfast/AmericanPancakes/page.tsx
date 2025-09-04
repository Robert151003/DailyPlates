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
    { label: 'Breakfast', href: '/Breakfast' },
    { label: 'American Pancakes', href: '/Breakfast/AmericanPancakes' },
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
        title="American Pancakes"
        serves="4"
        prepTime="25 mins"
        cookTime="30 mins"
        description="Light, fluffy American-style pancakes that you’ll want to wake up for. Stack them high and serve with maple syrup and a pat of butter for the ultimate brunch indulgence."
        imageUrl='/Images/AmericanPancakes.jpg'
        showVegetarian={true}
        showVegan={false}
        authorName="Miriam Nice"
        authorUrl="https://www.bbcgoodfood.com/recipes/american-pancakes"
      />


      
      <IngredientsList
        ingredientsHeaderNote="Perfect for fluffy pancakes 🍳"
        ingredientsFooterNote="Tip: sift your flour for best results!"
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "200g", item: "Self-Raising Flour" },
          { amount: "1 1/2 tsp", item: "Baking Powder" },
          { amount: "3", item: "Large Eggs" },
          { amount: "25g", item: "Melted Butter" },
          { amount: "200ml", item: "Milk" },
          { amount: "", item: "Vegetable Oil" },
          { amount: "", item: "Maple Syrup" },
        ]}
        nutrients={[
          { name: "Calories", value: "356 kcal" },
          { name: "Fat", value: "13g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "45g" },
          { name: "Sugars", value: "8g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "10g" },
          { name: "Salt", value: "10g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for the fluffiest pancakes."
        footerNote="Serve immediately with syrup and berries."
        steps={[
          { step: 1, instruction: "Mix 200g self-raising flour, 1 ½ tsp baking powder, 1 tbsp golden caster sugar and a pinch of salt together in a large bowl." },
          { step: 2, instruction: "Create a well in the centre with the back of your spoon then add 3 large eggs, 25g melted butter and 200ml milk." },
          { step: 3, instruction: "Whisk together either with a balloon whisk or electric hand beaters until smooth then pour into a jug." },
          { step: 4, instruction: "Heat a small knob of butter and 1 tsp of oil in a large, non-stick frying pan over a medium heat. When the butter looks frothy, pour in rounds of the batter, approximately 8cm wide. Make sure you don’t put the pancakes too close together as they will spread during cooking. Cook the pancakes on one side for about 1-2 mins or until lots of tiny bubbles start to appear and pop on the surface. Flip the pancakes over and cook for a further minute on the other side. Repeat until all the batter is used up." },
          { step: 5, instruction: "Serve your pancakes stacked up on a plate with a drizzle of maple syrup and any of your favourite toppings." },
        ]}
      />

    </section>
  )
}

export default page