/** @format */
import { Toaster } from "react-hot-toast";
import FavoritesQuotes from "./components/FavoritesQuotes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Quote from "./components/Quote";
import "./index.css";

export default function App() {
  return (
    <div className="bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Quote />
      <FavoritesQuotes />
      <Footer />
    </div>
  );
}
