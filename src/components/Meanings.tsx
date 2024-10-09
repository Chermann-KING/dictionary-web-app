import React from "react";
import Meaning from "./Meaning";
import { Definition } from "../../types";

/**
 * Interface représentant un type de signification pour un mot,
 * incluant le type de discours, les définitions associées, les synonymes, et les antonymes.
 */
interface MeaningType {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

/**
 * Propriétés pour le composant `Meanings`.
 * @property {MeaningType[]} meanings - Une liste de significations pour un mot, incluant les définitions,
 * les synonymes et les antonymes.
 */
interface MeaningsProps {
  meanings: MeaningType[];
}

/**
 * Composant `Meanings` qui prend une liste de significations (`meanings`) et génère une liste de composants `Meaning`
 * pour chaque type de discours associé à un mot.
 *
 * @param {MeaningsProps} props - Les propriétés passées au composant `Meanings`.
 * @returns {JSX.Element} Une liste de composants `Meaning`, chacun représentant une section de signification du mot.
 */
const Meanings: React.FC<MeaningsProps> = ({ meanings }) => (
  <div>
    {meanings.map((meaning, index) => (
      <Meaning
        key={index}
        partOfSpeech={meaning.partOfSpeech}
        definitions={meaning.definitions}
        synonyms={meaning.synonyms}
        antonyms={meaning.antonyms}
      />
    ))}
  </div>
);

export default Meanings;
