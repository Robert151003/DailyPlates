'use client'

import SubSection from '@/components/SubSection';
import React from 'react';
import { useTheme } from 'next-themes';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Breadcrumb } from '@/components/breadcrumb';
import Filter from '@/components/Filter';
import { pageList } from '@/constants';
import { useFilter } from '@/components/FilterContext';

const Page = () => {
  const { theme } = useTheme()
  const { showVegetarian, showVegan } = useFilter();

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Breakfast', href: '/Breakfast' },
  ];

  const allBreakfastRecipes = Object.entries(pageList).filter(([key]) =>
    key.startsWith("Breakfast/")
  );

  let filteredAndCategorizedBreakfastRecipes = allBreakfastRecipes;

  if (showVegetarian) {
    filteredAndCategorizedBreakfastRecipes = filteredAndCategorizedBreakfastRecipes.filter(([, recipe]) => recipe.isVegetarian);
  }

  if (showVegan) {
    filteredAndCategorizedBreakfastRecipes = filteredAndCategorizedBreakfastRecipes.filter(([, recipe]) => recipe.isVegan);
  }

  return (
    <section
      className={`flex flex-col gap-10 ml-0 pl-4`}
    >

      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <h1 className='text-3xl font-bold '>
        Breakfast Recipes
      </h1>
      <Filter />
      <div
        id='container'
        className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6`}
      >
        {filteredAndCategorizedBreakfastRecipes.length > 0 ? (
          filteredAndCategorizedBreakfastRecipes.map(([key, recipe]) => (
            <div id='sub' key={key}>
              <SubSection
                name={recipe.name}
                route={`/${key}`}
                classname={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} h-full w-full p-4`}
                image={recipe.imageUrl}
              />
            </div>
          ))
        ) : (
          <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No breakfast recipes found with the current filters.</p>
        )}
      </div>
    </section>
  )
}

export default Page