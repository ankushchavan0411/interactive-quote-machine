/** @format */
import { Toaster } from "react-hot-toast";
import FavoritesQuotes from "./components/FavoritesQuotes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Quote from "./components/Quote";
import useRandomQuote from "./hooks/useRandomQuote";
import "./index.css";

export default function App() {
  const {
    favorites,
    addToFavorites,
    removeQuoteFromFavorites,
    quote,
    isLoading,
    fetchQuote,
  } = useRandomQuote();

  return (
    <div className="bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Quote
        addToFavorites={addToFavorites}
        quote={quote}
        isLoading={isLoading}
        fetchQuote={fetchQuote}
      />
      <FavoritesQuotes
        favorites={favorites}
        removeQuoteFromFavorites={removeQuoteFromFavorites}
      />
      <Footer />
    </div>
  );
}
