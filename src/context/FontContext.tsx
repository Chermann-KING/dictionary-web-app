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

// Types des polices disponibles
export type FontOption = "sans-serif" | "serif" | "monospace";

// Contexte de police
const FontContext = createContext<{
  font: FontOption;
  setFont: (font: FontOption) => void;
}>({
  font: "sans-serif",
  setFont: () => {},
});

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

// Utilisation du Contexte
export const useFont = () => useContext(FontContext);
