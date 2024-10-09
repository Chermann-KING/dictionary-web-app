import React from "react";
import { useSearch } from "@/context/SearchContext";

/**
 * Propriétés du composant `Antonyms`.
 * @property {string[]} antonyms - Tableau des antonymes à afficher.
 */
interface AntonymsProps {
  antonyms: string[];
}

/**
 * Composant `Antonyms` affichant une liste d'antonymes sous forme de boutons.
 * Chaque bouton permet de lancer une nouvelle recherche en cliquant sur l'antonyme correspondant.
 *
 * @param {AntonymsProps} props - Propriétés du composant `Antonyms`.
 * @returns {JSX.Element | null} Un élément contenant les antonymes ou `null` si aucun antonyme n'est fourni.
 */
const Antonyms: React.FC<AntonymsProps> = ({ antonyms }) => {
  const { setSearchTerm } = useSearch();

  // Vérifie si le tableau d'antonymes est vide ou nul
  if (!antonyms || antonyms.length === 0) return null;

  return (
    <div className="mt-4 flex gap-4">
      <h4 className="text-heading-s text-light-1">Antonyms</h4>
      <ul className="list-none flex flex-wrap gap-2 text-heading-s font-bold">
        {antonyms.map((antonym, index) => (
          <li key={index} className="text-accent-purple cursor-pointer">
            <button
              type="button"
              aria-label={`Search antonym definition for ${antonym}`}
              onClick={() => setSearchTerm(antonym)}
            >
              {antonym}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Antonyms;
