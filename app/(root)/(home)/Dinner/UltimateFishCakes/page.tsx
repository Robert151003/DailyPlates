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
    { label: 'Ultimate Fish Cakes', href: '/Dinner/UltimateFishCakes' },
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
        title="Ultimate Fish Cakes"
        serves="4"
        prepTime="25 mins"
        cookTime="30 mins"
        description="Angela Nilsen's perfected fishcakes are golden, flakey, and packed with flavour. Served with tartare-style sauce, watercress, and lemon."
        imageUrl="/Images/UltimateFishCakes.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Angela Nilsen"
        authorUrl="https://www.bbcgoodfood.com/recipes/ultimate-fish-cakes"
      />

      <IngredientsList
        ingredientsHeaderNote="Includes tartare-style sauce and fish cake mixture."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "125 ml", item: "Mayonnaise" },
          { amount: "1 rounded tbsp", item: "Capers, roughly chopped (rinsed and drained if salted)" },
          { amount: "1 rounded tsp", item: "Creamed horseradish" },
          { amount: "1 rounded tsp", item: "Dijon mustard" },
          { amount: "1 small", item: "Shallot, very finely chopped" },
          { amount: "1 tsp", item: "Flatleaf parsley, finely chopped" },
          { amount: "450 g", item: "Cod or haddock fillet, skinned (from sustainable source)" },
          { amount: "2", item: "Bay leaves" },
          { amount: "150 ml", item: "Milk" },
          { amount: "350 g", item: "Maris Piper potatoes" },
          { amount: "1/2 tsp", item: "Lemon zest, finely grated" },
          { amount: "1 tbsp", item: "Flatleaf parsley, chopped" },
          { amount: "1 tbsp", item: "Chives, snipped" },
          { amount: "1", item: "Egg" },
          { amount: "To dust", item: "Flour" },
          { amount: "85 g", item: "Fresh white breadcrumbs (preferably a day or two old)" },
          { amount: "3–4 tbsp", item: "Vegetable or sunflower oil (for shallow frying)" },
          { amount: "To serve", item: "Lemon wedges and watercress" },
        ]}
        nutrients={[
          { name: "Calories", value: "480 kcal" },
          { name: "Fat", value: "28g" },
          { name: "Saturates", value: "5g" },
          { name: "Carbs", value: "32g" },
          { name: "Sugars", value: "2g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "24g" },
          { name: "Salt", value: "1.2g" },
        ]}
      />

      <Method
        headerNote="Make the tartare sauce first, then prepare and fry the fishcakes until golden."
        footerNote="Serve with watercress and lemon wedges for freshness."
        steps={[
          { step: 1, instruction: "Mix mayonnaise, capers, horseradish, Dijon mustard, shallot, and parsley. Set aside as tartare-style sauce." },
          { step: 2, instruction: "Lay cod or haddock with bay leaves in a pan. Cover with milk and 150ml water. Simmer 4 mins, then let stand 10 mins." },
          { step: 3, instruction: "Meanwhile, boil potatoes until tender, then mash until fluffy and dry." },
          { step: 4, instruction: "Stir in 1 tbsp tartare sauce, lemon zest, parsley, and chives. Season well." },
          { step: 5, instruction: "Flake fish into large chunks and gently fold into potatoes. Cool slightly." },
          { step: 6, instruction: "Divide mixture into 4 portions. Shape into cakes, dip in beaten egg, then breadcrumbs. Chill 30 mins." },
          { step: 7, instruction: "Heat oil in a frying pan. Fry cakes for 5 mins each side until crisp and golden." },
          { step: 8, instruction: "Serve with remaining tartare sauce, lemon wedges, and watercress." },
        ]}
      />
    </section>
  );
};

export default page;
