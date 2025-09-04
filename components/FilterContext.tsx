'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  showVegetarian: boolean;
  showVegan: boolean;
  toggleVegetarian: () => void;
  toggleVegan: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showVegan, setShowVegan] = useState(false);

  const toggleVegetarian = () => {
    setShowVegetarian((prev) => !prev);
  };

  const toggleVegan = () => {
    setShowVegan((prev) => !prev);
  };

  return (
    <FilterContext.Provider
      value={{
        showVegetarian,
        showVegan,
        toggleVegetarian,
        toggleVegan,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
