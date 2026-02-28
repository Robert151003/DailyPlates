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
    { label: 'The New Way to Cook Chicken Breast', href: '/Dinner/TheNewWayToCookChickenBreast' },
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
        title="The New Way to Cook Chicken Breast"
        serves="4"
        prepTime="20 mins"
        cookTime="40 mins"
        description="The new way to cook chicken breast that’s conquering the world! Layers of bacon, potato, creamy cheese, and chicken baked to golden perfection — indulgent and irresistible."
        imageUrl="/Images/TheNewWayToCookChickenBreast.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Planet Food"
        authorUrl="https://www.facebook.com/reel/2471964443190393"
      />

      <IngredientsList
        ingredientsHeaderNote="Layered, creamy, cheesy perfection wrapped in bacon."
        ingredientsFooterNote="Best served hot straight from the oven."
        nutrientsFooterNote="Nutritional values are approximate per serving."
        ingredients={[
          { amount: "300 g (11 oz)", item: "Bacon" },
          { amount: "2", item: "Potatoes" },
          { amount: "1 g (0.0 oz)", item: "Black pepper" },
          { amount: "1 g (0.0 oz)", item: "Sweet paprika" },
          { amount: "1", item: "Chicken breast" },
          { amount: "300 g (11 oz)", item: "Philadelphia cream cheese" },
          { amount: "10 g (0.4 oz)", item: "Parsley, chopped" },
          { amount: "200 g (7.1 oz)", item: "Cheddar cheese, grated" },
        ]}
        nutrients={[
          { name: "Calories", value: "720 kcal" },
          { name: "Fat", value: "52g" },
          { name: "Saturates", value: "28g" },
          { name: "Carbs", value: "22g" },
          { name: "Sugars", value: "5g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "40g" },
          { name: "Salt", value: "2.2g" },
        ]}
      />

      <Method
        headerNote="A creamy, cheesy, layered chicken bake that’s taking the internet by storm."
        footerNote="Let it rest for 5 minutes before slicing to keep the layers intact."
        steps={[
          { step: 1, instruction: "Cover a mould or baking dish with bacon rashers." },
          { step: 2, instruction: "Peel and thinly slice the potatoes." },
          { step: 3, instruction: "Thinly slice the chicken breast." },
          { step: 4, instruction: "Place some potato slices on top of the bacon and season with smoked paprika and black pepper." },
          { step: 5, instruction: "Place the chicken slices on top of the potato layer and season with salt and pepper." },
          { step: 6, instruction: "Chop the parsley and mix it into the Philadelphia cream cheese along with the mozzarella." },
          { step: 7, instruction: "Spread the cheese mixture over the chicken layer in the mould." },
          { step: 8, instruction: "Repeat the layers until full, then wrap the bacon over the top to seal." },
          { step: 9, instruction: "Bake in a preheated oven at 180°C (350°F) for about 40 minutes, or until fully cooked and golden." },
        ]}
      />
    </section>
  );
};

export default page;
