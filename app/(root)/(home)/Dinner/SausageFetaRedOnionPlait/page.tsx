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
    { label: 'Sausage, Feta & Red Onion Plait', href: '/Dinner/SausageFetaRedOnionPlait' },
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
        title="Sausage, Feta & Red Onion Plait"
        serves="Feeds 4–6"
        prepTime="15 mins"
        cookTime="30 mins"
        description="I know Sundays are for roast dinners, but every so often I fancy something a little bit different with my roasties... this sausage pie with the sweet onions, salty feta and that golden, crispy pastry, is everything I want to eat today. I finished a HUGE slice of this before I even knew it had happened! Hot or as cold leftovers the next day, this sausage plait is unbelievably delicious."
        imageUrl="/Images/SausageFetaRedOnionPlait.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Amy Sheppard Food"
        authorUrl="https://www.facebook.com/reel/3143233782512124"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "", item: "Oil for frying" },
          { amount: "1", item: "Large red onion, finely sliced" },
          { amount: "1 tbsp", item: "Caramel syrup (used in iced coffee) or maple syrup" },
          { amount: "450g", item: "Lincolnshire or Cumberland sausages" },
          { amount: "200g", item: "Feta, crumbled" },
          { amount: "1 tbsp", item: "Dried sage" },
          { amount: "", item: "Ground black pepper" },
          { amount: "1 sheet", item: "Ready-rolled puff pastry" },
          { amount: "1", item: "Egg, beaten" },
        ]}
        nutrients={[
          { name: "Calories", value: "640 kcal" },
          { name: "Fat", value: "42g" },
          { name: "Saturates", value: "18g" },
          { name: "Carbs", value: "35g" },
          { name: "Sugars", value: "6g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "28g" },
          { name: "Salt", value: "1.9g" },
        ]}
      />

      <Method
        headerNote="Follow these steps for a golden, flaky, and flavour-packed sausage plait."
        footerNote="Serve hot or enjoy cold as leftovers the next day — it’s just as delicious!"
        steps={[
          { step: 1, instruction: "Heat a drizzle of oil in a large, non-stick pan." },
          { step: 2, instruction: "Add the onion and fry for 5 minutes on a medium heat, stirring regularly." },
          { step: 3, instruction: "Add the caramel syrup (or maple syrup) and fry for another 3 minutes." },
          { step: 4, instruction: "Meanwhile, slit open the sausage skins and remove the meat, placing it in a mixing bowl. Discard the skins." },
          { step: 5, instruction: "Add the red onion, crumbled feta, and dried sage to the bowl. Season with ground black pepper and combine with your hands until evenly mixed." },
          { step: 6, instruction: "Roll out the puff pastry and place the filling lengthways down the centre, leaving around 5cm of pastry on each side and 3cm at each end." },
          { step: 7, instruction: "Flatten the filling slightly and make sure it’s evenly spread. Starting at the top left, cut 1cm diagonal strips from the filling outwards." },
          { step: 8, instruction: "Tuck the ends of the pastry over the filling, then fold the strips alternately into the middle, crossing over each other to form a plait." },
          { step: 9, instruction: "Brush the plait with beaten egg and bake at 200°C for 25–30 minutes, or until golden and the sausage is cooked through." },
        ]}
      />

    </section>
  );
};

export default page;
