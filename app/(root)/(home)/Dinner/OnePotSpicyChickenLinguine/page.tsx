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
    { label: 'One-Pot Spicy Chicken Linguine', href: '/Main/OnePotSpicyChickenLinguine' },
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
        title="One-Pot Spicy Chicken Linguine in Creamy Sauce"
        serves="4"
        prepTime="10 mins"
        cookTime="20 mins"
        description="Tried this One-Pot Spicy Chicken Linguine in Creamy Sauce and it’s a total flavor hit! Creamy, bold, and all made in one pot — easy cleanup, big taste!"
        imageUrl="/Images/OnePotSpicyChickenLinguine.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Planet Food"
        authorUrl="https://www.facebook.com/photo.php?fbid=122259949580235169&set=a.122093673536235169&type=3&mibextid=wwXIfr&rdid=w9JYhGK8orZwG1mL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F177Vb6rDXR%2F%3Fmibextid%3DwwXIfr"
      />

      <IngredientsList
        ingredientsHeaderNote="Creamy, spicy, and full of flavor — all in one pot."
        ingredientsFooterNote="Add extra Cajun spice if you like more heat!"
        nutrientsFooterNote="Nutritional values are approximate per serving."
        ingredients={[
          { amount: "2", item: "Boneless, skinless chicken breasts, cut into strips" },
          { amount: "12 oz", item: "Linguine pasta" },
          { amount: "2 tbsp", item: "Olive oil" },
          { amount: "2 tbsp", item: "Cajun seasoning" },
          { amount: "1 tsp", item: "Smoked paprika" },
          { amount: "1/2 tsp", item: "Garlic powder" },
          { amount: "4 cloves", item: "Garlic, minced" },
          { amount: "1 cup", item: "Heavy cream" },
          { amount: "1/2 cup", item: "Chicken broth" },
          { amount: "1/2 cup", item: "Grated Parmesan cheese" },
          { amount: "To taste", item: "Salt and pepper" },
          { amount: "2 tbsp", item: "Fresh parsley, chopped (for garnish)" },
        ]}
        nutrients={[
          { name: "Calories", value: "610 kcal" },
          { name: "Fat", value: "25g" },
          { name: "Saturates", value: "11g" },
          { name: "Carbs", value: "58g" },
          { name: "Sugars", value: "3g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "38g" },
          { name: "Salt", value: "1.6g" },
        ]}
      />

      <Method
        headerNote="All the flavor, none of the hassle — one pot, creamy perfection."
        footerNote="Serve warm and garnish with extra Parmesan and parsley for a restaurant-quality finish."
        steps={[
          { step: 1, instruction: "Heat olive oil in a large deep skillet or pot over medium-high heat. Season the chicken with Cajun seasoning, smoked paprika, garlic powder, salt, and pepper." },
          { step: 2, instruction: "Add the chicken to the skillet and cook for 6–7 minutes, until golden and cooked through. Remove and set aside." },
          { step: 3, instruction: "In the same skillet, add minced garlic and sauté for about 1 minute until fragrant." },
          { step: 4, instruction: "Pour in the chicken broth and heavy cream. Stir to combine and bring to a low simmer." },
          { step: 5, instruction: "Add the uncooked linguine right into the skillet. Let it cook for about 12–14 minutes, stirring occasionally, until the pasta is tender and the sauce starts to thicken. Add a splash of broth or water if it gets too thick." },
          { step: 6, instruction: "Stir in the Parmesan cheese until melted and creamy." },
          { step: 7, instruction: "Add the chicken back in and toss everything together until well combined and heated through." },
          { step: 8, instruction: "Garnish with fresh parsley and serve warm." },
        ]}
      />
    </section>
  );
};

export default page;
