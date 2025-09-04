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
    "Lunch/ChickenSalad": { name: "Chicken Salad", imageUrl: "/Images/default-recipe.jpg", isVegetarian: false, isVegan: false, ingredients: ["chicken breast", "mayonnaise", "celery", "grapes", "lettuce"] },

    "Dinner": { name: "Dinner", imageUrl: "/Images/default-recipe.jpg", isVegetarian: false, isVegan: false, ingredients: [] },
    "Dinner/Bibimbap": { name: "Bibimbap", imageUrl: "/Images/Bibimbap.jpg", isVegetarian: false, isVegan: false, ingredients: ["beef strips", "soy sauce", "sesame oil", "brown sugar", "minced garlic", "spinach", "bean sprouts", "shiitake mushrooms", "carrots", "sea salt", "steamed rice", "eggs", "vegetable oil", "gochujang", "sugar", "water", "sesame seeds", "vinegar"] },
    "Dinner/KoreanSpinach": { name: "Korean Spinach", imageUrl: "/Images/KoreanSpinach.jpg", isVegetarian: true, isVegan: true, ingredients: ["spinach", "garlic", "soy sauce", "sesame oil", "sesame seeds"] },
    "Dinner/KoreanBeanSprouts": { name: "Korean Bean Sprouts", imageUrl: "/Images/KoreanBeanSprouts.jpg", isVegetarian: true, isVegan: true, ingredients: ["bean sprouts", "garlic", "soy sauce", "sesame oil", "green onion"] },
    "Dinner/BeefGuinnessStew": { name: "Beef & Guinness Stew with Champ Potato", imageUrl: "/Images/BeefGuinnessStew.jpg", isVegetarian: false, isVegan: false, ingredients: ["diced beef", "Guinnesss Foreign Extra Stout", "medium onion", "large carrot", "large celary", "large parsnip", "thick beef stock", "sprigs of fresh thyme & rosemary", "champ potato"] },
    "Dinner/LighterFishPie": {name: "Lighter Fish Pie",  imageUrl: "/Images/LighterFishPie.jpg",  isVegetarian: false,  isVegan: false,  ingredients: [    "olive oil",    "medium leeks",    "mixed fish",    "skimmed milk",    "bay leaf",    "plain flour",    "rye or wholemeal bread",    "rolled oats",    "parmesan",    "broad bean, edamame bean & pea mix",    "lemon wedges"  ]},

}
    
