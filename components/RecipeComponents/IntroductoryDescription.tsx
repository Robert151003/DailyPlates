import { useTheme } from 'next-themes';
import React from 'react';
import Image from 'next/image';

interface IntroductoryDescriptionProps {
  title: string;
  serves?: string;
  prepTime?: string;
  cookTime?: string;
  description: string;
  imageUrl: string;
  showVegetarian?: boolean;
  showVegan?: boolean;
  authorName?: string; // new
  authorUrl?: string; // new
}

const IntroductoryDescription: React.FC<IntroductoryDescriptionProps> = ({
  title,
  serves,
  prepTime,
  cookTime,
  description,
  imageUrl,
  showVegetarian = false,
  showVegan = false,
  authorName,
  authorUrl,
}) => {
  const { theme } = useTheme();

  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-8 px-6">
      {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
        <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="w-full max-w-md h-auto rounded-2xl shadow"
        />
        </div>


      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Title */}
        <h1
          className={`text-3xl font-bold mb-3 ${
            theme === 'light' ? 'text-gray-700' : 'text-white'
          }`}
        >
          {title}
        </h1>

        {/* Meta details */}
        <div
          className={`text-sm mb-4 flex flex-wrap gap-4 justify-center md:justify-start ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}
        >
          {serves && <span>Serves: {serves}</span>}
          {prepTime && <span>Prep: {prepTime}</span>}
          {cookTime && <span>Cook: {cookTime}</span>}
        </div>

        {/* Vegetarian/Vegan boxes */}
        {(showVegetarian || showVegan) && (
          <div className="flex gap-2 justify-center md:justify-start mb-4">
            {showVegetarian && (
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                Vegetarian
              </span>
            )}
            {showVegan && (
              <span className="px-2 py-1 text-xs font-semibold text-green-50 bg-green-600 rounded-full">
                Vegan
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p
          className={`leading-relaxed mb-4 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-200'
          }`}
        >
          {description}
        </p>

        {/* Author section */}
        {authorName && authorUrl && (
          <p
            className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            Recipe by:{' '}
            <a
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {authorName}
            </a>
          </p>
        )}
      </div>
    </section>
  );
};

export default IntroductoryDescription;
