/** @format */
import { FaQuoteLeft } from "react-icons/fa";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center">
            <span className="sr-only">Your Company</span>
            <FaQuoteLeft className="text-red-700 w-8 h-8" />
            <span className="ml-3 text-xl font-bold text-red-600">
              Interactive Quote App
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
