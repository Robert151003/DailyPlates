'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Input } from './ui/input';
import { useTheme } from 'next-themes';
import { pageList } from '@/constants';
import { useRouter } from 'next/navigation';


const SearchBar = () => {
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<[string, { name: string; imageUrl: string; ingredients: string[] }][]>([]);
  const dropdownListRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsTyping(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, inputRef]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        const filtered = Object.entries(pageList).filter(([key, recipe]) =>
          !["Breakfast", "Lunch", "Dinner"].includes(key) &&
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 5);
        setSuggestions(filtered);
        setIsTyping(true); // Show dropdown if there's a search term
      } else {
        setSuggestions([]);
        setIsTyping(false); // Hide dropdown if search term is empty
      }
    }, 300); // Debounce for 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);


  const searchFunc = () => {
    const inputValue = inputRef.current?.value;
    console.log(`Searching for: ${inputValue}`);

    if (inputValue) {
      router.push(`/search?query=${inputValue}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    setIsTyping(!!inputValue); // Show dropdown only if there's input
  };

  return (
    <div className={`flex justify-center mx-auto ${theme === 'light' ? 'bg-light-2' : 'bg-dark-1'}`}>
      <Button type='submit' onClick={searchFunc}>
        <Image src={`${theme === 'light' ? '/icons/search-dark.svg' : '/icons/search.svg'}`} alt='search' width={20} height={20}/>
      </Button>
      <Input
        onChange={handleInputChange}
        id='SearchBar'
        type='text'
        placeholder='Search'
        className={`w-full max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[264px] ${theme === 'light' ? 'bg-light-2' : 'bg-dark-1'} border-none`}
        ref={inputRef}
      />
      {isTyping && (
        <div
          className={`absolute ${theme === 'light' ? 'bg-light-2' : 'bg-dark-1'} shadow-md p-2 w-full max-w-[264px] rounded`}
          style={{ top: '60px' }}
          ref={dropdownRef}
          // onClick={handleDropdownClick} // Removed to allow clicks on individual suggestions
        >
          <ul id='dropDownList' ref={dropdownListRef}>
            {suggestions.map(([key, recipe]) => (
              <li key={key} onClick={() => {
                router.push(`/${key}`);
                setIsTyping(false);
              }} className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
                {recipe.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;