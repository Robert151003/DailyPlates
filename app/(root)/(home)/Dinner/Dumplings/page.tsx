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
    { label: 'Dumplings', href: '/Dinner/Dumplings' },
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
        title="Dumplings"
        serves="4"
        prepTime="5 mins"
        cookTime="30 mins"
        description="Take your stew or casserole to the next level with our easy dumplings. Add them to your dish for instant family-friendly comfort food in a flash."
        imageUrl="/Images/Dumplings.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Cassie Best"
        authorUrl="https://www.bbcgoodfood.com/recipes/dumplings"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "150g", item: "Self-raising flour, plus extra for rolling" },
          { amount: "70g", item: "Suet" },
          { amount: "Small handful", item: "Parsley, chopped (optional)" },
        ]}
        nutrients={[
          { name: "Calories", value: "281 kcal" },
          { name: "Fat", value: "16g" },
          { name: "Saturates", value: "9g" },
          { name: "Carbs", value: "30g" },
          { name: "Sugars", value: "0.3g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "4g" },
          { name: "Salt", value: "" },
        ]}
      />

      <Method
        headerNote="Make these fluffy dumplings to top your favourite stew or casserole."
        footerNote="Best served immediately while soft and puffed."
        steps={[
          { step: 1, instruction: "Whilst your stew is bubbling, weigh the flour into a bowl and add ½ tsp salt. Stir through the suet and parsley, if using. Make a well in the centre and add 3 tbsp cold water, mixing to a dough. Add more water until the dough is firm but pliable. Divide into 8 equal pieces, roll into balls with extra flour, and chill until needed." },
          { step: 2, instruction: "When the stew has about 30 minutes left, arrange the dumplings on top and cover with a lid. Bake at 160C/140C fan/gas 3 for 20 minutes, then remove the lid and cook for another 10 minutes until brown and puffed up." },
        ]}
      />

    </section>
  )
}

export default page
