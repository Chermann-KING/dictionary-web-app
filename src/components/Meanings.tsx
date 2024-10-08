import React from "react";
import Meaning from "./Meaning";
import { Definition } from "../../types";

interface MeaningType {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface MeaningsProps {
  meanings: MeaningType[];
}

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
