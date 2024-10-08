"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Word from "@/components/Word";
import Meanings from "@/components/Meanings";
import SourceLink from "@/components/SourceLink";
import NotFound from "@/components/NotFound";
import { Phonetic, SearchResult } from "../../types";
import { SearchProvider, useSearch } from "@/context/SearchContext";

function Home() {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<{
    title: string;
    message: string;
    resolution: string;
  } | null>(null);
  const { searchTerm, setSearchTerm } = useSearch();

  useEffect(() => {
    if (searchTerm === "") {
      // Réinitialiser les résultats de recherche si le champ est vide
      setSearchResult(null);
      setAudioUrl(null);
    } else if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = async (word: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();

      if (data.title === "No Definitions Found") {
        setSearchResult(null);
        setAudioUrl(null);
        setNotFound({
          title: data.title,
          message: data.message,
          resolution: data.resolution,
        });
      } else {
        setSearchResult(data[0]);
        setAudioUrl(
          data[0]?.phonetics.find((phonetic: Phonetic) => phonetic.audio)
            ?.audio || null
        );
        setNotFound(null);
      }
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
      <SearchBar onSearch={setSearchTerm} initialInput={searchTerm || ""} />
      {notFound ? (
        <NotFound
          title={notFound.title}
          message={notFound.message}
          resolution={notFound.resolution}
        />
      ) : (
        searchResult && (
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
        )
      )}
    </div>
  );
}

export default function Page() {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
}
