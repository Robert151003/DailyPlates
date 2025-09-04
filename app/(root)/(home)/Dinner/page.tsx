'use client'

import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react'
import { Breadcrumb } from '@/components/breadcrumb';
import Filter from '@/components/Filter';
import SubSection from '@/components/SubSection';
import { useTheme } from 'next-themes';
import { pageList } from '@/constants';
import { useFilter } from '@/components/FilterContext';


const Page = () => {
  const { theme } = useTheme()
  const { showVegetarian, showVegan } = useFilter();

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Dinner', href: '/Dinner' },
  ];

  const allDinnerRecipes = Object.entries(pageList).filter(([key]) =>
    key.startsWith("Dinner/")
  );

  let filteredAndCategorizedDinnerRecipes = allDinnerRecipes;

  if (showVegetarian) {
    filteredAndCategorizedDinnerRecipes = filteredAndCategorizedDinnerRecipes.filter(([, recipe]) => recipe.isVegetarian);
  }

  if (showVegan) {
    filteredAndCategorizedDinnerRecipes = filteredAndCategorizedDinnerRecipes.filter(([, recipe]) => recipe.isVegan);
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
        Dinner Recipes
      </h1>
      <Filter />
      <div
        id='container'
        className={`grid grid-cols-3 gap-4`}
        style={{
          gridTemplateColumns: 'repeat(3, 200px)',
        }}
      >
        {filteredAndCategorizedDinnerRecipes.length > 0 ? (
          filteredAndCategorizedDinnerRecipes.map(([key, recipe]) => (
            
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
          <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>No dinner recipes found with the current filters.</p>
        )}
      </div>
    </section>
  )
}

export default Page