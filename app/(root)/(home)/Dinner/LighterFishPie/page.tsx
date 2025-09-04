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
    { label: 'Lighter Fish Pie', href: '/Dinner/LighterFishPie' },
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

      {/* Recipe Intro */}
      <IntroductoryDescription
        title="Lighter Fish Pie"
        serves="2"
        prepTime="15 mins"
        cookTime="30 mins"
        description="This healthy Lighter Fish Pie uses olive oil instead of butter and replaces heavy mash with a gratin-style topping made with oats. The result? Less fat, fewer carbs, and still bags of flavour – plus it’s high in protein."
        imageUrl="/Images/LighterFishPie.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Lucy Jessop (OcadoLife)"
        authorUrl="https://www.ocado.com/recipes/lighter-fish-pie/4Fnpz1xALFrhpWucchalbd"
      />

      {/* Ingredients + Nutrition */}
      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "1 tbsp", item: "Olive Oil" },
          { amount: "2", item: "Medium Leeks – trimmed & finely sliced" },
          { amount: "340g", item: "Mixed Fish – cut into chunks" },
          { amount: "375ml", item: "Skimmed Milk" },
          { amount: "1", item: "Bay Leaf" },
          { amount: "1 tbsp", item: "Plain Flour" },
          { amount: "1 slice", item: "Rye or Wholemeal Bread – torn into small pieces" },
          { amount: "2 tbsp", item: "Rolled Oats" },
          { amount: "10g", item: "Parmesan – finely grated" },
          { amount: "160g", item: "Frozen Broad Bean, Edamame Bean & Pea Mix – cooked" },
          { amount: "2 wedges", item: "Lemon – for squeezing" },
        ]}
        nutrients={[
          { name: "Calories", value: "450 kcal" },
          { name: "Fat", value: "14g" },
          { name: "Saturates", value: "3.5g" },
          { name: "Carbs", value: "38g" },
          { name: "Sugars", value: "9g" },
          { name: "Fibre", value: "6g" },
          { name: "Protein", value: "38g" },
          { name: "Salt", value: "1.5g" },
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Follow these steps carefully for a lighter, healthier fish pie."
        footerNote="Serve hot with the bean mix and a squeeze of lemon."
        steps={[
          { step: 1, instruction: "Preheat the oven to 220°C/fan 200°C/gas 7. Heat ½ tbsp oil in a large non-stick pan, add the sliced leeks, cover and cook gently for 5 mins. Uncover and cook for 5 mins more, stirring occasionally, until soft." },
          { step: 2, instruction: "Meanwhile, put the fish in a large pan, cover with the milk, season with black pepper and add the bay leaf. Cover and cook for 3–5 mins over low heat, until the milk just comes to the boil. Strain the fish through a colander over a bowl to reserve the milk." },
          { step: 3, instruction: "Add the remaining oil to the leeks; stir in the flour for 1–2 mins, then gradually pour in the reserved milk (add the bay leaf back in), stirring constantly, until the sauce thickens. Simmer for 2–3 mins more, stirring, until smooth. Season to taste." },
          { step: 4, instruction: "Transfer the fish to a shallow pie dish (about 900ml–1 litre). Pour over the sauce." },
          { step: 5, instruction: "In a food processor, blitz the bread and oats to rough crumbs; add the parmesan. Sprinkle over the fish; bake for 10–12 mins until bubbling and golden. Serve with the bean mix and lemon wedges." },
        ]}
      />

    </section>
  )
}

export default page
