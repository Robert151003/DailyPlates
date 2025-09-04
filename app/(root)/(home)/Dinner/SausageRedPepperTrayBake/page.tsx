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
    { label: 'Sausage & Red Pepper Tray Bake', href: '/Dinner/SausageRedPepperTrayBake' },
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
        title="Sausage and Red Pepper Tray Bake"
        serves="4–6"
        prepTime="less than 30 mins"
        cookTime="30 mins to 1 hour"
        description="A colorful and hearty tray bake of sausages, bacon, peppers, and potatoes. Perfect for a comforting family dinner."
        imageUrl="/Images/SausageRedPepperTrayBake.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Mary Berry"
        authorUrl="https://www.bbc.co.uk/food/recipes/sausage_and_red_pepper_15607"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "1 tbsp", item: "Sunflower oil" },
          { amount: "8", item: "Spicy pork sausages" },
          { amount: "4 rashers", item: "Smoked bacon, finely chopped" },
          { amount: "1", item: "Onion, sliced" },
          { amount: "1", item: "Red pepper, seeds removed and cut into large chunks" },
          { amount: "1", item: "Large carrot, peeled and diced" },
          { amount: "1 clove", item: "Garlic, crushed" },
          { amount: "300 ml", item: "Chicken stock" },
          { amount: "400 g", item: "Tin chopped tomatoes" },
          { amount: "2 tbsp", item: "Sun-dried tomato purée" },
          { amount: "2 sprigs", item: "Fresh thyme" },
          { amount: "250 g", item: "Baby new potatoes, sliced into thick discs" },
          { amount: "To taste", item: "Salt and freshly ground black pepper" },
        ]}
        nutrients={[
          { name: "Calories", value: "410 kcal" },
          { name: "Fat", value: "21g" },
          { name: "Saturates", value: "7g" },
          { name: "Carbs", value: "32g" },
          { name: "Sugars", value: "8g" },
          { name: "Fibre", value: "5g" },
          { name: "Protein", value: "23g" },
          { name: "Salt", value: "1.5g" },
        ]}
        
      />

      <Method
        headerNote="Follow these steps for a perfectly cooked tray bake."
        footerNote="Serve with freshly cooked green vegetables."
        steps={[
          { step: 1, instruction: "Heat the oil in a large deep frying pan or casserole over high heat. Add the sausages and fry until browned all over. Remove and set aside." },
          { step: 2, instruction: "Add the bacon to the pan and fry until crisp. Remove and set aside with the sausages." },
          { step: 3, instruction: "Add onion, red pepper, carrot, and garlic. Fry for 5 minutes over high heat." },
          { step: 4, instruction: "Add the stock, chopped tomatoes, tomato purée, and thyme. Bring to the boil. Add potatoes and season with salt and pepper." },
          { step: 5, instruction: "Return bacon and sausages to the pan. Cover and simmer over gentle heat for about 20 minutes. Remove lid and simmer another 10 minutes until sauce has reduced and vegetables are tender." },
        ]}
      />
    </section>
  );
};

export default page;
