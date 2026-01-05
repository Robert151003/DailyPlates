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
    { label: 'Sourdough French Toast', href: '/Breakfast/SourdoughFrenchToast' },
  ];

  return (
    <section className="flex flex-col gap-10 ml-0 pl-4">

      {/* Breadcrumbs */}
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      {/* Intro */}
      <IntroductoryDescription
        title="Sourdough French Toast"
        serves="4"
        prepTime="10 mins"
        cookTime="10 mins"
        description="Thick slices of sourdough soaked in a lightly spiced vanilla custard, pan-fried until golden and crisp on the outside while soft and custardy inside. Perfect for a relaxed weekend breakfast or brunch."
        imageUrl="/Images/SourdoughFrenchToast.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Marcellina"
        authorUrl="https://www.marcellinaincucina.com/panettone-french-toast-with-berries-and-honey/"
      />

      {/* Ingredients */}
      <IngredientsList
        ingredientsHeaderNote="Rich, custardy and perfect for brunch 🍞"
        ingredientsFooterNote="Use day-old sourdough for best absorption without falling apart."
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "4 slices", item: "Sourdough Bread (1 inch thick, ~6 inches long)" },
          { amount: "4", item: "Large Eggs" },
          { amount: "1 cup (240ml)", item: "Whole Milk" },
          { amount: "¼ cup (56g)", item: "Brown Sugar" },
          { amount: "3 tsp", item: "Vanilla Extract" },
          { amount: "½ tsp", item: "Ground Cinnamon" },
          { amount: "Pinch", item: "Salt" },
          { amount: "½ oz (1 tbsp)", item: "Unsalted Butter" },
        ]}
        nutrients={[
          { name: "Calories", value: "420 kcal" },
          { name: "Fat", value: "18g" },
          { name: "Saturates", value: "9g" },
          { name: "Carbs", value: "48g" },
          { name: "Sugars", value: "17g" },
          { name: "Protein", value: "14g" },
          { name: "Salt", value: "0.7g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Low and slow cooking gives the best golden crust without burning."
        footerNote="Serve warm with butter, maple syrup, fruit, or your favourite toppings."
        steps={[
          {
            step: 1,
            instruction: "Preheat the oven to 195°F (95°C). Line a baking sheet and set aside to keep cooked toast warm."
          },
          {
            step: 2,
            instruction: "In a bowl, whisk together the eggs, whole milk, brown sugar, vanilla extract, cinnamon, and salt until fully combined with no visible streaks of egg."
          },
          {
            step: 3,
            instruction: "Pour the custard mixture into a shallow dish large enough to hold all the bread in a single layer."
          },
          {
            step: 4,
            instruction: "Add the sourdough slices to the mixture, turning gently until all the liquid has been absorbed."
          },
          {
            step: 5,
            instruction: "Heat a non-stick frying pan over medium-low heat. Add half of the butter and allow it to foam and lightly brown."
          },
          {
            step: 6,
            instruction: "Place two soaked slices into the pan and cook for about 3 minutes, checking after the first minute to ensure they are not browning too quickly."
          },
          {
            step: 7,
            instruction: "Flip the slices and cook for a further 2 minutes on the other side until golden and set."
          },
          {
            step: 8,
            instruction: "Transfer the cooked French toast to the prepared baking sheet and place in the oven to keep warm."
          },
          {
            step: 9,
            instruction: "Wipe the pan clean, add the remaining butter, and repeat with the remaining bread slices."
          },
          {
            step: 10,
            instruction: "Serve immediately with butter, maple syrup, fresh fruit, or toppings of your choice."
          },
        ]}
      />

    </section>
  )
}

export default page
