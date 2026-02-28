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
    { label: 'Slow-Cooked Beef & Veg Pasta Bake', href: '/Dinner/SlowCookedBeefVegPastaBake' },
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
        title="Slow-Cooked Beef & Veg Pasta Bake"
        serves="4"
        prepTime="15 mins"
        cookTime="4 hrs 10 mins"
        description="A hearty, protein-packed slow-cooked beef pasta bake loaded with vegetables and finished with melted Parmesan and cheddar. Perfect for meal prep or a comforting family dinner."
        imageUrl="/Images/SlowCookedBeefVegPastaBake.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Adamhoad Coaching"
        authorUrl="https://www.youtube.com/shorts/GN_iDDeyZH4"
      />

      <IngredientsList
        ingredientsHeaderNote="Hearty, high-protein comfort food."
        ingredientsFooterNote="Add pasta and cheese at the end for best texture."
        nutrientsFooterNote="Macros are approximate per serving."
        ingredients={[
          { amount: "400 g", item: "Beef shin or beef brisket" },
          { amount: "400 g", item: "Carrots, chopped" },
          { amount: "300 g", item: "Celery, chopped" },
          { amount: "300 g", item: "Onions, chopped" },
          { amount: "800 g", item: "Chopped tomatoes" },
          { amount: "2 tbsp", item: "Tomato paste" },
          { amount: "160 g (dry)", item: "Wholewheat pasta" },
          { amount: "1 tbsp", item: "Garlic" },
          { amount: "650 g", item: "Beef broth (or stock)" },
          { amount: "50 ml", item: "Red wine or 2 tbsp balsamic vinegar" },
          { amount: "To taste", item: "Salt, pepper, oregano, paprika" },
          { amount: "50 g", item: "Parmesan" },
          { amount: "50 g", item: "Cheddar" },
        ]}
        nutrients={[
          { name: "Calories", value: "505 kcal" },
          { name: "Protein", value: "43g" },
          { name: "Carbs", value: "55g" },
          { name: "Fat", value: "12g" },
          { name: "Fibre", value: "10g" },
        ]}
      />

      <Method
        headerNote="Slow cooked for deep flavour and tender beef."
        footerNote="Great for meal prep — stores well in the fridge."
        steps={[
          { step: 1, instruction: "Combine all ingredients except the pasta and cheddar in a large baking dish or slow cooker and mix well." },
          { step: 2, instruction: "Cover and cook in a preheated oven at 150°C for around 4 hours (optional: turn the beef halfway through)." },
          { step: 3, instruction: "Shred or slice the beef, stir through the cooked pasta, top with cheddar and Parmesan, return to the oven for 10 minutes until melted, then serve." },
        ]}
      />
    </section>
  );
};

export default page;