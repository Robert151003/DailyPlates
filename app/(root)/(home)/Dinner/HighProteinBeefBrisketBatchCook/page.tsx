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
    { label: 'High Protein Beef Brisket Batch Cook', href: '/Dinner/HighProteinBeefBrisketBatchCook' },
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
        title="High Protein Beef Brisket Batch Cook"
        serves="6"
        prepTime="10 mins"
        cookTime="3.5–4 hrs"
        description="A super simple high-protein beef brisket batch cook recipe. Slow baked with bold flavors including soy, balsamic, ginger and dark chocolate for a rich, tender finish. Perfect for meal prep."
        imageUrl="/Images/HighProteinBeefBrisketBatchCook.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="adamhoad_coaching"
        authorUrl="#"
      />

      <IngredientsList
        ingredientsHeaderNote="High-protein, slow-cooked and perfect for batch cooking."
        ingredientsFooterNote="Store in the fridge for up to 4 days or freeze in portions."
        nutrientsFooterNote="Macros listed for the whole recipe (approximate)."
        ingredients={[
          { amount: "1 kg", item: "Beef brisket" },
          { amount: "1", item: "Onion, sliced" },
          { amount: "3 cloves", item: "Garlic, minced" },
          { amount: "1 tbsp", item: "Crushed ginger" },
          { amount: "700 ml", item: "Beef stock or bone broth" },
          { amount: "20 g", item: "Dark chocolate" },
          { amount: "1 tbsp", item: "Honey" },
          { amount: "2 tbsp", item: "Soy sauce" },
          { amount: "2 tbsp", item: "Tomato paste" },
          { amount: "1 tbsp", item: "Balsamic vinegar" },
          { amount: "To taste", item: "Black pepper" },
        ]}
        nutrients={[
          { name: "Calories (whole recipe)", value: "~1440 kcal" },
          { name: "Protein (whole recipe)", value: "~204g" },
        ]}
      />

      <Method
        headerNote="Slow baked for tender, pull-apart brisket."
        footerNote="Great served with rice, potatoes, or vegetables."
        steps={[
          { step: 1, instruction: "Combine all of the ingredients in a large baking dish and mix well." },
          { step: 2, instruction: "Cover and cook in a preheated oven at 150°C for 3.5 to 4 hours (optional: turn and mix halfway through)." },
          { step: 3, instruction: "Shred or slice the beef, then serve and enjoy." },
        ]}
      />
    </section>
  );
};

export default page;