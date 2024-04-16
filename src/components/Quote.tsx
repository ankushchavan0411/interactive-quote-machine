/** @format */

import { useEffect } from "react";
import useRandomQuote from "../hooks/useRandomQuote";

export default function Quote() {
  const { quote, isLoading, fetchQuote, addToFavorites } = useRandomQuote();

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        {isLoading ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Loading quote...
            </h1>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {quote?.content}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {quote?.author}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  fetchQuote();
                }}
              >
                New Quote
              </button>

              <button
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={addToFavorites}
              >
                Save to Favorites
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
