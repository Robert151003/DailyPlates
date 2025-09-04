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
    { label: 'Cottage Pie', href: '/Dinner/CottagePie' },
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
        title="Cottage Pie"
        serves="10"
        prepTime="35 mins"
        cookTime="1 hr 50 mins"
        description="Make our classic meat and potato pie for a comforting dinner. This great-value family favourite freezes beautifully and is a guaranteed crowd-pleaser."
        imageUrl="/Images/CottagePie.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Good Food team"
        authorUrl="https://www.bbcgoodfood.com/recipes/cottage-pie"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "3 tbsp", item: "Olive oil" },
          { amount: "1¼ kg", item: "Beef mince" },
          { amount: "2", item: "Onions, finely chopped" },
          { amount: "3", item: "Carrots, chopped" },
          { amount: "3", item: "Celery sticks, chopped" },
          { amount: "2 cloves", item: "Garlic, finely chopped" },
          { amount: "3 tbsp", item: "Plain flour" },
          { amount: "1 tbsp", item: "Tomato purée" },
          { amount: "1 glass", item: "Red wine (optional)" },
          { amount: "850 ml", item: "Beef stock" },
          { amount: "4 tbsp", item: "Worcestershire sauce" },
          { amount: "Few", item: "Thyme sprigs" },
          { amount: "2", item: "Bay leaves" },
          { amount: "1.8 kg", item: "Potatoes, peeled and chopped" },
          { amount: "225 ml", item: "Milk" },
          { amount: "25 g", item: "Butter" },
          { amount: "200 g", item: "Strong cheddar, grated" },
          { amount: "To taste", item: "Freshly grated nutmeg, salt and pepper" },
        ]}
        nutrients={[
          { name: "Calories", value: "597 kcal" },
          { name: "Fat", value: "34 g" },
          { name: "Saturates", value: "16 g" },
          { name: "Carbs", value: "34.06 g" },
          { name: "Sugars", value: "7 g" },
          { name: "Fibre", value: "4 g" },
          { name: "Protein", value: "36 g" },
          { name: "Salt", value: "0.98 g" },
        ]}
      />

      <Method
        headerNote="Follow these steps carefully for the perfect cottage pie."
        footerNote="Serve hot for a comforting family meal."
        steps={[
          { step: 1, instruction: "Heat 1 tbsp olive oil in a large saucepan and fry the beef mince in batches until browned. Set aside as it browns." },
          { step: 2, instruction: "Add remaining 2 tbsp oil, the onions, carrots and celery, and cook gently until soft, about 20 mins." },
          { step: 3, instruction: "Stir in garlic, flour and tomato purée, cook for a few mins, then return the beef to the pan." },
          { step: 4, instruction: "Pour in red wine if using, boil to reduce slightly. Add stock, Worcestershire sauce, thyme and bay leaves." },
          { step: 5, instruction: "Simmer uncovered for 45 mins until gravy thickens. Remove bay leaves and thyme stalks, season well." },
          { step: 6, instruction: "Meanwhile, boil potatoes until tender, drain and steam-dry, then mash with milk, butter, three-quarters of the cheese, nutmeg, salt and pepper." },
          { step: 7, instruction: "Spoon meat into dishes, top with mashed potatoes, sprinkle with remaining cheese." },
          { step: 8, instruction: "Oven cook at 220C/200C fan/gas 7 for 25-30 mins until golden. Optionally finish in a slow cooker as described in the recipe." },
        ]}
      />
    </section>
  );
};

export default page;
