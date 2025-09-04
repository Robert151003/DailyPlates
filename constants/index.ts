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
    "Dinner/Bibimbap": { name: "Bibimbap", imageUrl: "/Images/Bibimbap.jpg", isVegetarian: false, isVegan: false, ingredients: ["rice", "beef", "spinach", "carrots", "zucchini", "egg", "gochujang"] },
    "Dinner/KoreanSpinach": { name: "Korean Spinach", imageUrl: "/Images/KoreanSpinach.jpg", isVegetarian: true, isVegan: true, ingredients: ["spinach", "garlic", "soy sauce", "sesame oil", "sesame seeds"] },
    "Dinner/KoreanBeanSprouts": { name: "Korean Bean Sprouts", imageUrl: "/Images/KoreanBeanSprouts.jpg", isVegetarian: true, isVegan: true, ingredients: ["bean sprouts", "garlic", "soy sauce", "sesame oil", "green onion"] },
}
    
