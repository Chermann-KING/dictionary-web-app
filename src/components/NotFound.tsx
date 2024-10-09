import React from "react";

/**
 * Interface des propriétés pour le composant `NotFound`.
 * @property {string} title - Le titre principal du message d'erreur.
 * @property {string} message - Le message d'erreur affiché en mode sombre.
 * @property {string} resolution - La suggestion de résolution, affichée en mode sombre.
 */
interface NotFoundProps {
  title: string;
  message: string;
  resolution: string;
}

/**
 * Composant `NotFound` affichant un message d'erreur lorsque la recherche n'a pas trouvé de résultats.
 * Ce composant adapte son affichage pour le mode clair et le mode sombre.
 *
 * - En mode clair, une croix ✖ est affichée pour signaler l'absence de résultat.
 * - En mode sombre, le `message` et la `resolution` sont affichés pour donner plus de détails.
 *
 * @param {NotFoundProps} props - Les propriétés passées au composant `NotFound`.
 * @returns {JSX.Element} Un message d'erreur visuel s'adaptant au thème.
 */
const NotFound: React.FC<NotFoundProps> = ({ title, message, resolution }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 mt-[80px]">
      <span className="text-heading-l">😕</span>
      <h3 className="text-heading-s font-bold text-dark-3 dark:text-light-4">
        {title}
      </h3>
      {/* Affichage pour le mode clair */}
      <span className="dark:hidden text-body-m text-light-1">✖</span>
      {/* Affichage pour le mode sombre */}
      <p className="hidden dark:block text-body-m text-light-1">
        {message} {resolution}
      </p>
    </div>
  );
};

export default NotFound;
