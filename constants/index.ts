export const sidebarLinks=[
    {
        label:'Breakfast',
        route:'/Breakfast',
        imgUrl: '/icons/breakfast',
    },
    {
        label:'Lunch',
        route:'/Lunch',
        imgUrl: '/icons/lunch',
    },
    {
        label:'Dinner',
        route:'/Dinner',
        imgUrl: '/icons/dinner',
    },
]

export const pageList = {
    "./": { name: "Home", imageUrl: "/Images/default-recipe.jpg", isVegetarian: false, isVegan: false, ingredients: [] },
    
    "Breakfast": { name: "Breakfast", imageUrl: "/Images/default-recipe.jpg", isVegetarian: false, isVegan: false, ingredients: [] },
    "Breakfast/AmericanPancakes": { name: "American Pancakes", imageUrl: "/Images/AmericanPancakes.jpg", isVegetarian: true, isVegan: false, ingredients: ["flour", "milk", "eggs", "sugar", "baking powder"] },

    "Lunch": { name: "Lunch", imageUrl: "/Images/default-recipe.jpg", isVegetarian: false, isVegan: false, ingredients: [] },
    "Lunch/CucumberSalad": { name: "Cucumber Salad", imageUrl: "/Images/CucumberSalad.jpg", isVegetarian: true, isVegan: true, ingredients: ["English cucumbers", "red onion", "white wine vinegar", "honey or agave nectar", "sea salt", "fresh dill", "chives", "black pepper"] },

    "Dinner": { name: "Dinner", imageUrl: "/Images/default-recipe.jpg", isVegetarian: false, isVegan: false, ingredients: [] },
    "Dinner/Bibimbap": { name: "Bibimbap", imageUrl: "/Images/Bibimbap.jpg", isVegetarian: false, isVegan: false, ingredients: ["beef strips", "soy sauce", "sesame oil", "brown sugar", "minced garlic", "spinach", "bean sprouts", "shiitake mushrooms", "carrots", "sea salt", "steamed rice", "eggs", "vegetable oil", "gochujang", "sugar", "water", "sesame seeds", "vinegar"] },
    "Dinner/KoreanSpinach": { name: "Korean Spinach", imageUrl: "/Images/KoreanSpinach.jpg", isVegetarian: true, isVegan: true, ingredients: ["spinach", "garlic", "soy sauce", "sesame oil", "sesame seeds"] },
    "Dinner/KoreanBeanSprouts": { name: "Korean Bean Sprouts", imageUrl: "/Images/KoreanBeanSprouts.jpg", isVegetarian: true, isVegan: true, ingredients: ["bean sprouts", "garlic", "soy sauce", "sesame oil", "green onion"] },
    "Dinner/BeefGuinnessStew": { name: "Beef & Guinness Stew with Champ Potato", imageUrl: "/Images/BeefGuinnessStew.jpg", isVegetarian: false, isVegan: false, ingredients: ["diced beef", "Guinnesss Foreign Extra Stout", "medium onion", "large carrot", "large celary", "large parsnip", "thick beef stock", "sprigs of fresh thyme & rosemary", "champ potato"] },
    "Dinner/LighterFishPie": {name: "Lighter Fish Pie",  imageUrl: "/Images/LighterFishPie.jpg",  isVegetarian: false,  isVegan: false,  ingredients: [    "olive oil",    "medium leeks",    "mixed fish",    "skimmed milk",    "bay leaf",    "plain flour",    "rye or wholemeal bread",    "rolled oats",    "parmesan",    "broad bean, edamame bean & pea mix",    "lemon wedges"  ]},
    "Dinner/BeetrootPastaBake": { name: "Creamy Pasta Bake with Beetroot and Smoked Ham", imageUrl: "/Images/BeetrootPastaBake.jpg", isVegetarian: false, isVegan: false, ingredients: ["plain flour", "cooked beetroot", "onion", "unsalted butter", "garlic", "milk", "mature cheddar", "chives", "pasta", "double cream", "smoked ham"] },
    "Dinner/Dumplings": { name: "Dumplings", imageUrl: "/Images/Dumplings.jpg", isVegetarian: true, isVegan: false, ingredients: ["self-raising flour", "suet", "parsley"] },
    "Dinner/YorkshirePuddings": { name: "Best Yorkshire Puddings", imageUrl: "/Images/YorkshirePuddings.jpg", isVegetarian: true, isVegan: false, ingredients: ["plain flour", "eggs", "milk", "sunflower oil"] },
    "Dinner/SpicedLentilSquashSoup": { name: "Spiced Lentil & Butternut Squash Soup", imageUrl: "/Images/SpicedLentilSquashSoup.jpg", isVegetarian: true, isVegan: true, ingredients: ["olive oil", "onions", "garlic", "hot chilli powder", "ras el hanout", "butternut squash", "red lentils", "vegetable stock", "coriander", "dukkah", "natural yoghurt"] },
    "Dinner/Shakshuka": { name: "Easy Shakshuka", imageUrl: "/Images/Shakshuka.jpg", isVegetarian: true, isVegan: false, ingredients: ["olive oil", "red onions", "red chilli", "garlic", "coriander", "cherry tomatoes", "caster sugar", "eggs"] },
    "Dinner/CottagePie": { name: "Cottage Pie", imageUrl: "/Images/CottagePie.jpg", isVegetarian: false, isVegan: false, ingredients: ["sunflower oil", "large onion", "carrots", "celery sticks", "garlic", "tomato purée", "lean minced beef", "beef stock", "Worcestershire sauce", "cornflour", "potatoes", "butter", "milk", "Cheddar cheese"] },
    "Dinner/SlowRoastedLambShoulder": { name: "Slow Roasted Rosemary Garlic Lamb Shoulder", imageUrl: "/Images/SlowRoastedLambShoulder.jpg", isVegetarian: false, isVegan: false, ingredients: ["lamb shoulder", "olive oil", "salt", "black pepper", "onion", "garlic bulb", "garlic cloves", "rosemary sprigs", "water", "flour", "beef broth or red wine", "salt and pepper"] },
    "Dinner/BeefSteepedInStout": { name: "Beef Steeped in Stout", imageUrl: "/Images/BeefSteepedInStout.jpg", isVegetarian: false, isVegan: false, ingredients: ["plain flour", "dijon mustard", "stock cube", "vegetable oil", "large onions", "stout", "blackcurrant conserve", "small onion", "butter", "fresh chives", "fresh white breadcrumbs", "egg", "braising steak", "chantenay carrots"] },
    "Dinner/SausageRedPepperTrayBake": { name: "Sausage and Red Pepper Tray Bake", imageUrl: "/Images/SausageRedPepperTrayBake.jpg", isVegetarian: false, isVegan: false, ingredients: ["sunflower oil","spicy pork sausages","smoked bacon, finely chopped","onion, sliced","red pepper, cut into large chunks","large carrot, diced","garlic, crushed","chicken stock","chopped tomatoes","sun-dried tomato purée","fresh thyme","baby new potatoes, sliced","salt and freshly ground black pepper"] },
    "Dinner/OrzoChickenBake": { name: "High-Protein Orzo Chicken Bake", imageUrl: "/Images/OrzoChickenBake.jpg", isVegetarian: false, isVegan: false, ingredients: ["orzo pasta","chicken breast","chorizo","cream cheese","medium peppers","cherry tomatoes","spinach","paprika","salt","black pepper","chicken stock"] },
    "Dinner/HoneyGarlicChickenBreast": { name: "Honey Garlic Chicken Breast", imageUrl: "/Images/HoneyGarlicChickenBreast.jpg", isVegetarian: false, isVegan: false, ingredients: ["chicken breast", "salt", "pepper", "flour", "unsalted butter", "garlic", "apple cider vinegar", "soy sauce", "honey"] },
    "Dinner/CucumberSalad": { name: "Cucumber Salad", imageUrl: "/Images/CucumberSalad.jpg", isVegetarian: true, isVegan: true, ingredients: ["English cucumbers", "red onion", "white wine vinegar", "honey or agave nectar", "sea salt", "fresh dill", "chives", "black pepper"] },
    "Dinner/UltimateFishCakes": { name: "Ultimate Fish Cakes", imageUrl: "/Images/UltimateFishCakes.jpg", isVegetarian: false, isVegan: false, ingredients: ["Cod or haddock fillet", "Maris Piper potatoes", "Mayonnaise", "Capers", "Horseradish", "Dijon mustard", "Shallot", "Parsley", "Chives", "Egg", "Breadcrumbs", "Vegetable oil", "Lemon", "Watercress"] },
    "Dinner/CreamyPrawnLinguine": { name: "Creamy Prawn Linguine", imageUrl: "/Images/CreamyPrawnLinguine.jpg", isVegetarian: false, isVegan: false, ingredients: ["Raw peeled prawns/shrimp", "Linguine", "Heavy cream", "Dry white wine", "Parmesan", "Shallot", "Red chilli", "Garlic", "Parsley", "Butter", "Olive oil", "Salt", "Pepper"], nutrients: ["640 kcal", "32g fat", "18g saturates", "55g carbs", "4g sugars", "3g fibre", "32g protein", "1.5g salt"] },
    "Dinner/HoneyGarlicSalmon": { name: "Honey Garlic Salmon", imageUrl: "/Images/HoneyGarlicSalmon.jpg", isVegetarian: false, isVegan: false, ingredients: ["Honey", "Soy sauce", "White vinegar", "Garlic", "Salmon fillets", "Olive oil", "Salt", "Pepper", "Sesame seeds", "Chives/shallots"], nutrients: ["420 kcal", "21g fat", "4g saturates", "22g carbs", "20g sugars", "0g fibre", "35g protein", "1.7g salt"] },
    "Dinner/CreamyMashedPotato": { name: "Creamy Mashed Potato", imageUrl: "/Images/CreamyMashedPotato.jpg", isVegetarian: true, isVegan: false, ingredients: ["Potatoes", "Salt", "Unsalted butter", "Milk", "Chives or parsley"], nutrients: ["210 kcal", "8g fat", "5g saturates", "32g carbs", "2g sugars", "3g fibre", "4g protein", "0.7g salt"] },
    "Dinner/CrunchyGarlicChicken": { name: "Crunchy Garlic Chicken", imageUrl: "/Images/CrunchyGarlicChicken.jpg", isVegetarian: false, isVegan: false, ingredients: ["Parmesan", "Mayonnaise", "Garlic & herb seasoning", "Panko breadcrumbs", "Chicken breasts", "Lemon", "Chives", "Roasted potatoes", "Tomatoes"], nutrients: ["520 kcal", "28g fat", "6g saturates", "20g carbs", "2g sugars", "1g fibre", "45g protein", "1.6g salt"] },
    "Dinner/RoastedGarlic": { name: "Roasted Garlic", imageUrl: "/Images/RoastedGarlic.jpg", isVegetarian: true, isVegan: true, ingredients: ["Garlic", "Olive oil"], nutrients: ["60 kcal", "4g fat", "0.5g saturates", "6g carbs", "1g sugars", "0.5g fibre", "1g protein", "0g salt"] },
    "Dinner/PanFriedSeaBass": { name: "Pan Fried Sea Bass with Lemon Garlic Herb Sauce", imageUrl: "/Images/PanFriedSeaBass.jpg", isVegetarian: false, isVegan: false, ingredients: ["Butter", "Olive oil", "Sea bass", "Flour", "Salt", "Black pepper", "Garlic", "White wine", "Chicken stock", "Lemon", "Oregano", "Thyme", "Parsley"], nutrients: ["318 kcal", "18g fat", "8g saturates", "6g carbs", "0g sugars", "0g fibre", "32g protein", "0.8g salt"] },
    "Dinner/PotatoesAuGratin": { name: "Potatoes au Gratin (Dauphinoise)", imageUrl: "/Images/PotatoesAuGratin.jpg", isVegetarian: true, isVegan: false, ingredients: ["Cream", "Garlic", "Butter", "Potatoes", "Salt", "Black pepper", "Gruyère cheese", "Thyme"], nutrients: ["390 kcal", "26g fat", "16g saturates", "28g carbs", "2g sugars", "3g fibre", "11g protein", "0.9g salt"] },
    "Dinner/SinigangNaBaboy": { name: "Sinigang na Baboy", imageUrl: "/Images/SinigangNaBaboy.jpg", isVegetarian: false, isVegan: false, ingredients: ["Pork spare ribs", "Water", "Tomatoes", "Onion", "Fish sauce", "Gabi (taro)", "Radish", "Finger chilies", "Long beans", "Eggplant", "Okra", "Tamarind", "Salt", "Pepper", "Bok choy"], nutrients: ["320 kcal", "20g fat", "6g saturates", "15g carbs", "5g sugars", "4g fibre", "22g protein", "1.5g salt"] },

}
    
