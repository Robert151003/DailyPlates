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
    { label: 'Appetizer', href: '/Appetizer' },
    { label: 'Savory Bruschetta Cheesecake Dip with Prosciutto & Sun-Dried Tomatoes', href: '/Appetizer/SavoryBruschettaCheesecakeDipwithProsciuttoSun-DriedTomatoes' },
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
        title="Savory Bruschetta Cheesecake Dip with Prosciutto & Sun-Dried Tomatoes"
        serves="6"
        prepTime="15 mins"
        cookTime="0 mins"
        description="This savory bruschetta dip is a creamy, no-bake appetizer made with cream cheese, prosciutto, and sun-dried tomatoes, finished with a fresh tomato bruschetta topping. Perfect for entertaining or easy parties."
        imageUrl="/Images/SavoryBruschettaCheesecakeDipwithProsciuttoSun-DriedTomatoes.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Kateryna"
        authorUrl="https://katerynascafe.com/savory-bruschetta-dip/?fbclid=IwY2xjawQQHAtleHRuA2FlbQIxMABicmlkETFoVXdRR1hpNE85eEY0Z1VHc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHu8rXqBFlm53UDPEJdxb418NYTOib-sZbMNNAv22unsnvXWpnYqNI5yyqJk0_aem_Ony5BCh5ENncU0-18Vt8sw"
      />

      <IngredientsList
        ingredientsHeaderNote="Creamy, savory, and perfect for entertaining."
        ingredientsFooterNote="Serve chilled with toasted bread, crackers, or crostini."
        nutrientsFooterNote="Nutritional values are approximate per serving."
        ingredients={[
          { amount: "8 oz", item: "Cream cheese, softened" },
          { amount: "1/2 cup", item: "Prosciutto, finely chopped (about 4–5 slices)" },
          { amount: "1/4 cup", item: "Sun-dried tomatoes in oil, drained and finely chopped" },
          { amount: "1 tsp", item: "Dried basil" },
          { amount: "1/2 tsp", item: "Garlic powder" },
          { amount: "To taste", item: "Salt and freshly ground black pepper" },
          { amount: "A few", item: "Cherry tomatoes, quartered" },
          { amount: "1", item: "Garlic clove, minced" },
          { amount: "1 tsp", item: "Olive oil" },
          { amount: "1/2 tsp", item: "Balsamic vinegar" },
          { amount: "1 tsp", item: "Fresh basil, julienned" },
          { amount: "For garnish", item: "Fresh basil leaves" },
        ]}
        nutrients={[
          { name: "Calories", value: "Approx. 320 kcal" },
          { name: "Fat", value: "28g" },
          { name: "Saturates", value: "12g" },
          { name: "Carbs", value: "6g" },
          { name: "Sugars", value: "4g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "10g" },
          { name: "Salt", value: "1.1g" },
        ]}
      />

      <Method
        headerNote="A no-bake savory cheesecake dip layered with Italian flavors."
        footerNote="Chill briefly to help it set before topping and serving."
        steps={[
          { step: 1, instruction: "In a small bowl, combine the cherry tomatoes, minced garlic, olive oil, balsamic vinegar, salt, and fresh basil. Mix gently and set aside to allow the flavors to meld." },
          { step: 2, instruction: "In a separate bowl, add the softened cream cheese, chopped prosciutto, sun-dried tomatoes, dried basil, garlic powder, salt, and pepper. Mix until smooth and evenly combined." },
          { step: 3, instruction: "Place a 4-inch ring mold on a serving plate and firmly pack the cream cheese mixture inside, smoothing the top with a spoon or spatula." },
          { step: 4, instruction: "Transfer to the refrigerator and chill for about 15 minutes, just until set." },
          { step: 5, instruction: "Carefully remove the ring mold. Spoon the tomato bruschetta mixture over the top, allowing some juices to drip naturally down the sides." },
          { step: 6, instruction: "Finish with fresh basil leaves and serve immediately." },
        ]}
      />
    </section>
  );
};

export default page;