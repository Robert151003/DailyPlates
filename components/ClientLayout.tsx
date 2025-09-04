'use client'
import React from 'react';
import { FilterProvider } from "./FilterContext";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <FilterProvider>
      {children}
    </FilterProvider>
  );
};

export default ClientLayout;
