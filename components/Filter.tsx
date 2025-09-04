import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilter } from './FilterContext';

const Filter = () => {
    const { theme } = useTheme();
    const { showVegetarian, showVegan, toggleVegetarian, toggleVegan } = useFilter();

    const handleChange = (value: string) => {
        if (value === "Alphabetical") {
            handleSortAsc();
        }
        else{
            handleSortDesc();
        }
    };

    const grabElements = () => {
        const subsections = document.querySelectorAll('[id="sub"]');
        const subsectionsArray = Array.from(subsections);
        return subsectionsArray;
    };

    const mapImageElements = (subsectionsArray: Element[]) => {
        return subsectionsArray.map((element) => {
            const imageElement = element.querySelector('img');
            const name = imageElement?.alt;
            return { element, name };
        });
    };

    const handleSortAsc = () => {

        const imageElements = mapImageElements(grabElements());
        
        const sortedArray = imageElements.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));

        changeContainer(sortedArray);
    };

    const handleSortDesc = () => {
        const imageElements = mapImageElements(grabElements());
        
        const sortedArray = imageElements.sort((b, a) => (a.name ?? '').localeCompare(b.name ?? ''));

        changeContainer(sortedArray);
    };

    const changeContainer = (sortedArray: { element: Element; name: string | undefined }[]) => {
        const container = document.getElementById('container'); // assume the container has an id of "container"
        if (container) {
        container.innerHTML = ''; // clear the container
        sortedArray.forEach((imageElement) => {
            container.appendChild(imageElement.element);
        });
        } else {
            return;
        }
    };

    return (
      <section className='flex gap-4'>
        <Image src={`/icons/${theme === 'light' ? 'filter-dark' : 'filter'}.svg`} alt='Filter' width={32} height={32}/>
        <Select onValueChange={handleChange}>
          <SelectTrigger className={`${theme === 'light' ? 'bg-light-1' : 'bg-dark-1'} w-[180px] border-none`}>
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent className={`${theme === 'light' ? 'bg-light-1' : 'bg-dark-1'} border-none`}>
            <SelectItem value="Alphabetical">Alphabetical &uarr;</SelectItem>
            <SelectItem value="AlphabeticalDown">Alphabetical &darr;</SelectItem>
          </SelectContent>
        </Select>

        <label className={`flex items-center space-x-2 cursor-pointer ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          <input
            type="checkbox"
            checked={showVegetarian}
            onChange={toggleVegetarian}
            className="form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out"
          />
          <span>Vegetarian</span>
        </label>

        <label className={`flex items-center space-x-2 cursor-pointer ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          <input
            type="checkbox"
            checked={showVegan}
            onChange={toggleVegan}
            className="form-checkbox h-5 w-5 text-green-600 transition duration-150 ease-in-out"
          />
          <span>Vegan</span>
        </label>
      </section>
    );
  };
export default Filter;