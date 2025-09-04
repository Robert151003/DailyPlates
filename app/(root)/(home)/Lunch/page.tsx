'use client'

import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react'
import { Breadcrumb } from '@/components/breadcrumb';
import Filter from '@/components/Filter';
import { useTheme } from 'next-themes';
import SubSection from '@/components/SubSection';
import { pageList } from '@/constants';
import { useFilter } from '@/components/FilterContext';

const Page = () => {
  const { theme } = useTheme()
  const { showVegetarian, showVegan } = useFilter();

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Lunch', href: '/Lunch' },
  ];

  const allLunchRecipes = Object.entries(pageList).filter(([key]) =>
    key.startsWith("Lunch/")
  );

  let filteredAndCategorizedLunchRecipes = allLunchRecipes;

  if (showVegetarian) {
    filteredAndCategorizedLunchRecipes = filteredAndCategorizedLunchRecipes.filter(([, recipe]) => recipe.isVegetarian);
  }

  if (showVegan) {
    filteredAndCategorizedLunchRecipes = filteredAndCategorizedLunchRecipes.filter(([, recipe]) => recipe.isVegan);
  }

  return (
    <section
      className={`flex size-full flex-col gap-10`}
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
        Lunch Recipes
      </h1>
      <Filter />
      <div
        id='container'
        className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6`}
      >
        {filteredAndCategorizedLunchRecipes.length > 0 ? (
          filteredAndCategorizedLunchRecipes.map(([key, recipe]) => (
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
          <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No lunch recipes found with the current filters.</p>
        )}
      </div>
    </section>
  )
}

export default Page