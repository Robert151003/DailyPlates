'use client'

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';
import IngredientsList from '@/components/RecipeComponents/IngredientsList';
import IntroductoryDescription from '@/components/RecipeComponents/IntroductoryDescription';
import Method from '@/components/RecipeComponents/Method';
import Link from 'next/link';

const page = () => {

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Dinner', href: '/Dinner' },
    { label: 'Beef & Guinness Stew with Champ Potato', href: '/Dinner/BeefGuinnessStew' },
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
        title="Beef & Guinness Stew with Champ Potato"
        serves="4"
        prepTime="20 mins"
        cookTime="1 hr 30 mins"
        description="A hearty Irish stew made with tender beef, root vegetables, and the rich flavor of Guinness stout, served with creamy champ potato. Perfect for a comforting dinner."
        imageUrl='/Images/BeefGuinnessStew.jpg'
        showVegetarian={false}
        showVegan={false}
        authorName="Executive Chef Justin O’Connor"
        authorUrl="https://recipe.tv/projects/beef-guinness-stew-with-champ"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "400g", item: "Diced Beef" },
          { amount: "200ml", item: "Guinness Foreign Extra Stout" },
          { amount: "1", item: "Medium Onion - Diced" },
          { amount: "1", item: "Large Carrot - Diced" },
          { amount: "1", item: "Large Celery - Diced" },
          { amount: "1", item: "Large Parsnip - Diced" },
          { amount: "1L", item: "Thick Beef Stock" },
          { amount: "", item: "Sprigs of Fresh Thyme & Rosemary" },
          { amount: "", item: "Champ Potato" },
        ]}
        nutrients={[
          { name: "Calories", value: "685 kcal" },
          { name: "Fat", value: "27g" },
          { name: "Saturates", value: "9g" },
          { name: "Carbs", value: "70g" },
          { name: "Sugars", value: "12g" },
          { name: "Fibre", value: "9g" },
          { name: "Protein", value: "38g" },
          { name: "Salt", value: "2.1g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for the best beef stew."
        footerNote="This stew is always better made one day in advance!"
        steps={[
          { step: 1, instruction: "Stir fry the beef, add the vegetables, and cook until tender, then pour in the Guinness and reduce by half." },
          { step: 2, instruction: "Add the beef stock and herbs and simmer very slowly for between an hour and an hour and a half." },
          { step: 3, instruction: "Serve with the champ potato and honey roast carrot and parsnip." },
        ]}
      />

    </section>
  )
}

export default page
