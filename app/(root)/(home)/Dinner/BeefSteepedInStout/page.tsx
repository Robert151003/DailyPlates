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
    { label: 'Beef Steeped in Stout', href: '/Dinner/BeefSteepedInStout' },
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
        title="Beef Steeped in Stout"
        serves="4-6"
        prepTime="30 mins"
        cookTime="2 hrs 30 mins"
        description="A rich and comforting beef stew made with stout and blackcurrant conserve, served with optional light dumplings."
        imageUrl="/Images/BeefSteepedInStout.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Bonne Maman"
        authorUrl="https://www.ocado.com/recipes/beef-steeped-in-stout/31244?srsltid=AfmBOopQKdUndTvMH9dnTSplCSA5YDOS6RRETvrcywEWJHG0wJ2LRWaw"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote=""
        ingredients={[
          { amount: "1 tbsp", item: "Plain flour" },
          { amount: "2 tsp", item: "Dijon mustard" },
          { amount: "1 cube", item: "Beef or vegetable stock (to make 750ml)" },
          { amount: "4 tbsp", item: "Vegetable oil" },
          { amount: "2", item: "Large onions, roughly chopped" },
          { amount: "330 ml", item: "Stout" },
          { amount: "4 tbsp", item: "Bonne Maman blackcurrant conserve" },
          { amount: "1 small", item: "Onion, finely chopped (for dumplings)" },
          { amount: "1 knob", item: "Butter" },
          { amount: "1 small handful", item: "Fresh chives, chopped" },
          { amount: "75 g", item: "Fresh white breadcrumbs" },
          { amount: "1", item: "Egg" },
          { amount: "1 kg", item: "Braising steak" },
          { amount: "450 g", item: "Chantenay carrots, trimmed" },
        ]}
        nutrients={[
          { name: "Calories", value: "520 kcal" },
          { name: "Fat", value: "22g" },
          { name: "Saturates", value: "8g" },
          { name: "Carbs", value: "24g" },
          { name: "Sugars", value: "7g" },
          { name: "Fibre", value: "3g" },
          { name: "Protein", value: "46g" },
          { name: "Salt", value: "2.4g" },
        ]}
        
      />

      <Method
        headerNote="Follow these steps for tender beef and optional light dumplings."
        footerNote="Dumplings are optional but give a lighter finish compared to traditional suet dumplings."
        steps={[
          { step: 1, instruction: "Make the dumplings first: fry the small onion in butter, mix with remaining ingredients, cover and chill for at least 1 hour." },
          { step: 2, instruction: "Preheat oven to 170°C/150°C fan/Gas 3." },
          { step: 3, instruction: "Cut steak into large bite-sized pieces. Heat 2 tbsp oil in a casserole, brown meat in batches, remove with slotted spoon and set aside." },
          { step: 4, instruction: "Add remaining oil, brown carrots and onions 3-4 mins, stir in flour, scraping up crusty bits from base." },
          { step: 5, instruction: "Pour in stout, stock and blackcurrant conserve. Return meat with juices, bring to boil, cover and simmer in oven for 2-2.5 hrs until tender." },
          { step: 6, instruction: "Shape chilled dumpling mixture into 12 balls. About 30 mins before end, uncover beef, season, drop dumplings on top, continue cooking uncovered." },
          { step: 7, instruction: "Tips: Can be made 1-2 days ahead, partially cook beef, refrigerate or freeze, then finish cooking and add dumplings when ready. Dumplings are optional; alternatively, top with mustard-garlic baguette slices for last 30 mins." },
        ]}
      />
    </section>
  );
};

export default page;
