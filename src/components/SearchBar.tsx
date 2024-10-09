"use client";

import { useState, useEffect } from "react";
import SearchIcon from "@/images/icon-search.svg";

interface SearchBarProps {
  onSearch: (word: string) => void;
  initialInput: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialInput }) => {
  const [input, setInput] = useState(initialInput);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setInput(initialInput);
  }, [initialInput]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHasError(false);
      onSearch(input);
    } else {
      setHasError(true);
      onSearch("");
    }
  };

  const placeholderStyle = {
    fontSize: "0.875rem",
    letterSpacing: "0px",
    lineHeight: "150%",
    fontWeight: "500",
  };

  return (
    <div className="self-stretch flex flex-col gap-1  ">
      <form
        onSubmit={handleSearch}
        className={`relative flex items-center rounded-2xl bg-light-3 dark:bg-dark-2 ${
          hasError ? "ring-1 ring-inset ring-accent-red" : ""
        }`}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            if (!value.trim()) {
              setHasError(true);
              onSearch("");
            } else {
              setHasError(false);
            }
          }}
          onBlur={() => {
            if (!input.trim()) {
              setHasError(true);
            }
          }}
          placeholder="Search for any word…"
          className={`bg-inherit block w-full rounded-2xl border-0 py-3.5 px-5 pr-12 text-dark-1 dark:text-light-4 ring-1 ring-inset outline-none placeholder:text-dark-3 dark:placeholder:text-light-1 placeholder:font-bold caret-accent-purple ${
            hasError
              ? "ring-accent-red focus:ring-accent-red"
              : "ring-light-3 dark:ring-dark-2 focus:ring-accent-purple dark:focus:ring-accent-purple"
          }`}
          style={placeholderStyle}
        />
        <button
          type="submit"
          aria-label="Search word definition"
          className="absolute right-5 flex items-center rounded-full"
        >
          <SearchIcon aria-hidden="true" />
        </button>
      </form>

      {hasError && (
        <span className="text-accent-red text-sm mt-1">
          Whoops, can’t be empty…
        </span>
      )}
    </div>
  );
};

export default SearchBar;
