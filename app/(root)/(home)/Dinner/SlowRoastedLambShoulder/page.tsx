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
    { label: 'Slow Roasted Lamb Shoulder', href: '/Dinner/SlowRoastedLambShoulder' },
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
        title="Slow Roasted Rosemary Garlic Lamb Shoulder"
        serves="6-8"
        prepTime="15 mins"
        cookTime="3 hrs 30 mins"
        description="A succulent slow-roasted lamb shoulder infused with rosemary and garlic. Perfect for family dinners or special occasions."
        imageUrl="/Images/SlowRoastedLambShoulder.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Nagi | RecipeTin Eats"
        authorUrl="https://www.recipetineats.com/slow-roasted-rosemary-garlic-lamb-shoulder"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "1.8 kg", item: "Lamb shoulder (bone in)" },
          { amount: "2 tbsp", item: "Olive oil" },
          { amount: "2 tsp", item: "Salt" },
          { amount: "1 tsp", item: "Black pepper" },
          { amount: "1", item: "Onion, quartered" },
          { amount: "1 head", item: "Garlic, cut in half horizontally" },
          { amount: "3 cloves", item: "Garlic, cut into slivers" },
          { amount: "8 sprigs", item: "Rosemary" },
          { amount: "1 cup", item: "Water" },
          { amount: "2 tbsp", item: "Flour" },
          { amount: "2 cups", item: "Beef broth (or 1 cup red wine + 1 cup water)" },
          { amount: "To taste", item: "Salt and pepper" },
        ]}
        nutrients={[
          { name: "Calories", value: "450 kcal" },
          { name: "Fat", value: "28g" },
          { name: "Saturates", value: "12g" },
          { name: "Carbs", value: "3g" },
          { name: "Sugars", value: "1g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "40g" },
          { name: "Salt", value: "2.5g" },
        ]}
      />

      <Method
        headerNote="Follow these steps for a tender, flavorful lamb shoulder."
        footerNote="Serve with your favorite sides, such as roasted vegetables or crispy potatoes."
        steps={[
          { step: 1, instruction: "Preheat oven to 240°C/465°F (220°C fan)." },
          { step: 2, instruction: "Rub the lamb with olive oil, salt, and black pepper." },
          { step: 3, instruction: "Use a sharp knife to make 12 deep incisions. Stuff rosemary sprigs and garlic slivers into the holes." },
          { step: 4, instruction: "Place onion, halved garlic bulb, and rosemary in the base of a roasting pan. Place lamb on top. Pour water around." },
          { step: 5, instruction: "Cover tightly with foil or lid, reduce oven to 180°C/350°F (160°C fan). Slow roast covered for 3 hours." },
          { step: 6, instruction: "Remove foil, check liquid, add ¾ cup water if necessary. Increase oven to 220°C/425°F and roast for 20-30 mins until skin is browned and crisp." },
          { step: 7, instruction: "Check tenderness with two forks. Rest lamb covered loosely with foil for at least 20 mins." },
          { step: 8, instruction: "To make gravy: remove all but 2 tbsp fat from pan. Place pan on stove, stir in flour for 30 seconds." },
          { step: 9, instruction: "Gradually add stock, mash onion and garlic to release juices. Simmer 1-2 mins until slightly thickened, season with salt and pepper. Strain into a jug." },
        ]}
      />
    </section>
  );
};

export default page;
