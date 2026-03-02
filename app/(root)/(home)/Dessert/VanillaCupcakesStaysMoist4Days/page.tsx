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
    { label: 'Vanilla Cupcakes – Stays Moist 4 Days', href: '/Dessert/VanillaCupcakesStaysMoist4Days' },
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
        title="Vanilla Cupcakes"
        serves="12"
        prepTime="20 mins"
        cookTime="22 mins"
        description="Your search for the perfect vanilla cupcakes is over! These bakery-style cupcakes have a plush, velvety crumb and stay perfectly fresh for up to 4 days. Light, fluffy, and incredibly moist."
        imageUrl="/Images/VanillaCupcakesStaysMoist4Days.jpg"
        showVegetarian={true}
        showVegan={false}
        authorName="Nagi"
        authorUrl="https://www.recipetineats.com/vanilla-cupcakes/#recipe"
      />

      <IngredientsList
        ingredientsHeaderNote="Soft, fluffy bakery-style cupcakes."
        ingredientsFooterNote="Use room temperature eggs for best volume."
        nutrientsFooterNote="Nutritional values are approximate per cupcake."
        ingredients={[
          { amount: "150 g", item: "Plain / all-purpose flour" },
          { amount: "1.25 tsp", item: "Baking powder (not baking soda)" },
          { amount: "0.13 tsp", item: "Salt" },
          { amount: "2 large", item: "Eggs, room temperature" },
          { amount: "150 g", item: "Caster / superfine sugar" },
          { amount: "60 g", item: "Unsalted butter, cubed" },
          { amount: "125 ml", item: "Full-fat milk" },
          { amount: "2 tsp", item: "Vanilla extract" },
          { amount: "1.5 tsp", item: "Vegetable or canola oil" },
        ]}
        nutrients={[
          { name: "Calories", value: "Approx. 210 kcal" },
          { name: "Protein", value: "3g" },
          { name: "Carbs", value: "28g" },
          { name: "Fat", value: "9g" },
        ]}
      />

      <Method
        headerNote="Whipped egg method for extra plush texture."
        footerNote="Cool completely before frosting."
        steps={[
          { step: 1, instruction: "Preheat oven to 180°C/350°F (160°C fan). Line a 12-hole muffin tin with cupcake liners." },
          { step: 2, instruction: "Whisk flour, baking powder and salt in a bowl. Set aside." },
          { step: 3, instruction: "Heat milk and butter together until butter melts. Keep very warm but not boiling." },
          { step: 4, instruction: "Beat eggs for 30 seconds, then gradually add sugar while beating. Beat 6 minutes until tripled in volume and pale." },
          { step: 5, instruction: "Add flour in three additions, mixing briefly on low speed until just combined." },
          { step: 6, instruction: "Mix a portion of egg batter into the hot milk mixture to temper it." },
          { step: 7, instruction: "Slowly pour milk mixture back into the batter on low speed. Scrape bowl and mix briefly until smooth." },
          { step: 8, instruction: "Fill liners 2/3 full and bake for 22 minutes until golden and a toothpick comes out clean." },
          { step: 9, instruction: "Cool for 2 minutes in tin, then transfer to a rack. Cool completely before frosting." },
        ]}
      />
    </section>
  );
};

export default page;