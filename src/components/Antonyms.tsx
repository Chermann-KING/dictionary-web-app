import React from "react";

interface AntonymsProps {
  antonyms: string[];
}

const Antonyms: React.FC<AntonymsProps> = ({ antonyms }) => {
  if (!antonyms || antonyms.length === 0) return null;

  return (
    <div className="mt-4 flex gap-4">
      <h4 className="text-heading-s text-light-1">Antonyms</h4>
      <ul className="list-none flex flex-wrap gap-2 text-heading-s font-bold">
        {antonyms.map((antonym, index) => (
          <li key={index} className="text-accent-purple cursor-pointer">
            <button>{antonym}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Antonyms;
