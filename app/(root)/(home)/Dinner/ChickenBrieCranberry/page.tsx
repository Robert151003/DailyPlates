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
    { label: 'Main', href: '/Main' },
    { label: 'Chicken Brie Cranberry', href: '/Main/ChickenBrieCranberry' },
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
        title="Chicken with Brie & Cranberry"
        serves="2"
        prepTime="15 mins"
        cookTime="20 mins (air fryer)"
        description="Juicy chicken breast stuffed with creamy brie and cranberry sauce, coated in panko crumbs and air-fried to golden perfection."
        imageUrl="/Images/ChickenBrieCranberry.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Planet Food"
        authorUrl="https://www.facebook.com/reel/1966852230815305"
      />

      <IngredientsList
        ingredientsHeaderNote="Simple ingredients, big flavors."
        ingredientsFooterNote="Best enjoyed warm, fresh from the air fryer."
        nutrientsFooterNote="Values are approximate per serving."
        ingredients={[
          { amount: "2", item: "Chicken breasts" },
          { amount: "100g", item: "Brie cheese, sliced" },
          { amount: "2 tbsp", item: "Cranberry sauce" },
          { amount: "1/2 cup", item: "Plain flour" },
          { amount: "1", item: "Egg, beaten" },
          { amount: "1 cup", item: "Panko breadcrumbs" },
          { amount: "To taste", item: "Salt and freshly ground black pepper" },
          { amount: "Spray", item: "Olive oil (for air fryer)" },
        ]}
        nutrients={[
          { name: "Calories", value: "520 kcal" },
          { name: "Fat", value: "20g" },
          { name: "Saturates", value: "9g" },
          { name: "Carbs", value: "32g" },
          { name: "Sugars", value: "6g" },
          { name: "Fibre", value: "2g" },
          { name: "Protein", value: "48g" },
          { name: "Salt", value: "1.4g" },
        ]}
      />

      <Method
        headerNote="Crispy outside, gooey cheesy center with a touch of sweetness."
        footerNote="Serve with a side salad or roasted veggies."
        steps={[
          { step: 1, instruction: "Slice chicken breasts in half lengthwise, creating a pocket." },
          { step: 2, instruction: "Place slices of brie inside each chicken breast pocket." },
          { step: 3, instruction: "Spoon cranberry sauce on top of the brie." },
          { step: 4, instruction: "Dip chicken into flour, coating all sides." },
          { step: 5, instruction: "Dip into beaten egg, coating all sides." },
          { step: 6, instruction: "Dip into panko breadcrumbs, pressing to coat evenly." },
          { step: 7, instruction: "Lightly spray with olive oil and air fry at 180°C (350°F) for 18–20 minutes, until golden brown and cooked through." },
        ]}
      />
    </section>
  );
};

export default page;
