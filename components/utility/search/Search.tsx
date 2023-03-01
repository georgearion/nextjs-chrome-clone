import { useState } from 'react';
//import styles from './Search.module.css';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [searchTerm, SetSearchTerm] = useState<string>('');

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(searchTerm);
      }}
    >
      {/* Search input */}
      <div className="relative mt-1 rounded-full  shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="block xs:w-80 sm:w-96 rounded-full border-2 border-gray-300 pl-11 pr-4 pt-4 pb-4 focus:border-indigo-500 focus:ring-indigo-500 h-12"
          placeholder="Search Google or type URL"
          value={searchTerm}
          onChange={(e) => SetSearchTerm(e.target.value)}
        ></input>
      </div>
      {/* Buttons */}
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;