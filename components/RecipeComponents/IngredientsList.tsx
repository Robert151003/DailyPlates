import { useTheme } from "next-themes";
import { useState } from "react";

type Ingredient = {
  amount: string;
  item: string;
};

type Nutrient = {
  name: string;
  value: string;
};

type IngredientsListProps = {
  ingredients: Ingredient[];
  nutrients: Nutrient[];
  ingredientsHeaderNote?: string;
  ingredientsFooterNote?: string;
  nutrientsFooterNote?: string;
};

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  nutrients,
  ingredientsHeaderNote,
  ingredientsFooterNote,
  nutrientsFooterNote,
}) => {
  const [activeTab, setActiveTab] = useState<"ingredients" | "nutrients">(
    "ingredients"
  );

  const { theme } = useTheme()

  return (
    <section className={`bg-${theme === 'light' ? 'light-1' : 'dark-1'} max-w-md mx-auto border rounded-2xl shadow-sm p-4`}>
      {/* Tabs */}
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setActiveTab("ingredients")}
          className={`px-4 py-2 rounded-lg transition ${
            activeTab === "ingredients"
              ? "bg-blue-500 text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Ingredients
        </button>
        <button
          onClick={() => setActiveTab("nutrients")}
          className={`px-4 py-2 rounded-lg transition ${
            activeTab === "nutrients"
              ? "bg-blue-500 text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Nutrients
        </button>
      </div>

      {/* Ingredients Tab */}
      {activeTab === "ingredients" && (
        <>
          {ingredientsHeaderNote && (
            <p className={`text-sm text-${theme === 'light' ? 'grey-500' : 'white'} mb-3 text-center`}>
              {ingredientsHeaderNote}
            </p>
          )}

          <ul className="list-disc list-inside space-y-1">
            {ingredients.map(({ amount, item }, index) => (
              <li key={index} className={`text-${theme === 'light' ? 'grey-700' : 'grey-50'}`}>
                {amount && <span className="font-semibold">{amount} </span>}
                {item}
              </li>
            ))}
          </ul>

          {ingredientsFooterNote && (
            <p className={`text-sm text-${theme === 'light' ? 'grey-500' : 'white'} mt-4 text-center`}>
              {ingredientsFooterNote}
            </p>
          )}
        </>
      )}

      {/* Nutrients Tab */}
      {activeTab === "nutrients" && (
        <>
          <ul className="divide-y divide-gray-200">
            {nutrients.map(({ name, value }, index) => (
              <li key={index} className={`py-1 flex justify-between text-${theme === 'light' ? 'grey-700' : 'grey-50'}`}>
                <span>{name}</span>
                <span className="font-semibold">{value}</span>
              </li>
            ))}
          </ul>

          {nutrientsFooterNote && (
            <p className={`text-sm text-${theme === 'light' ? 'grey-500' : 'grey-50'} mt-4 text-center`}>
              {nutrientsFooterNote}
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default IngredientsList;
