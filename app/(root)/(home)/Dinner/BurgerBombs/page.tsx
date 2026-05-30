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
    { label: 'Burger Bombs', href: '/Dinner/BurgerBombs' },
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
        title="Burger Bombs"
        serves="6"
        prepTime="25 mins"
        cookTime="25–30 mins"
        description="Soft, golden baked dough stuffed with juicy beef patties, caramelized onions, cheese, pickles, and burger sauce. These Burger Bombs are the ultimate comfort food snack or dinner idea."
        imageUrl="/Images/BurgerBombs.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Fizzakhanim Isgandarova"
        authorUrl="https://www.facebook.com/61563466748411/videos/burger-bombs-dough-240-g-warm-milk-100-g-warm-water-12-g-sugar-5-g-instant-yeast/1638533633869843/?mibextid=wwXIfr&rdid=yKzIMKTXgGXM5vos"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "240 g", item: "Warm milk" },
          { amount: "100 g", item: "Warm water" },
          { amount: "12 g", item: "Sugar" },
          { amount: "5 g", item: "Instant yeast" },
          { amount: "1", item: "Egg" },
          { amount: "8 g", item: "Salt (dough)" },
          { amount: "500–560 g", item: "All-purpose flour" },
          { amount: "30 g", item: "Butter" },

          { amount: "500 g", item: "Ground beef" },
          { amount: "8 g", item: "Salt (beef)" },
          { amount: "3 g", item: "Black pepper" },

          { amount: "2 large", item: "Onions, sliced" },
          { amount: "30 g", item: "Olive oil" },
          { amount: "5 g", item: "Salt (onions)" },
          { amount: "5 g", item: "Sugar (onions)" },

          { amount: "1", item: "Egg yolk" },
          { amount: "10 g", item: "Sesame seeds" },

          { amount: "60 g", item: "Mayonnaise" },
          { amount: "30 g", item: "Ketchup" },
          { amount: "15 g", item: "Mustard" },
          { amount: "30 g", item: "Pickles, finely chopped" },
        ]}
        nutrients={[
          { name: "Calories", value: "780 kcal" },
          { name: "Carbs", value: "52g" },
          { name: "Protein", value: "38g" },
          { name: "Fat", value: "45g" },
          { name: "Saturates", value: "18g" },
          { name: "Fibre", value: "3g" },
          { name: "Sugars", value: "9g" },
          { name: "Salt", value: "2.4g" },
        ]}
      />

      <Method
        headerNote="Assemble carefully to keep all the filling sealed inside the dough."
        footerNote="Best served warm while the cheese is still melted inside."
        steps={[
          { step: 1, instruction: "In a large bowl, mix warm milk, warm water, sugar, and yeast. Let sit for 5 minutes until foamy." },
          { step: 2, instruction: "Add egg, salt, and flour. Knead until a soft dough forms." },
          { step: 3, instruction: "Add butter and knead for another 5 minutes until smooth. Cover and let rise for 1 hour." },
          { step: 4, instruction: "Heat olive oil in a pan and cook sliced onions with salt and sugar on low heat until caramelized (about 15 minutes)." },
          { step: 5, instruction: "Mix ground beef with salt and pepper, then form into patties and cook or pre-sear as desired." },
          { step: 6, instruction: "Divide dough into portions and flatten each piece." },
          { step: 7, instruction: "Fill each with cheese, burger patty, caramelized onions, pickles, burger sauce, another patty, and more cheese." },
          { step: 8, instruction: "Seal dough completely around filling and place seam-side down on a baking tray." },
          { step: 9, instruction: "Brush with egg yolk, sprinkle with sesame seeds, and bake until golden brown." },
        ]}
      />

    </section>
  )
}

export default page;