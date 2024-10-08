import React from "react";

interface SynonymsProps {
  synonyms: string[];
}

const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
  if (!synonyms || synonyms.length === 0) return null;

  return (
    <div className="mt-4 flex gap-4">
      <h4 className="text-heading-s text-light-1">Synonyms</h4>
      <ul className="list-none flex flex-wrap gap-2 text-heading-s font-bold">
        {synonyms.map((synonym, index) => (
          <li key={index} className="text-accent-purple cursor-pointer">
            <button>{synonym}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Synonyms;
