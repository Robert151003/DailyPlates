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
    { label: 'Sweet Chili Lime Cod', href: '/Dinner/SweetChiliLimeCod' },
  ];

  return (
    <section className={`flex flex-col gap-10 ml-0 pl-4`}>

      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <IntroductoryDescription
        title="Sweet Chili Lime Cod"
        serves="4"
        prepTime="10 mins"
        cookTime="10 mins"
        description="Tender cod strips sautéed in garlic butter and finished with a bright sweet chili lime glaze. A quick, vibrant dish that balances richness with subtle heat and citrus freshness."
        imageUrl='/Images/SweetChiliLimeCod.jpg'
        showVegetarian={false}
        showVegan={false}
        authorName="Recipe Kitchen"
        authorUrl="#"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "1 lb", item: "Cod Fillets - Cut into Strips" },
          { amount: "4 tbsp", item: "Unsalted Butter" },
          { amount: "3 cloves", item: "Garlic - Minced" },
          { amount: "1 tsp", item: "Paprika" },
          { amount: "", item: "Salt & Black Pepper - To Taste" },
          { amount: "1 tbsp", item: "Fresh Parsley - Chopped (Garnish)" },
          { amount: "1/4 cup", item: "Sweet Chili Sauce" },
          { amount: "1", item: "Lime - Juice and Zest" },
          { amount: "1 tsp", item: "Soy Sauce" },
          { amount: "1 tsp", item: "Sesame Oil" },
          { amount: "1 tsp", item: "Sriracha (Optional)" },
        ]}
        nutrients={[
          { name: "Calories", value: "410 kcal" },
          { name: "Fat", value: "27g" },
          { name: "Saturates", value: "14g" },
          { name: "Carbs", value: "14g" },
          { name: "Sugars", value: "10g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "32g" },
          { name: "Salt", value: "1.6g" },
        ]}
      />

      <Method
        headerNote="Cook the cod gently to keep it flaky and tender."
        footerNote="Serve immediately while warm for the best texture and flavor."
        steps={[
          { step: 1, instruction: "Pat the cod strips completely dry with paper towels. Season evenly on all sides with salt, black pepper, and paprika." },
          { step: 2, instruction: "Melt the butter in a large skillet over medium heat. Add the minced garlic and sauté for about 1 minute until fragrant, ensuring it does not brown." },
          { step: 3, instruction: "Place the cod strips in the skillet in a single layer. Cook for 3 to 4 minutes per side until the fish is opaque, flaky, and lightly golden. Remove from heat." },
          { step: 4, instruction: "In a small bowl, whisk together the sweet chili sauce, lime juice, lime zest, soy sauce, sesame oil, and sriracha (if using) until smooth." },
          { step: 5, instruction: "Drizzle the sweet chili lime sauce over the warm cod strips. Garnish with fresh parsley and serve immediately." },
        ]}
      />

    </section>
  )
}

export default page
