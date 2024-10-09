import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import type { Meaning } from "../../types";

/**
 * Composant `Meaning` représentant une section d'une définition de mot,
 * comprenant le type de discours, les définitions, les exemples, ainsi que les synonymes et antonymes.
 *
 * @param {Meaning} props - Propriétés du composant incluant :
 * - `partOfSpeech` : Le type de discours (ex : verbe, nom).
 * - `definitions` : Une liste d'objets de définition contenant la définition et un exemple optionnel.
 * - `synonyms` : Une liste de synonymes associés à cette définition.
 * - `antonyms` : Une liste d'antonymes associés à cette définition.
 *
 * @returns {JSX.Element} Une section de signification pour l'affichage.
 */
const Meaning: React.FC<Meaning> = ({
  partOfSpeech,
  definitions,
  synonyms,
  antonyms,
}) => (
  <div className="mb-4">
    {/* Affichage du type de discours */}
    <div className="mt-5 flex items-center gap-4">
      <h2 className="italic text-heading-m">{partOfSpeech}</h2>
      <div className="mt-[5px] w-full h-[1px] bg-light-4 dark:bg-dark-3"></div>
    </div>

    {/* Affichage des définitions */}
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

    {/* Affichage des synonymes */}
    {synonyms && synonyms.length > 0 && <Synonyms synonyms={synonyms} />}

    {/* Affichage des antonymes */}
    {antonyms && antonyms.length > 0 && <Antonyms antonyms={antonyms} />}
  </div>
);

export default Meaning;
