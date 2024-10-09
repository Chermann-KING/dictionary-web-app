import React, { createContext, useContext, useState } from "react";

/**
 * Type représentant le contexte de recherche.
 * Contient le terme de recherche actuel et une fonction pour le mettre à jour.
 */
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// Création du contexte avec une valeur initiale indéfinie pour le rendre optionnel
const SearchContext = createContext<SearchContextType | undefined>(undefined);

/**
 * Fournisseur de contexte de recherche.
 *
 * Ce composant encapsule d'autres composants pour leur fournir un accès
 * au terme de recherche et à la fonction pour le modifier.
 *
 * @param {React.ReactNode} children - Composants enfants qui auront accès au contexte.
 * @returns {JSX.Element} Le composant `SearchProvider` avec ses enfants inclus.
 */
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("keyboard");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

/**
 * Hook personnalisé pour utiliser le contexte de recherche.
 *
 * Permet à n'importe quel composant enfant d'accéder au terme de recherche et de le mettre à jour.
 * Lance une erreur si utilisé en dehors du `SearchProvider`.
 *
 * @throws {Error} Si le hook est utilisé en dehors de `SearchProvider`.
 * @returns {SearchContextType} Le contexte de recherche.
 */
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
