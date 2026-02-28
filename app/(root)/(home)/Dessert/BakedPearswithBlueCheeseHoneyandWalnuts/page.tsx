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
    { label: 'Dessert', href: '/Dessert' },
    { label: 'Baked Pears with Blue Cheese, Honey & Walnuts', href: '/Dessert/BakedPearswithBlueCheeseHoneyandWalnuts' },
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
        title="Baked Pears with Blue Cheese, Honey & Walnuts"
        serves="6 halves"
        prepTime="10 mins"
        cookTime="30 mins"
        description="Tender baked pears brushed with butter and honey, sprinkled with cinnamon, then topped with juicy berries, toasted walnuts, and creamy blue cheese. A beautiful sweet and savory dessert perfect for entertaining."
        imageUrl="/Images/BakedPearswithBlueCheeseHoneyandWalnuts.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Recipes by Sylvia"
        authorUrl="https://www.facebook.com/photo.php?fbid=122239367768263905&set=a.122095773332263905&type=3&mibextid=wwXIfr&rdid=GZQ9PxGtQWzYfUic&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BV7mvoTnb%2F%3Fmibextid%3DwwXIfr"
      />

      <IngredientsList
        ingredientsHeaderNote="Sweet, savory, and elegantly simple."
        ingredientsFooterNote="Best served warm straight from the oven."
        nutrientsFooterNote="Nutritional values are approximate per serving."
        ingredients={[
          { amount: "3", item: "Ripe pears (Bosc or Bartlett), halved and cored" },
          { amount: "2 tbsp", item: "Butter, melted" },
          { amount: "2 tbsp", item: "Honey" },
          { amount: "1/2 cup", item: "Fresh mixed berries (blueberries, raspberries, or cranberries)" },
          { amount: "1/4 cup", item: "Walnuts, lightly toasted and chopped" },
          { amount: "1/4 cup", item: "Blue cheese or gorgonzola, crumbled" },
          { amount: "1/2 tsp", item: "Cinnamon" },
          { amount: "Optional", item: "Fresh thyme leaves, for garnish" },
        ]}
        nutrients={[
          { name: "Calories", value: "235 kcal" },
          { name: "Fat", value: "14g" },
          { name: "Saturates", value: "6g" },
          { name: "Carbs", value: "26g" },
          { name: "Sugars", value: "21g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "4g" },
          { name: "Salt", value: "0.3g" },
        ]}
      />

      <Method
        headerNote="A warm, elegant dessert with perfect sweet and savory balance."
        footerNote="Serve immediately while warm for best flavor and texture."
        steps={[
          { step: 1, instruction: "Preheat the oven to 375°F (190°C)." },
          { step: 2, instruction: "Arrange pear halves in a baking dish, cut side up." },
          { step: 3, instruction: "Brush with melted butter, drizzle with honey, and sprinkle cinnamon over the top." },
          { step: 4, instruction: "Bake for 20–25 minutes, or until pears are tender." },
          { step: 5, instruction: "Remove from the oven and top each pear with mixed berries and toasted walnuts." },
          { step: 6, instruction: "Sprinkle crumbled blue cheese on top and return to the oven for another 5 minutes to slightly soften the cheese." },
          { step: 7, instruction: "Garnish with fresh thyme leaves and serve warm." },
        ]}
      />
    </section>
  );
};

export default page;