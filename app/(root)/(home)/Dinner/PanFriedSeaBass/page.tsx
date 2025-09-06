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
    { label: 'Pan Fried Sea Bass with Lemon Garlic Herb Sauce', href: '/Dinner/PanFriedSeaBass' },
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
        title="Pan Fried Sea Bass with Lemon Garlic Herb Sauce"
        serves="4"
        prepTime="10 mins"
        cookTime="10 mins"
        description="This Mediterranean-inspired pan fried sea bass is golden, tender, and finished with a zesty lemon garlic herb sauce. Ready in just 20 minutes!"
        imageUrl="/Images/PanFriedSeaBass.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Elizabeth Lindemann"
        authorUrl="https://www.bowlofdelicious.com/pan-fried-sea-bass-with-lemon-garlic-herb-sauce"
      />

      <IngredientsList
        ingredientsHeaderNote="A quick, flavorful fish dish perfect for weeknights."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "3 tbsp", item: "Butter, divided" },
          { amount: "1 tbsp", item: "Extra virgin olive oil" },
          { amount: "1.5 lbs", item: "Sea bass (such as barramundi)" },
          { amount: "1/4 cup", item: "All-purpose flour" },
          { amount: "1 tsp", item: "Kosher salt, plus more if needed" },
          { amount: "1/2 tsp", item: "Black pepper, plus more if needed" },
          { amount: "2 cloves", item: "Garlic, minced" },
          { amount: "1/4 cup", item: "Dry white wine (e.g., Sauvignon Blanc)" },
          { amount: "1/2 cup", item: "Chicken stock or broth (or water)" },
          { amount: "Juice of 1", item: "Lemon (about 2 tbsp)" },
          { amount: "1 tbsp", item: "Fresh oregano, roughly chopped" },
          { amount: "1 tbsp", item: "Fresh thyme, roughly chopped" },
          { amount: "1 tbsp", item: "Fresh parsley, roughly chopped" },
          { amount: "To serve", item: "Lemon wedges (optional)" },
        ]}
        nutrients={[
          { name: "Calories", value: "318 kcal" },
          { name: "Fat", value: "18g" },
          { name: "Saturates", value: "8g" },
          { name: "Carbs", value: "6g" },
          { name: "Sugars", value: "0g" },
          { name: "Fibre", value: "0g" },
          { name: "Protein", value: "32g" },
          { name: "Salt", value: "0.8g" },
        ]}
      />

      <Method
        headerNote="Cook the fish until golden, then finish with a fragrant lemon garlic herb sauce."
        footerNote="Serve with lemon wedges and extra herbs if desired."
        steps={[
          { step: 1, instruction: "Pat the sea bass dry with paper towels." },
          { step: 2, instruction: "Mix flour, salt, and pepper in a shallow dish. Dredge each fish fillet, shaking off excess." },
          { step: 3, instruction: "Heat 1 tbsp butter and olive oil in a skillet over medium-high heat. Cook fish 3–4 mins per side until golden and cooked through. Transfer to a plate." },
          { step: 4, instruction: "Lower heat. Deglaze pan with white wine, scraping browned bits, until mostly evaporated." },
          { step: 5, instruction: "Melt in 1 tbsp butter, then add garlic and herbs. Sauté until fragrant, about 30 seconds." },
          { step: 6, instruction: "Add chicken stock and simmer until slightly reduced. Stir in remaining butter and lemon juice." },
          { step: 7, instruction: "Taste sauce and adjust seasoning if needed. Pour sauce over fish and serve with lemon wedges." },
        ]}
      />
    </section>
  );
};

export default page;
