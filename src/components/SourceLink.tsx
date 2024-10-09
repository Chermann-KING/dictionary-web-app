import React from "react";
import NewWindowIcon from "@/images/icon-new-window.svg";
import Link from "next/link";

/**
 * Propriétés du composant `SourceLink`.
 * @property {string[]} sourceUrls - Tableau d'URL des sources.
 * @property {Object} license - Objet contenant les informations sur la licence.
 * @property {string} license.name - Nom de la licence.
 * @property {string} license.url - URL de la licence.
 */
interface SourceLinkProps {
  sourceUrls: string[];
  license: { name: string; url: string };
}

/**
 * Composant `SourceLink` affichant les liens vers les sources et les informations sur la licence.
 * Ce composant permet d'afficher une liste de liens de sources, chacun ouvrant dans une nouvelle fenêtre.
 *
 * @param {SourceLinkProps} props - Propriétés du composant `SourceLink`.
 * @returns {JSX.Element} Liens des sources avec icône de nouvelle fenêtre.
 */
const SourceLink: React.FC<SourceLinkProps> = ({ sourceUrls }) => {
  return (
    <div className="mt-6 flex text-body-s">
      <p className="underline mr-3 text-light-1">Source:</p>
      <div className="flex flex-wrap gap-1">
        {sourceUrls.map((url, index) => (
          <div key={index}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 underline flex items-center text-dark-3 dark:text-light-4 gap-2"
            >
              {url}
              <NewWindowIcon aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceLink;
