import React from "react";
import PlayIcon from "@/images/icon-play.svg";

/**
 * Représentation d'un objet phonétique contenant le texte et le lien audio.
 * @interface Phonetic
 * @property {string} text - Représentation textuelle de la phonétique.
 * @property {string} audio - URL du fichier audio associé à la phonétique.
 */
interface Phonetic {
  text: string;
  audio: string;
}

/**
 * Propriétés du composant `Word`.
 * @interface WordProps
 * @property {string} word - Le mot à afficher.
 * @property {Phonetic[]} phonetics - Tableau des phonétiques du mot.
 * @property {() => void} onPlayAudio - Fonction pour jouer l'audio phonétique.
 * @property {string | null} audioUrl - URL de l'audio à lire.
 */
interface WordProps {
  word: string;
  phonetics: Phonetic[];
  onPlayAudio: () => void;
  audioUrl: string | null;
}

/**
 * Composant `Word` pour afficher un mot et ses informations phonétiques.
 * Affiche également un bouton pour jouer l'audio de la phonétique si disponible.
 *
 * @param {WordProps} props - Propriétés pour le composant `Word`.
 * @returns {JSX.Element} L'élément JSX représentant le mot et ses détails.
 */
const Word: React.FC<WordProps> = ({
  word,
  phonetics,
  onPlayAudio,
  audioUrl,
}) => {
  return (
    <div className="mb-6 self-stretch flex justify-between items-center gap-2">
      {/* Affichage du mot */}
      <div className="self-start flex flex-col">
        <h1 className="text-[2rem] sm:text-heading-l font-semibold">{word}</h1>
        <div className="flex flex-wrap gap-1 text-body-m sm:text-heading-m  text-accent-purple">
          {phonetics.map((phonetic, index) => (
            <span key={index} className="">
              {phonetic.text}
            </span>
          ))}
        </div>
      </div>
      {/* Bouton de lecture de l'audio phonétique */}
      {audioUrl && (
        <button
          type="button"
          onClick={onPlayAudio}
          className="rounded-full hover:bg-accent-purple transition-colors duration-300"
          disabled={!audioUrl}
          aria-label="Play phonetic audio"
        >
          <PlayIcon
            className="text-accent-purple hover:text-white transition-colors duration-300"
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
};

export default Word;
