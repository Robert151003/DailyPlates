'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { pageList } from '@/constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useFilter } from '@/components/FilterContext';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const { theme } = useTheme();
  const { showVegetarian, showVegan } = useFilter();

  console.log('showVegetarian:', showVegetarian);
  console.log('showVegan:', showVegan);

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Search Results', href: `/search?query=${searchQuery}` },
  ];

  const filteredRecipes = Object.entries(pageList).filter(([key, recipe]) =>
    !["Breakfast", "Lunch", "Dinner"].includes(key) &&
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let filteredAndCategorizedRecipes = filteredRecipes;

  if (showVegetarian) {
    filteredAndCategorizedRecipes = filteredAndCategorizedRecipes.filter(([, recipe]) => recipe.isVegetarian);
  }

  if (showVegan) {
    filteredAndCategorizedRecipes = filteredAndCategorizedRecipes.filter(([, recipe]) => recipe.isVegan);
  }

  console.log('Filtered Recipes Count:', filteredAndCategorizedRecipes.length);

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

      {filteredAndCategorizedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndCategorizedRecipes.map(([key, recipe]) => (
            <div key={key} className={`rounded-xl shadow-lg overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
              <a href={`/${key}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    {recipe.name}
                  </h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No recipes found for &quot;{searchQuery}&quot;. Adjust your filters or search term.</p>
      )}
    </section>
  );
};

export default SearchPage;
