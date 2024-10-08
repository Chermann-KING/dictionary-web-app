import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import type { Meaning } from "../../types";

const Meaning: React.FC<Meaning> = ({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}) => (
  <div className="mb-4">
    {/* partOfSpeech */}
    <div className="mt-5 flex items-center gap-4">
      <h2 className="italic text-heading-m">{partOfSpeech}</h2>
      <div className="mt-[5px] w-full h-[1px] bg-light-4 dark:bg-dark-3"></div>
    </div>
    {/* meaning */}
    <div className="mt-5">
      <h3 className="mb-4 text-heading-s text-light-1">Meaning</h3>
      <ul className="pl-10 list-disc marker:text-accent-purple flex flex-col gap-4">
        {definitions.map((def, idx) => (
          <li key={idx} className="mb-2 pl-2">
            <p>{def.definition}</p>
            {def.example && (
              <p className="text-gray-500">&quot;{def.example}&quot;</p>
            )}
          </li>
        ))}
      </ul>
    </div>
    {synonyms && synonyms.length > 0 && <Synonyms synonyms={synonyms} />}
    {antonyms && antonyms.length > 0 && <Antonyms antonyms={antonyms} />}
  </div>
);

export default Meaning;
