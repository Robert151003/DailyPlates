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
    { label: 'Honey Sesame Beef Mince Stir Fry', href: '/Dinner/HoneySesameBeefMinceStirFry' },
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
        title="Honey Sesame Beef Mince Stir Fry"
        serves="6"
        prepTime="5 mins"
        cookTime="25 mins"
        description="This Honey Sesame Beef Mince Stir Fry is the ultimate quick weeknight dinner - sweet, savoury and ready in under 30 minutes. A simple, flavour-packed way to turn everyday mince into something special."
        imageUrl="/Images/HoneySesameBeefMinceStirFry.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Carrie Carvalho"
        authorUrl="https://carriecarvalho.com/honey-sesame-beef/#recipe"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "500 g", item: "Beef mince" },
          { amount: "1", item: "Red onion, diced" },
          { amount: "1", item: "Courgette, diced" },
          { amount: "1", item: "Bell pepper, diced" },
          { amount: "2 tsp", item: "Garlic paste or diced cloves" },
          { amount: "2 tsp", item: "Ginger paste or grated fresh ginger" },
          { amount: "1 tbsp", item: "Vegetable or neutral cooking oil" },
          { amount: "250 ml", item: "Boiling water" },
          { amount: "2 tbsp", item: "Tomato purée" },
          { amount: "2 tbsp", item: "Sesame oil" },
          { amount: "3 tbsp", item: "Honey" },
          { amount: "3 tbsp", item: "Soy sauce" },
          { amount: "1 tbsp", item: "Gochujang or sweet chilli sauce (optional)" },
          { amount: "1", item: "Beef stock cube" },
          { amount: "", item: "Rice or noodles, to serve" },
          { amount: "", item: "Sesame seeds, to garnish" },
          { amount: "", item: "Broccoli, to serve" },
        ]}
        nutrients={[
          { name: "Calories", value: "329 kcal" },
          { name: "Carbohydrates", value: "30g" },
          { name: "Protein", value: "26g" },
          { name: "Fat", value: "12g" },
          { name: "Saturated Fat", value: "2g" },
          { name: "Polyunsaturated Fat", value: "3g" },
          { name: "Monounsaturated Fat", value: "6g" },
          { name: "Trans Fat", value: "1g" },
          { name: "Cholesterol", value: "74mg" },
          { name: "Sodium", value: "1130mg" },
          { name: "Potassium", value: "572mg" },
          { name: "Fiber", value: "1g" },
          { name: "Sugar", value: "19g" },
          { name: "Vitamin A", value: "64IU" },
          { name: "Vitamin C", value: "2mg" },
          { name: "Calcium", value: "49mg" },
          { name: "Iron", value: "2mg" },
        ]}
      />

      <Method
        headerNote="A quick sauce and a hot pan are the keys to getting this dinner on the table fast."
        footerNote="Serve straight away while the beef is glossy and the sesame sauce is still hot."
        steps={[
          { step: 1, instruction: "Heat the oil in a large pan and add the diced onion, courgette, and pepper. Cook for about 5 minutes until just softening." },
          { step: 2, instruction: "Add the beef mince and cook until browned all over, breaking it up with a spatula as it cooks." },
          { step: 3, instruction: "Stir in the garlic and ginger." },
          { step: 4, instruction: "In a jug, mix the boiling water, tomato purée, sesame oil, honey, soy sauce, gochujang or sweet chilli sauce, and stock cube until dissolved." },
          { step: 5, instruction: "Pour the sauce over the beef, stir well, and simmer gently for 10-15 minutes while you prepare the rice, noodles, or broccoli." },
          { step: 6, instruction: "Serve with rice or noodles and garnish with sesame seeds, with extra wok-fried greens if you like." },
        ]}
      />
    </section>
  )
}

export default page