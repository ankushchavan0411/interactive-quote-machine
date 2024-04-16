/** @format */

export type QuoteType = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export interface FavoritesQuotesType {
  favorites: QuoteType[];
  removeQuoteFromFavorites: (id: string) => void;
}

export interface QuoteTypes {
  quote: QuoteType | null;
  isLoading: boolean;
  fetchQuote: () => void;
  addToFavorites: () => void;
}
