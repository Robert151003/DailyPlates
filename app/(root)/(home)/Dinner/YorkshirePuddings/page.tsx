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
    { label: 'Yorkshire Puddings', href: '/Dinner/YorkshirePuddings' },
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
        title="Best Yorkshire Puddings"
        serves="Makes 8 large or 24 small"
        prepTime="5 mins"
        cookTime="20 mins"
        description="The secret to gloriously puffed-up Yorkshire puddings is to have the fat sizzling hot — and don't open the oven door!"
        imageUrl="/Images/YorkshirePuddings.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Barney Desmazery"
        authorUrl="https://www.bbcgoodfood.com/recipes/best-yorkshire-puddings"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving (8 large puds)."
        ingredients={[
          { amount: "140g", item: "Plain flour (about 200ml/7fl oz)" },
          { amount: "4", item: "Eggs (200ml/7fl oz)" },
          { amount: "200ml", item: "Milk" },
          { amount: "", item: "Sunflower oil, for cooking" },
        ]}
        nutrients={[
          { name: "Calories", value: "176 kcal" },
          { name: "Fat", value: "10.09g" },
          { name: "Saturates", value: "2g" },
          { name: "Carbs", value: "15g" },
          { name: "Sugars", value: "1g" },
          { name: "Fibre", value: "0.7g" },
          { name: "Protein", value: "6g" },
          { name: "Salt", value: "0.15g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for perfectly risen Yorkshire puddings."
        footerNote="Serve immediately, or cool and freeze for up to 1 month."
        steps={[
          { step: 1, instruction: "Heat oven to 230C/fan 210C/gas 8." },
          { step: 2, instruction: "Drizzle a little sunflower oil evenly into two 4-hole Yorkshire pudding tins or two 12-hole non-stick muffin tins and place in the oven to heat through." },
          { step: 3, instruction: "Tip 140g plain flour into a bowl and beat in 4 eggs until smooth." },
          { step: 4, instruction: "Gradually add 200ml milk and carry on beating until the mix is completely lump-free. Season with salt and pepper." },
          { step: 5, instruction: "Pour the batter into a jug, then remove the hot tins from the oven. Carefully and evenly pour the batter into the holes." },
          { step: 6, instruction: "Place the tins back in the oven and leave undisturbed for 20-25 mins until the puddings have puffed up and browned." },
          { step: 7, instruction: "Serve immediately, or freeze once cooled for up to 1 month." },
        ]}
      />

    </section>
  )
}

export default page
