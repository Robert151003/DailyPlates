'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { pageList } from '@/constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';
import { useTheme } from 'next-themes';
import { useFilter } from '@/components/FilterContext';
import SubSection from '@/components/SubSection';

interface Recipe {
  name: string;
  imageUrl: string;
  isVegetarian: boolean;
  isVegan: boolean;
  ingredients: string[];
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const { theme } = useTheme();
  const { showVegetarian, showVegan } = useFilter();

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Search Results', href: `/search?query=${searchQuery}` },
  ];

  const allRecipes = Object.entries(pageList)
    .filter(([key]) => !["Breakfast", "Lunch", "Dinner"].includes(key))
    .map(([key, recipe]) => ({ ...recipe, route: key })) as (Recipe & { route: string })[];

  const lowerCaseSearchQuery = searchQuery.toLowerCase();

  const recipesByName = allRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(lowerCaseSearchQuery)
  );

  const recipesByIngredient = lowerCaseSearchQuery.length > 2 ? allRecipes.filter(recipe =>
    recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(lowerCaseSearchQuery)
    )
  ) : [];

  let filteredRecipesByName = recipesByName;
  let filteredRecipesByIngredient = recipesByIngredient;

  if (showVegetarian) {
    filteredRecipesByName = filteredRecipesByName.filter(recipe => recipe.isVegetarian);
    filteredRecipesByIngredient = filteredRecipesByIngredient.filter(recipe => recipe.isVegetarian);
  }

  if (showVegan) {
    filteredRecipesByName = filteredRecipesByName.filter(recipe => recipe.isVegan);
    filteredRecipesByIngredient = filteredRecipesByIngredient.filter(recipe => recipe.isVegan);
  }

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

      <h1 className={`text-3xl font-bold mb-3 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
        Search Results for &quot;{searchQuery}&quot;
      </h1>

      {/* Recipes by Name */}
      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>Recipes by Name</h2>
      {filteredRecipesByName.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {filteredRecipesByName.map((recipe) => (
            <div key={recipe.route}>
              <SubSection
                name={recipe.name}
                route={`/${recipe.route}`}
                classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
                image={recipe.imageUrl}
              />
            </div>
          ))}
        </div>
      ) : (searchQuery !== '') ? (
        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No recipes found by name for &quot;{searchQuery}&quot;.</p>
      ) : null}

      {/* Recipes by Ingredient */}
      <h2 className={`text-2xl font-semibold mt-8 mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>Recipes by Ingredient</h2>
      {filteredRecipesByIngredient.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {filteredRecipesByIngredient.map((recipe) => (
            <div key={recipe.route}>
              <SubSection
                name={recipe.name}
                route={`/${recipe.route}`}
                classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
                image={recipe.imageUrl}
              />
            </div>
          ))}
        </div>
      ) : (searchQuery !== '') ? (
        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No recipes found by ingredient for &quot;{searchQuery}&quot;.</p>
      ) : null}

      {(filteredRecipesByName.length === 0 && filteredRecipesByIngredient.length === 0 && searchQuery !== '') && (
        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No recipes found for &quot;{searchQuery}&quot;. Adjust your filters or search term.</p>
      )}

    </section>
  );
};

export default SearchPage;
