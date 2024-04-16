/** @format */

import { useState } from "react";

function useRandomQuote(apiUrl = "https://api.quotable.io/random") {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Added for loading state

  const fetchQuote = async () => {
    setIsLoading(true); // Set loading to true before fetching

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching (or on error)
    }
  };

  return { quote, author, isLoading, fetchQuote };
}

export default useRandomQuote;
