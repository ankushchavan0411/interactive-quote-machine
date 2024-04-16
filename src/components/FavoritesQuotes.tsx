/** @format */

import useRandomQuote from "../hooks/useRandomQuote";

const FavoritesQuotes = () => {
  const { favorites } = useRandomQuote();

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
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
                <p className="leading-relaxed">{favorite.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesQuotes;
