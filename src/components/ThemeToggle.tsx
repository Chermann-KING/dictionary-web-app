"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import MoonIcon from "@/images/icon-moon.svg";

/**
 * Composant `ThemeToggle` permettant de basculer entre les thèmes clair et sombre.
 *
 * Ce composant utilise `next-themes` pour détecter le thème du système et permet à
 * l'utilisateur de basculer manuellement entre les thèmes. L'icône de lune (SVG)
 * change de couleur en fonction du thème actuel.
 *
 * @returns {JSX.Element} Le bouton de bascule de thème avec une icône.
 */
const ThemeToggle = (): JSX.Element | null => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Monte le composant pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Détermine le thème actuel : "dark", "light" ou basé sur le système
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center space-x-4">
      {/* Bouton pour basculer entre les thèmes */}
      <button
        id="theme-toggle"
        type="button"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
          currentTheme === "dark" ? "bg-accent-purple" : "bg-light-1"
        }`}
        aria-label="Toggle theme"
      >
        {/* Indicateur visuel de bascule */}
        <div
          className={`circle absolute top-0.5 left-0.5 w-5 h-5 bg-light-4 rounded-full transition-transform ${
            currentTheme === "dark" ? "transform translate-x-6" : ""
          }`}
        />
      </button>

      {/* Icône de lune pour indiquer le mode sombre */}
      <MoonIcon
        className={`transition-colors ${
          currentTheme === "dark" ? "text-accent-purple" : "text-light-1"
        }`}
        aria-hidden="true"
      />
    </div>
  );
};

export default ThemeToggle;
