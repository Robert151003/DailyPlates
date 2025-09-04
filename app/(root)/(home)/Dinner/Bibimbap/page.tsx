'use client'

import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';
import IngredientsList from '@/components/RecipeComponents/IngredientsList';
import IntroductoryDescription from '@/components/RecipeComponents/IntroductoryDescription';
import Method from '@/components/RecipeComponents/Method';
import Link from 'next/link';

const page = () => {


  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Dinner', href: '/Dinner' },
    { label: 'Bibimbap', href: '/Dinner/Bibimbap' },
  ];

  return (
    <section
      className={`flex flex-col gap-10 ml-0 pl-4`}
    >

      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <IntroductoryDescription
        title="Bibimbap"
        serves="4"
        prepTime="35 mins"
        cookTime="55 mins"
        description="Authentic Korean Bibimbap, a vibrant and wholesome dish bursting with flavors. Complete with a bibimbap sauce that's so good, you’ll want to drizzle it on everything!"
        imageUrl='/Images/Bibimbap.jpg'
        showVegetarian={false}
        showVegan={false}
        authorName="Sue Pressey"
        authorUrl="https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/#recipe"
      />


      
      <IngredientsList
        ingredientsHeaderNote="Perfect for fluffy pancakes 🍳"
        ingredientsFooterNote="Tip: sift your flour for best results!"
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "100g", item: "Beef Strips" },
          { amount: "1 tbsp", item: "Soy Sauce" },
          { amount: "2 tbsp", item: "Sesame Oil" },
          { amount: "1 tsp", item: "Brown Sugar" },
          { amount: "1 1/4 tsp", item: "Minced Garlic" },
          { amount: "250g", item: "Spinach" },
          { amount: "350g", item: "Bean Sprouts" },
          { amount: "100g", item: "Shiitake Mushrooms" },
          { amount: "120g", item: "Carrots" },
          { amount: "1/2 tsp", item: "Sea Salt" },
          { amount: "3 Cups", item: "Steamed Rice" },
          { amount: "3", item: "Eggs" },
          { amount: "", item: "Vegetable Oil" },
          { amount: "2 tbsp", item: "Gochujang" },
          { amount: "1 tbsp", item: "Sugar" },
          { amount: "1 tbsp", item: "Water" },
          { amount: "1 tbsp", item: "Sesame Seeds" },
          { amount: "1 tsp", item: "Vinegar" },
        ]}
        nutrients={[
          { name: "Calories", value: "570 kcal" },
          { name: "Fat", value: "23g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "71g" },
          { name: "Sugars", value: "14g" },
          { name: "Fibre", value: "7g" },
          { name: "Protein", value: "24g" },
          { name: "Salt", value: "2.3g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for the fluffiest pancakes."
        footerNote="Serve immediately with syrup and berries."
        steps={[
            { step: 1, instruction: "For meat, mix the beef mince with 1 tbsp soy sauce, 1tbsp sesame oil, 1 tsp brown sugar and 1/4 tsp of minced garlic listed above. Marinate the meat for about 30 mins while you are working on other ingredients to enhance the flavour. Add some cooking oil into a wok and cook the meat on medium high to high heat. It takes about 3 to 5 mins to thoroughly cook it." },
            { step: 2, instruction: "Mix the bibimbap sauce by mixing 2 tsbp gochujang, 1 tbsp of sesame oil, 1 tbsp sugar, 1 tbsp water, 1 tbsp sesame seeds, 1 tbsp vinegar, 1 tbsp minced garlic in a bowl." },
            {
                step: 3,
                instruction: (
                  <>
                    Cook{" "}
                    <Link
                      href="/Dinner/KoreanSpinach"
                      className="text-blue-500 underline"
                    >
                      spinach
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/Dinner/KoreanBeanSprouts"
                      className="text-blue-500 underline"
                    >
                      bean sprouts
                    </Link>{" "}
                    per their respective recipes.
                  </>
                ),
              },
            { step: 4, instruction: "Rinse, peel and julienne the carrots. Add some cooking oil and 1/4 tsp of fine sea salt in a wok and cook the carrots on medium high to high heat for 2 to 3 mins." },
            { step: 5, instruction: "Clean/rinse the shiitake mushrooms and thinly slice them. Add some cooking oil and 1/4 tsp of fine sea salt in a wok and cook the mushrooms on medium high to high heat until they are all cooked (2 to 3 mins)." },
            { step: 6, instruction: "Make fried eggs. (While sunny side up is common, you can make them per your preference.)" },
            { step: 7, instruction: "Put the rice into a bowl and add the meat, assorted vegetables, seasoned seaweed, bibimbap sauce, and the egg on top of the rice. Serve." },
            { step: 8, instruction: "To eat, mix the ingredients in the bowl, and enjoy!" },
        ]}          
      />

    </section>
  )
}

export default page