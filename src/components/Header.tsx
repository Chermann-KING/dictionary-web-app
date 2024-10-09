import Logo from "@/images/logo.svg";
import FontSelector from "./FontSelector";
import ThemeToggle from "./ThemeToggle";

/**
 * Composant `Header` représentant l'en-tête principal de l'application.
 *
 * Il inclut :
 * - Le logo de l'application (à gauche).
 * - Un sélecteur de police et un bouton de basculement de thème (à droite).
 *
 * Ce composant permet aux utilisateurs de personnaliser l'apparence de l'application
 * via les options de police et de thème tout en restant fonctionnellement minimaliste.
 *
 * @returns {JSX.Element} L'en-tête de l'application.
 */
const Header = () => {
  return (
    <header className="h-9 flex justify-between items-center">
      {/* LEFT: Logo */}
      <Logo />
      {/* RIGHT: FontSelector, Divider, and ThemeToggle */}
      <div className="h-full flex justify-end items-center gap-5">
        <FontSelector />
        <span className="h-full border-l border-light-2"></span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
