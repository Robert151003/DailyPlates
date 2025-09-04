import { useTheme } from "next-themes";
import React from "react";

interface MethodStep {
  step: number;
  instruction: React.ReactNode;
}

interface MethodProps {
  steps: MethodStep[];
  headerNote?: string;
  footerNote?: string;
}

const Method: React.FC<MethodProps> = ({ steps, headerNote, footerNote }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`max-w-md mx-auto border rounded-2xl shadow-sm p-4 ${
        theme === "light" ? "bg-light-1" : "bg-dark-1"
      }`}
    >
      {/* Card Title */}
      <h2
        className={`text-xl font-bold mb-4 text-center ${
          theme === "light" ? "text-gray-700" : "text-white"
        }`}
      >
        Method
      </h2>

      {/* Header note */}
      {headerNote && (
        <p
          className={`text-sm mb-3 text-center ${
            theme === "light" ? "text-gray-500" : "text-gray-300"
          }`}
        >
          {headerNote}
        </p>
      )}

        <hr
            className={`my-2 border-t ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
            }`}
        />

      {/* Method steps with divider */}
      <ol className="list-decimal list-inside">
        {steps.map(({ step, instruction }, index) => (
          <li key={step} className={`text-${theme === "light" ? "gray-700" : "gray-200"} py-2`}>
            {instruction}
            {index < steps.length - 1 && (
              <hr
                className={`my-2 border-t ${
                  theme === "light" ? "border-gray-200" : "border-gray-600"
                }`}
              />
            )}
          </li>
        ))}
      </ol>

        <hr
            className={`my-2 border-t ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
            }`}
        />

      {/* Footer note */}
      {footerNote && (
        <p
          className={`text-sm mt-4 text-center ${
            theme === "light" ? "text-gray-500" : "text-gray-300"
          }`}
        >
          {footerNote}
        </p>
      )}
    </section>
  );
};

export default Method;
