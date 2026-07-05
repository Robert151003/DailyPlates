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
    { label: 'Pad Thai', href: '/Dinner/PadThai' },
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
        title="Pad Thai"
        serves="2 – 3"
        prepTime="20 mins"
        cookTime="10 mins"
        description="This Pad Thai recipe tastes just as good as takeout from top Thai restaurants, with all ingredients easily found at the supermarket. Sweet, tangy, and packed with flavour, it's the perfect quick dinner that rivals any restaurant version."
        imageUrl="/Images/PadThai.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Nagi"
        authorUrl="https://www.recipetineats.com/chicken-pad-thai/#recipe"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "125 g", item: "Chang's Pad Thai dried rice sticks (or similar 2-3mm rice noodles)" },
          { amount: "", item: "" },
          { amount: "", item: "Sauce:" },
          { amount: "1 1/2 tbsp", item: "Tamarind puree (not concentrate)" },
          { amount: "3 tbsp", item: "Brown sugar (packed)" },
          { amount: "2 tbsp", item: "Fish sauce" },
          { amount: "1 1/2 tbsp", item: "Oyster sauce" },
          { amount: "", item: "" },
          { amount: "", item: "Stir Fry:" },
          { amount: "2 – 3 tbsp", item: "Vegetable or canola oil" },
          { amount: "1/2", item: "Onion, sliced (brown or yellow)" },
          { amount: "2", item: "Garlic cloves, finely chopped" },
          { amount: "150 g", item: "Chicken breast (or thigh), thinly sliced" },
          { amount: "2", item: "Eggs, lightly whisked" },
          { amount: "1 1/2 cups", item: "Beansprouts" },
          { amount: "1/2 cup", item: "Firm tofu, cut into 3cm batons" },
          { amount: "1/4 cup", item: "Garlic chives, cut into 3cm pieces" },
          { amount: "1/4 cup", item: "Finely chopped peanuts" },
          { amount: "", item: "" },
          { amount: "", item: "For Serving:" },
          { amount: "", item: "Lime wedges" },
          { amount: "", item: "Ground chilli or cayenne pepper (optional)" },
          { amount: "", item: "Extra beansprouts" },
        ]}
        nutrients={[
          { name: "Calories", value: "428 kcal" },
          { name: "Carbohydrates", value: "45g" },
          { name: "Protein", value: "22g" },
          { name: "Fat", value: "17g" },
          { name: "Saturated Fat", value: "3g" },
          { name: "Fiber", value: "4g" },
          { name: "Sugar", value: "12g" },
          { name: "Sodium", value: "968mg" },
          { name: "Cholesterol", value: "92mg" },
        ]}
      />

      <Method
        headerNote="The key to great Pad Thai is having your sauce ready and using high heat. Work quickly once you start cooking - this dish comes together in minutes!"
        footerNote="Serve immediately while the noodles are soft and the sauce is still hot and glossy. Squeeze lime juice over before eating for the authentic Thai experience."
        steps={[
          { step: 1, instruction: "Place noodles in a large bowl and pour over plenty of boiling water. Soak for 5 minutes, then drain in a colander and rinse quickly under cold water. Don't let them sit for more than 5-10 minutes." },
          { step: 2, instruction: "While noodles soak, mix the sauce ingredients (tamarind puree, brown sugar, fish sauce, and oyster sauce) in a small bowl." },
          { step: 3, instruction: "Heat 2 tbsp oil in a large non-stick pan or well-seasoned skillet over high heat. Add garlic and onion, cook for 30 seconds." },
          { step: 4, instruction: "Add chicken and cook for 1 1/2 minutes until mostly cooked through." },
          { step: 5, instruction: "Push chicken to one side of the pan. Pour whisked egg onto the other side, scramble using a wooden spoon (add a touch of extra oil if the pan is too dry), then mix the scrambled egg into the chicken." },
          { step: 6, instruction: "Add beansprouts, tofu, and the soaked noodles. Pour the sauce over everything." },
          { step: 7, instruction: "Toss gently for about 1 1/2 minutes until the sauce is absorbed by the noodles." },
          { step: 8, instruction: "Add garlic chives and half the peanuts. Toss through quickly then remove from heat." },
          { step: 9, instruction: "Serve immediately, sprinkled with remaining peanuts and lime wedges on the side. Add a sprinkle of chilli and extra beansprouts if desired." },
        ]}
      />
    </section>
  )
}

export default page;
