import { useState, useRef, useEffect } from "react";
import ArrowDownIcon from "@/images/icon-arrow-down.svg";
import { FontOption, useFont } from "@/context/FontContext";

/**
 * Composant `FontSelector` permettant de choisir la police d'écriture de l'application.
 * Ce menu est accessible au clavier et à la souris, avec une animation à l'ouverture et à la fermeture.
 *
 * @returns {JSX.Element} Un dropdown avec des options de polices pour la sélection de style.
 */
const FontSelector = (): JSX.Element => {
  const { font, setFont } = useFont(); // Accède au contexte de la police actuelle et à la fonction pour la modifier
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du menu
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null); // Index de l'option actuellement focusée
  const dropdownRef = useRef<HTMLDivElement>(null); // Référence pour le container dropdown
  const buttonRef = useRef<HTMLButtonElement>(null); // Référence pour le bouton d'ouverture du menu
  const menuItemsRef = useRef<Array<HTMLButtonElement | null>>([]); // Références des boutons de menu

  // Liste des polices disponibles
  const fonts: { label: string; value: FontOption }[] = [
    { label: "Sans Serif", value: "sans-serif" },
    { label: "Serif", value: "serif" },
    { label: "Mono", value: "monospace" },
  ];

  /**
   * Ouvre ou ferme le menu déroulant et met à jour l'index focalisé
   */
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    // Place le focus sur la police actuelle lorsqu'on ouvre le menu
    setFocusedIndex(fonts.findIndex((f) => f.value === font));
  };

  /**
   * Gère la fermeture du menu lorsqu'un clic est effectué à l'extérieur
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Ferme le menu si on clique à l'extérieur
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /**
   * Gestion du clavier pour naviguer dans le menu
   * - Flèche bas : passe à l'élément suivant
   * - Flèche haut : passe à l'élément précédent
   * - Entrée/Barre d'espace : sélectionne l'élément actuel
   * - Échap : ferme le menu
   */
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev === fonts.length - 1 ? 0 : prev + 1
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prev) =>
        prev === null || prev === 0 ? fonts.length - 1 : prev - 1
      );
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (focusedIndex !== null) {
        setFont(fonts[focusedIndex].value);
        setIsOpen(false);
      }
    } else if (event.key === "Escape") {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  /**
   * Positionne le focus sur l'option actuellement sélectionnée ou la première option
   * lorsque le menu s'ouvre.
   */
  useEffect(() => {
    if (isOpen && focusedIndex !== null && menuItemsRef.current[focusedIndex]) {
      menuItemsRef.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="font-selector-list"
        className="flex items-center gap-2 text-[1.125rem] font-bold text-dark-1 dark:text-light-4 focus:ring-1 focus:ring-accent-purple focus:ring-offset-1 focus:ring-offset-transparent focus:outline-none rounded-2xl px-2"
      >
        <span>
          {fonts.find((f) => f.value === font)?.label || "Sans Serif"}
        </span>
        <ArrowDownIcon aria-hidden="true" />
      </button>

      {isOpen && (
        <ul
          id="font-selector-list"
          role="menu"
          aria-hidden={!isOpen}
          className={`z-50 absolute right-0 mt-2 min-w-[183px] bg-white dark:bg-dark-2 shadow-light-mode dark:shadow-dark-mode rounded-2xl p-5 transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
          onKeyDown={handleKeyDown}
        >
          {fonts.map(({ label, value }, index) => (
            <li key={value} role="none">
              <button
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                onClick={() => {
                  setFont(value);
                  setIsOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left font-bold text-[1.125rem] focus:outline-none ${
                  focusedIndex === index
                    ? "text-accent-purple"
                    : "text-dark-1 dark:text-light-4"
                } hover:text-accent-purple dark:hover:text-accent-purple`}
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontSelector;
