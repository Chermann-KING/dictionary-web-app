import React from "react";
import { useSearch } from "@/context/SearchContext";

/**
 * Propriétés du composant `Synonyms`.
 * @property {string[]} synonyms - Tableau des synonymes à afficher.
 */
interface SynonymsProps {
  synonyms: string[];
}

/**
 * Composant `Synonyms` affichant une liste de synonymes sous forme de boutons.
 * Chaque bouton permet de lancer une nouvelle recherche en cliquant sur le synonyme.
 *
 * @param {SynonymsProps} props - Propriétés du composant `Synonyms`.
 * @returns {JSX.Element | null} Un élément contenant les synonymes ou `null` si aucun synonyme n'est fourni.
 */
const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
  const { setSearchTerm } = useSearch();

  // Vérifie si le tableau de synonymes est vide ou nul
  if (!synonyms || synonyms.length === 0) return null;

  return (
    <div className="mt-4 flex gap-4">
      <h4 className="text-heading-s text-light-1">Synonyms</h4>
      <ul className="list-none flex flex-wrap gap-2 text-heading-s font-bold">
        {synonyms.map((synonym, index) => (
          <li key={index} className="text-accent-purple cursor-pointer">
            <button
              type="button"
              aria-label={`Search synonym definition for ${synonym}`}
              onClick={() => setSearchTerm(synonym)}
            >
              {synonym}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Synonyms;
