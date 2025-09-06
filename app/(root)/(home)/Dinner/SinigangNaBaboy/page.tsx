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
    { label: 'Sinigang na Baboy', href: '/Dinner/SinigangNaBaboy' },
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
        title="Sinigang na Baboy"
        serves="6"
        prepTime="15 mins"
        cookTime="1 hr 45 mins"
        description="A hearty Filipino sour pork soup made with tamarind, pork ribs, and assorted vegetables. Comforting, tangy, and perfect for chilly days."
        imageUrl="/Images/SinigangNaBaboy.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Lalaine Manalo"
        authorUrl="https://www.kawalingpinoy.com/sinigang-na-baboy"
      />

      <IngredientsList
        ingredientsHeaderNote="You can use fresh tamarind or packaged tamarind base powder."
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "2 lbs", item: "Pork spare ribs, cut into 2-inch pieces" },
          { amount: "8 cups", item: "Water" },
          { amount: "2 large", item: "Tomatoes, quartered" },
          { amount: "1 medium", item: "Onion, peeled and quartered" },
          { amount: "2 tbsp", item: "Fish sauce" },
          { amount: "6 pieces", item: "Gabi (taro), peeled and halved" },
          { amount: "1", item: "Radish (labanos), peeled and sliced 1/2-inch thick" },
          { amount: "2", item: "Finger chilies (siling haba)" },
          { amount: "1/2 bunch", item: "Long beans (sitaw), cut into 3-inch lengths" },
          { amount: "1", item: "Eggplant, sliced 1/2-inch thick" },
          { amount: "6", item: "Okra, ends trimmed" },
          { amount: "15 pieces", item: "Large tamarind (or 1.5 packets tamarind base powder)" },
          { amount: "To taste", item: "Salt and black pepper" },
          { amount: "1 bunch", item: "Bok choy (pechay), leaves separated" },
        ]}
        nutrients={[
          { name: "Calories", value: "320 kcal" },
          { name: "Fat", value: "20g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "15g" },
          { name: "Sugars", value: "5g" },
          { name: "Fibre", value: "4g" },
          { name: "Protein", value: "22g" },
          { name: "Salt", value: "1.5g" },
        ]}
      />

      <Method
        headerNote="This Filipino favorite is made with a tamarind-based broth that gives it its signature tang."
        footerNote="Serve steaming hot with rice for a complete meal."
        steps={[
          { step: 1, instruction: "Rinse pork ribs and drain well." },
          { step: 2, instruction: "In a pot, combine pork and water. Bring to a boil, skimming off scum. Add tomatoes, onion, and fish sauce. Simmer 1–1.5 hours until pork is tender, adding water as needed to maintain 8 cups." },
          { step: 3, instruction: "Add gabi (taro) and cook 4–6 mins until tender." },
          { step: 4, instruction: "Add chili peppers and radish. Simmer 2–3 mins." },
          { step: 5, instruction: "Add long beans. Cook for 2 mins." },
          { step: 6, instruction: "Add eggplant and okra. Cook 1–2 mins more." },
          { step: 7, instruction: "Stir in tamarind base powder, or prepared fresh tamarind juice, until dissolved." },
          { step: 8, instruction: "Season with salt and pepper to taste." },
          { step: 9, instruction: "Add bok choy and cook 1 min. Serve hot." },
          { step: 10, instruction: "For fresh tamarind: boil until soft, mash, and strain to extract juice. Add juice to the pot." },
        ]}
      />
    </section>
  );
};

export default page;
