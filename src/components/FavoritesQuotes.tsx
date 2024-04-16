/** @format */

import { FavoritesQuotesType } from "../@app-Interface";
import { MdFavorite } from "react-icons/md";
import { CiBookmarkRemove } from "react-icons/ci";

const FavoritesQuotes = ({
  favorites,
  removeQuoteFromFavorites,
}: FavoritesQuotesType) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden container px-24 mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center">
        <MdFavorite className="mx-1 text-red-600" />
        Favorite Quotes ({favorites?.length})
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div
          //   className="-my-8 divide-y-2 divide-gray-100"
          className="max-h-80 overflow-y-scroll -my-8 divide-y-2 divide-gray-100"
          style={{ scrollBehavior: "smooth" }}
        >
          {favorites.map((favorite) => (
            <div
              key={favorite._id}
              className="py-8 flex flex-wrap md:flex-nowrap"
            >
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {favorite.author}
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {favorite.dateAdded || "No Date"}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {favorite.content}
                </h2>
                <p className="leading-relaxed">
                  {favorite?.tags?.filter((item) => item)}
                </p>
              </div>
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <button
                  onClick={() => removeQuoteFromFavorites(favorite._id)}
                  className="ml-2 text-red-500 hover:text-red-700 flex items-center"
                >
                  <CiBookmarkRemove className="mx-1 w-6 h-6" />
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesQuotes;
