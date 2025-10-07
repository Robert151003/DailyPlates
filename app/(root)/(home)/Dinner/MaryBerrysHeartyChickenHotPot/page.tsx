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
    { label: "Mary Berry's Hearty Chicken Hot Pot", href: '/Dinner/MaryBerrysHeartyChickenHotPot' },
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
        title="Mary Berry's Hearty Chicken Hot Pot"
        serves="Serves 4–6"
        prepTime="20 mins"
        cookTime="1 hr 15 mins"
        description="Warm up your weekend with Mary Berry's Hearty Chicken Hot Pot! This comforting dish is perfect for family gatherings — cozy up and enjoy a delicious meal together!"
        imageUrl="/Images/MaryBerrysHeartyChickenHotPot.jpg"
        showVegetarian={false}
        showVegan={false}
        authorName="Recipes Clan"
        authorUrl="https://www.facebook.com/photo.php?fbid=122245756532252722&set=a.122103602576252722&type=3&mibextid=wwXIfr&rdid=eECrkI5L3W5XtcbW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19QjScS6h3%2F%3Fmibextid%3DwwXIfr"
      />

      <IngredientsList
        ingredientsHeaderNote=""
        ingredientsFooterNote=""
        nutrientsFooterNote="* Nutritional values are approximate per serving."
        ingredients={[
          { amount: "50g", item: "Butter" },
          { amount: "2", item: "Onions, thinly sliced" },
          { amount: "2", item: "Celery stalks, finely chopped" },
          { amount: "2", item: "Carrots, peeled and diced" },
          { amount: "50g", item: "Plain flour" },
          { amount: "100ml", item: "Vegetable broth" },
          { amount: "450ml", item: "Hot chicken stock" },
          { amount: "1 tbsp", item: "Tomato purée" },
          { amount: "750g", item: "Skinless, boneless chicken thighs, chopped into chunks" },
          { amount: "200g", item: "Chestnut mushrooms, sliced" },
          { amount: "1 tbsp", item: "Fresh thyme, chopped" },
          { amount: "2", item: "Bay leaves" },
          { amount: "750g", item: "Large potatoes, peeled and sliced thinly" },
          { amount: "", item: "Salt and freshly ground black pepper" },
        ]}
        nutrients={[
          { name: "Calories", value: "520 kcal" },
          { name: "Fat", value: "24g" },
          { name: "Saturates", value: "11g" },
          { name: "Carbs", value: "35g" },
          { name: "Sugars", value: "7g" },
          { name: "Fibre", value: "5g" },
          { name: "Protein", value: "36g" },
          { name: "Salt", value: "1.3g" },
        ]}
      />

      <Method
        headerNote="A hearty, golden-topped chicken hot pot perfect for cozy family dinners."
        footerNote="Serve immediately, optionally with steamed vegetables or a green salad."
        steps={[
          { step: 1, instruction: "Preheat the oven to 180°C (160°C fan) or Gas Mark 4. Grease a 2-litre casserole dish with butter." },
          { step: 2, instruction: "Melt the butter in the casserole dish over medium heat. Add the onions, celery, and carrots, and cook until softened." },
          { step: 3, instruction: "In a bowl, whisk plain flour into the vegetable broth until smooth. Gradually stir in the hot chicken stock." },
          { step: 4, instruction: "Pour the liquid mixture over the vegetables, add the tomato purée, and bring to a gentle simmer." },
          { step: 5, instruction: "Stir in the chicken, mushrooms, thyme, and bay leaves. Season with salt and pepper." },
          { step: 6, instruction: "Layer the thinly sliced potatoes on top, overlapping slightly, and season again with salt and pepper." },
          { step: 7, instruction: "Cover and bake for about 1 hour, until the chicken is cooked through and the potatoes are tender." },
          { step: 8, instruction: "Remove the lid and grill for 5–10 minutes until the top is golden and crispy." },
          { step: 9, instruction: "Serve hot and enjoy this comforting, homely classic." },
        ]}
      />

    </section>
  );
};

export default page;
