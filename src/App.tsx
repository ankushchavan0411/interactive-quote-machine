/** @format */
import FavoritesQuotes from "./components/FavoritesQuotes";
import Header from "./components/Header";
import Quote from "./components/Quote";
import "./index.css";

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Quote />
      <FavoritesQuotes />
    </div>
  );
}
