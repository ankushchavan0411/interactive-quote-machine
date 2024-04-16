/** @format */

import { useEffect, useState } from "react";

type QuoteType = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

function useRandomQuote(apiUrl = "https://api.quotable.io/random") {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<QuoteType[]>([]);

  const fetchQuote = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorites = () => {
    quote && setFavorites([...favorites, { ...quote }]);
    localStorage.setItem(
      "favoriteQuotes",
      JSON.stringify([...favorites, { ...quote }])
    );
  };

  // Load favorites from local storage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteQuotes");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return { quote, isLoading, fetchQuote, addToFavorites, favorites };
}

export default useRandomQuote;
