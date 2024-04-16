/** @format */

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { QuoteType } from "../@app-Interface";

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
    if (quote && !favorites.some((fav) => fav._id === quote._id)) {
      const updatedFavorites = [...favorites, { ...quote }];
      setFavorites(updatedFavorites);
      localStorage.setItem("favoriteQuotes", JSON.stringify(updatedFavorites));
      toast.success("Quote added to favorites successfully!");
    } else {
      toast.error("Quote already exists in favorites!");
    }
  };

  const removeQuoteFromFavorites = (quoteId: string) => {
    const updatedFavorites = favorites.filter((fav) => fav._id !== quoteId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteQuotes", JSON.stringify(updatedFavorites));
    toast.success("Quote removed from favorites successfully!");
  };

  // Load favorites from local storage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteQuotes");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return {
    quote,
    isLoading,
    fetchQuote,
    addToFavorites,
    removeQuoteFromFavorites,
    favorites,
  };
}

export default useRandomQuote;
