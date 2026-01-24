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
    { label: 'Slow-Roasted Garlic-Honey Mustard Lamb Shoulder Confit', href: '/Dinner/LambShoulderConfit' },
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
        title="Slow-Roasted Garlic-Honey Mustard Lamb Shoulder Confit"
        serves="6"
        prepTime="15 mins"
        cookTime="5 hrs"
        description="An incredibly tender lamb shoulder slowly roasted with garlic, Dijon and whole-grain mustard, honey, and fresh herbs. The long, gentle cooking creates meat that falls off the bone with a rich, aromatic pan sauce."
        imageUrl='/Images/LambShoulderConfit.jpg'
        showVegetarian={false}
        showVegan={false}
        authorName="Recipe Kitchen"
        authorUrl="https://miarecipes.uplodati.com/2026/01/16/slow-roasted-garlic-honey-mustard-lamb-shoulder-confit/?fbclid=IwZnRzaAPfNvtleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEe7vDEY1-jdUxzIs1dCg7ev6Uq56Sv8FEYM9UpiOh4B5fM_CSZ5fAR01j5g_0_aem_GEokVpx8XoyZ0GcOKXcLqg#google_vignette"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "1 (4–5 lbs)", item: "Bone-in Lamb Shoulder" },
          { amount: "6 cloves", item: "Garlic - Minced" },
          { amount: "3 tbsp", item: "Dijon Mustard" },
          { amount: "2 tbsp", item: "Whole-Grain Mustard" },
          { amount: "3 tbsp", item: "Honey" },
          { amount: "1 tbsp", item: "Fresh Rosemary - Finely Chopped" },
          { amount: "1 tbsp", item: "Fresh Thyme Leaves" },
          { amount: "¼ cup", item: "Olive Oil" },
          { amount: "", item: "Salt & Freshly Ground Black Pepper - To Taste" },
          { amount: "½ cup", item: "White Wine or Dry Vermouth" },
          { amount: "½ cup", item: "Lamb or Chicken Broth" },
        ]}
        nutrients={[
          { name: "Calories", value: "820 kcal" },
          { name: "Fat", value: "62g" },
          { name: "Saturates", value: "19g" },
          { name: "Carbs", value: "9g" },
          { name: "Sugars", value: "8g" },
          { name: "Fibre", value: "1g" },
          { name: "Protein", value: "54g" },
          { name: "Salt", value: "1.9g" },
        ]}
      />

      <Method
        headerNote="Slow cooking is key to achieving perfectly tender lamb."
        footerNote="Leftovers taste even better the next day as the flavors deepen."
        steps={[
          { step: 1, instruction: "Preheat the oven to 275°F (135°C). In a bowl, mix the garlic, Dijon mustard, whole-grain mustard, honey, rosemary, thyme, olive oil, salt, and pepper into a thick paste." },
          { step: 2, instruction: "Pat the lamb shoulder dry and lightly score the fat in a crisscross pattern. Rub the mustard-honey paste all over the lamb, working it into the cuts and crevices." },
          { step: 3, instruction: "Place the lamb in a roasting dish. Pour the wine and broth around the lamb, keeping the paste intact on top. Cover tightly with foil or a lid." },
          { step: 4, instruction: "Roast slowly for 4½ to 5 hours until the meat is extremely tender and easily pulls from the bone." },
          { step: 5, instruction: "Remove the cover, increase the oven to 375°F (190°C), and roast for a final 30 minutes to achieve a golden, caramelized exterior." },
          { step: 6, instruction: "Rest the lamb for 10–15 minutes before serving. Spoon the rich pan juices over the meat when serving." },
        ]}
      />

    </section>
  )
}

export default page
