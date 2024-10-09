"use client";

import React, { useState, useContext, createContext } from "react";
import localFont from "next/font/local";

// Importation des polices locales
const inter = localFont({
  src: "../app/fonts/inter/Inter-VariableFont_slnt,wght.ttf",
});
const lora = localFont({
  src: "../app/fonts/lora/Lora-VariableFont_wght.ttf",
});
const monospace = localFont({
  src: "../app/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf",
});

// Types des options de police disponibles
export type FontOption = "sans-serif" | "serif" | "monospace";

// Interface décrivant le contexte de police
interface FontContextType {
  font: FontOption;
  setFont: (font: FontOption) => void;
}

// Création du contexte de police
const FontContext = createContext<FontContextType | undefined>(undefined);

/**
 * Fournisseur de contexte de police.
 *
 * Ce composant enveloppe l'application ou des composants spécifiques pour leur fournir
 * l'accès à la police actuellement sélectionnée et une fonction pour la modifier.
 *
 * @param {React.ReactNode} children - Les composants enfants ayant besoin d'accéder au contexte.
 * @returns {JSX.Element} Le fournisseur `FontProvider` encapsulant les composants enfants.
 */
export const FontProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [font, setFont] = useState<FontOption>("sans-serif");

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <div
        className={`${
          font === "sans-serif"
            ? inter.className
            : font === "serif"
            ? lora.className
            : monospace.className
        }`}
      >
        {children}
      </div>
    </FontContext.Provider>
  );
};

/**
 * Hook personnalisé pour accéder au contexte de police.
 *
 * Permet aux composants enfants de récupérer et de modifier la police actuelle.
 * Lance une erreur si utilisé en dehors d'un `FontProvider`.
 *
 * @throws {Error} Si le hook est utilisé en dehors de `FontProvider`.
 * @returns {FontContextType} L'objet contenant la police actuelle et la fonction de mise à jour.
 */
export const useFont = (): FontContextType => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
