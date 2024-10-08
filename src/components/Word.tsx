import React from "react";
import PlayIcon from "@/images/icon-play.svg";

interface Phonetic {
  text: string;
  audio: string;
}

interface WordProps {
  word: string;
  phonetics: Phonetic[];
  onPlayAudio: () => void;
  audioUrl: string | null;
}

const Word: React.FC<WordProps> = ({
  word,
  phonetics,
  onPlayAudio,
  audioUrl,
}) => {
  return (
    <div className="mb-6 self-stretch flex justify-between items-center gap-2  ">
      {/* word */}
      <div className="self-start flex flex-col">
        <h1 className="text-heading-l font-semibold">{word}</h1>
        <div className="flex gap-1 text-heading-m text-accent-purple">
          {phonetics.map((phonetic, index) => (
            <span key={index} className="">
              {phonetic.text}
            </span>
          ))}
        </div>
      </div>
      {/* audio */}
      {audioUrl && (
        <button
          onClick={onPlayAudio}
          className="rounded-full hover:bg-accent-purple transition-colors duration-300"
          disabled={!audioUrl}
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
