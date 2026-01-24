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
    { label: 'Marry Me Chicken Meatballs & Orzo', href: '/Dinner/MarryMeChickenMeatballsOrzo' },
  ];

  return (
    <section className={`flex flex-col gap-10 ml-0 pl-4`}>

      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <IntroductoryDescription
        title="Marry Me Chicken Meatballs & Orzo"
        serves="3–4"
        prepTime="15 mins"
        cookTime="25 mins"
        description="Juicy chicken meatballs simmered in a creamy Parmesan sun-dried tomato orzo sauce. Rich, comforting, and irresistibly flavorful — a one-pan dinner worthy of a proposal."
        imageUrl='/Images/MarryMeChickenMeatballsOrzo.jpg'
        showVegetarian={false}
        showVegan={false}
        authorName="Cake Heaven"
        authorUrl="https://www.facebook.com/reel/1822963641738820"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "1 lb", item: "Ground Chicken" },
          { amount: "1/3 cup", item: "Breadcrumbs" },
          { amount: "1/4 cup", item: "Grated Parmesan" },
          { amount: "1", item: "Egg" },
          { amount: "2 cloves", item: "Garlic - Minced" },
          { amount: "1 tsp", item: "Italian Seasoning" },
          { amount: "1/2 tsp", item: "Paprika" },
          { amount: "", item: "Salt & Black Pepper" },
          { amount: "1 tbsp", item: "Olive Oil" },
          { amount: "2 tbsp", item: "Butter" },
          { amount: "3 cloves", item: "Garlic - Minced" },
          { amount: "1/2 cup", item: "Sun-Dried Tomatoes - Chopped" },
          { amount: "1 cup", item: "Orzo" },
          { amount: "2 1/2 cups", item: "Chicken Broth" },
          { amount: "1 cup", item: "Heavy Cream" },
          { amount: "1/2 tsp", item: "Dried Oregano" },
          { amount: "1/2 tsp", item: "Dried Thyme" },
          { amount: "1/2 cup", item: "Grated Parmesan" },
          { amount: "", item: "Fresh Basil or Parsley (Optional)" },
        ]}
        nutrients={[
          { name: "Calories", value: "720 kcal" },
          { name: "Fat", value: "42g" },
          { name: "Saturates", value: "19g" },
          { name: "Carbs", value: "48g" },
          { name: "Sugars", value: "6g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "41g" },
          { name: "Salt", value: "1.8g" },
        ]}
      />

      <Method
        headerNote="This is a one-pan recipe for maximum flavor and minimal cleanup."
        footerNote="Stir occasionally while the orzo cooks to prevent sticking."
        steps={[
          { step: 1, instruction: "In a bowl, mix ground chicken, breadcrumbs, Parmesan, egg, garlic, Italian seasoning, paprika, salt, and pepper. Form into small meatballs about 1–1½ inches in size." },
          { step: 2, instruction: "Heat olive oil in a large deep skillet over medium heat. Add meatballs and cook for 6–8 minutes, turning until golden on all sides. Remove and set aside." },
          { step: 3, instruction: "In the same pan, melt butter. Add garlic and sauté for 30 seconds until fragrant. Stir in the sun-dried tomatoes." },
          { step: 4, instruction: "Add orzo and stir to coat in the flavors. Pour in the chicken broth and bring to a gentle simmer. Cover and cook for 8–10 minutes, stirring occasionally, until the orzo is tender." },
          { step: 5, instruction: "Stir in heavy cream, oregano, thyme, and Parmesan. Season with salt and pepper to taste." },
          { step: 6, instruction: "Return the meatballs to the pan, nestling them into the orzo. Cover and simmer for 5–7 minutes until the meatballs are fully cooked and the sauce is thick and creamy." },
          { step: 7, instruction: "Finish with fresh basil or parsley before serving." },
        ]}
      />

    </section>
  )
}

export default page
