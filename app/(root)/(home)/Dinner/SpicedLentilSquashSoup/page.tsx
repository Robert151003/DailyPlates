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
    { label: 'Soup', href: '/Soup' },
    { label: 'Spiced Lentil & Butternut Squash Soup', href: '/Soup/SpicedLentilSquashSoup' },
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

      {/* Intro Section */}
      <IntroductoryDescription
        title="Spiced Lentil & Butternut Squash Soup"
        serves="4–6"
        prepTime="10 mins"
        cookTime="40 mins"
        description="Cook a big batch of this filling spiced lentil and squash soup and freeze the leftovers for a speedy supper another day. It's healthy, low-fat, and vegetarian."
        imageUrl="/Images/SpicedLentilSquashSoup.jpg"
        showVegetarian={true}
        showVegan={true}
        authorName="Esther Clark"
        authorUrl="https://www.bbcgoodfood.com/recipes/spiced-lentil-butternut-squash-soup"
      />

      {/* Ingredients & Nutrition */}
      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving (based on 6 servings)."
        ingredients={[
          { amount: "2 tbsp", item: "Olive oil" },
          { amount: "2", item: "Onions, finely chopped" },
          { amount: "2 cloves", item: "Garlic, crushed" },
          { amount: "¼ tsp", item: "Hot chilli powder" },
          { amount: "1 tbsp", item: "Ras el hanout" },
          { amount: "1", item: "Butternut squash, peeled & 2 cm pieces" },
          { amount: "100g", item: "Red lentils" },
          { amount: "1 l", item: "Hot vegetable stock" },
          { amount: "1 small bunch", item: "Coriander leaves, chopped" },
          { amount: "—", item: "Dukkah & natural yoghurt, to serve" },
        ]}
        nutrients={[
          { name: "Calories", value: "167 kcal" },
          { name: "Fat", value: "5 g" },
          { name: "Saturates", value: "1 g" },
          { name: "Carbs", value: "23 g" },
          { name: "Sugars", value: "4 g" },
          { name: "Fibre", value: "3 g" },
          { name: "Protein", value: "6 g" },
          { name: "Salt", value: "0.5 g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Follow these steps carefully to make this fragrant, healthy soup."
        footerNote="Serve topped with dukkah, yoghurt, and extra coriander."
        steps={[
          { step: 1, instruction: "Heat the oil in a large flameproof casserole or pan over medium–high heat. Fry the onions with a pinch of salt for 7 mins until softened and just caramelised. Add the garlic, chilli and ras el hanout—cook for 1 min more." },
          { step: 2, instruction: "Stir in the squash and lentils, pour over the stock, season to taste. Bring to the boil, reduce to a simmer, cover and cook for 25 mins until the squash is soft." },
          { step: 3, instruction: "Blitz the soup with a stick blender until smooth, then adjust seasoning to taste. Stir through the coriander leaves, ladle into bowls, and serve topped with dukkah and natural yoghurt." },
        ]}
      />
    </section>
  )
}

export default page
