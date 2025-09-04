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
    { label: 'Korean Bean Sprouts', href: '/Dinner/KoreanBeanSprouts' },
  ];

  return (
    <section className="flex flex-col gap-10 ml-0 pl-4">

      {/* Breadcrumbs */}
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      {/* Introductory Section */}
      <IntroductoryDescription
        title="Korean Bean Sprouts (Kongnamul)"
        serves="4"
        prepTime="5 mins"
        cookTime="5 mins"
        description="Crisp and lightly seasoned mung bean sprouts. A staple Korean side dish that’s easy to make and pairs perfectly with rice and other banchan."
        imageUrl='/Images/KoreanBeanSprouts.jpg'
        showVegetarian={true}
        showVegan={true}
        authorName="Sue Pressey"
        authorUrl="https://mykoreankitchen.com/korean-style-seasoned-mung-bean-sprouts-salad-sukju-namul-muchim"
      />

      {/* Ingredients */}
      <IngredientsList
        ingredientsHeaderNote="Lightly seasoned and refreshing 🥢"
        ingredientsFooterNote="Tip: gently squeeze the bean sprouts to remove excess water."
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          // Main
          { amount: "350 g", item: "Mung bean sprouts (0.8 pounds)" },
          { amount: "1 tsp", item: "Fine sea salt, to add to the water" },
          { amount: "6 cups", item: "Water, to boil" },
          // Seasoning sauce
          { amount: "1 tsp", item: "Green onion (scallion), finely chopped" },
          { amount: "1/2 tsp", item: "Minced garlic" },
          { amount: "1/2 tsp", item: "Fine sea salt, adjust to taste" },
          { amount: "1 tsp", item: "Toasted sesame seeds" },
          { amount: "1 Tbsp", item: "Sesame oil" },
        ]}
        nutrients={[
          { name: "Calories", value: "49 kcal" },
          { name: "Fat", value: "3g" },
          { name: "Saturates", value: "0.5g" },
          { name: "Carbs", value: "4g" },
          { name: "Sugars", value: "3g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "2g" },
          { name: "Salt", value: "1.8g" }, // approx. from 716mg sodium
        ]}
      />

      {/* Method */}
      <Method
        headerNote="Follow these steps carefully for perfectly seasoned bean sprouts."
        footerNote="Serve with rice and other Korean side dishes for a complete meal."
        steps={[
          { step: 1, instruction: "Rinse the mung bean sprouts in cold water, discarding any bad beans." },
          { step: 2, instruction: "Bring a pot of water to a boil and add 1 tsp fine sea salt. Once the water is boiling, plunge the sprouts into the pot and let them cook for 1–2 minutes." },
          { step: 3, instruction: "Drain the water and rinse the sprouts under cold water for 1–2 minutes." },
          { step: 4, instruction: "Gently squeeze the bean sprouts with your hands to remove excess water. Transfer them to a mixing bowl, add the seasoning sauce (green onion, garlic, salt, sesame seeds, sesame oil), and mix well." },
          { step: 5, instruction: "Serve with a bowl of rice and other Korean side dishes." },
        ]}
      />

    </section>
  );
};

export default page;
