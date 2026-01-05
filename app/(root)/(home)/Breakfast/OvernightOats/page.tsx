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
    { label: 'Overnight Oats', href: '/Breakfast/OvernightOats' },
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
        title="Overnight Oats"
        serves="1"
        prepTime="10 mins"
        cookTime="No cook"
        description="A simple, healthy make-ahead breakfast that’s endlessly adaptable. These overnight oats are lightly spiced with cinnamon and topped with yogurt, berries, honey, and nut butter for a balanced start to the day."
        imageUrl="/Images/OvernightOats.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Sophie Godwin"
        authorUrl="https://www.bbcgoodfood.com/recipes/overnight-oats"
      />

      {/* Ingredients */}
      <IngredientsList
        ingredientsHeaderNote="Perfect for busy mornings 🌅"
        ingredientsFooterNote="Swap berries for grated apple, pear, or tropical fruit to change it up."
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "50g", item: "Rolled Porridge Oats" },
          { amount: "¼ tsp", item: "Ground Cinnamon" },
          { amount: "100ml", item: "Water or Milk" },
          { amount: "Pinch", item: "Salt" },
          { amount: "2 tbsp", item: "Natural Yogurt" },
          { amount: "50g", item: "Mixed Berries" },
          { amount: "½ tbsp", item: "Nut Butter (e.g. almond)" },
          { amount: "Drizzle", item: "Honey" },
        ]}
        nutrients={[
          { name: "Calories", value: "348 kcal" },
          { name: "Fat", value: "11g" },
          { name: "Saturates", value: "2g" },
          { name: "Carbs", value: "46g" },
          { name: "Sugars", value: "13g" },
          { name: "Fibre", value: "6g" },
          { name: "Protein", value: "13g" },
          { name: "Salt", value: "0.17g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Prepare the night before for a stress-free morning."
        footerNote="Keeps well in the fridge for up to 2 days."
        steps={[
          {
            step: 1,
            instruction: "The night before serving, stir the oats, cinnamon, water (or milk), and a pinch of salt together in a bowl or jar until well combined."
          },
          {
            step: 2,
            instruction: "Cover and refrigerate overnight."
          },
          {
            step: 3,
            instruction: "The next day, loosen with a little extra water or milk if needed. Top with yogurt, mixed berries, a drizzle of honey, and the nut butter before serving."
          },
        ]}
      />

    </section>
  )
}

export default page
