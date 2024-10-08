"use client";
import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Word from "@/components/Word";
import Meanings from "@/components/Meanings";
import SourceLink from "@/components/SourceLink";
import { Phonetic, SearchResult } from "../../types";

export default function Home() {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleSearch = async (word: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      setSearchResult(data[0]);
      const firstAudioUrl = data[0]?.phonetics.find(
        (phonetic: Phonetic) => phonetic.audio
      )?.audio;
      setAudioUrl(firstAudioUrl || null);
    } catch (error) {
      console.error("Error fetching word data:", error);
    }
  };

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <div className="flex flex-col gap-8 mx-auto py-10">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {searchResult && (
        <div>
          <Word
            word={searchResult.word}
            phonetics={searchResult.phonetics}
            onPlayAudio={playAudio}
            audioUrl={audioUrl}
          />
          <Meanings meanings={searchResult.meanings} />
          {searchResult.sourceUrls && (
            <SourceLink
              sourceUrls={searchResult.sourceUrls}
              license={searchResult.license}
            />
          )}
        </div>
      )}
    </div>
  );
}
