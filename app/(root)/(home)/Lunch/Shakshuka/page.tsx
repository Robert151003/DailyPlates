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
    { label: 'Shakshuka', href: '/Dinner/Shakshuka' },
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

      {/* Introductory Description */}
      <IntroductoryDescription
        title="Easy Shakshuka"
        serves="2"
        prepTime="5 mins"
        cookTime="20 mins"
        description="Make our easy shakshuka for a comforting brunch. Vary this dish by flavouring the simple tomato sauce with whatever you have to hand."
        imageUrl="/Images/Shakshuka.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Good Food Team"
        authorUrl="https://www.bbcgoodfood.com/recipes/shakshuka"
      />

      {/* Ingredients & Nutrition */}
      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "1 tbsp", item: "Olive Oil" },
          { amount: "2", item: "Red Onions – chopped" },
          { amount: "1", item: "Red Chilli – deseeded & finely chopped" },
          { amount: "1 clove", item: "Garlic – sliced" },
          { amount: "1 small bunch", item: "Coriander – stalks & leaves separated" },
          { amount: "2 cans", item: "Cherry Tomatoes" },
          { amount: "1 tsp", item: "Caster Sugar" },
          { amount: "4", item: "Eggs" },
        ]}
        nutrients={[
          { name: "Calories", value: "340 kcal" },
          { name: "Fat", value: "20 g" },
          { name: "Saturates", value: "5 g" },
          { name: "Carbs", value: "21 g" },
          { name: "Sugars", value: "17 g" },
          { name: "Fibre", value: "0 g" },
          { name: "Protein", value: "21 g" },
          { name: "Salt", value: "1.2 g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Follow these simple steps for perfect shakshuka every time."
        footerNote="Serve with crusty bread for dunking."
        steps={[
          { step: 1, instruction: "Heat the oil in a lidded frying pan, then soften the onions, chilli, garlic, and coriander stalks for 5 mins until soft." },
          { step: 2, instruction: "Stir in the tomatoes and sugar, then bubble for 8–10 mins until thick." },
          { step: 3, instruction: "Make 4 dips in the sauce using the back of a spoon, then crack an egg into each one." },
          { step: 4, instruction: "Cover the pan and cook over a low heat for 6–8 mins, until the eggs are done to your liking." },
          { step: 5, instruction: "Scatter with the coriander leaves and serve with crusty bread." },
        ]}
      />

    </section>
  )
}

export default page
