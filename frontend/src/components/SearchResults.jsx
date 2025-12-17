import React from 'react';
import { X } from 'lucide-react';
import MovieCard from './MovieCard';

const SearchResults = ({ results, query, onClear, onPlayTrailer, onMoreInfo }) => {
  if (!query) return null;

  return (
    <div className="pt-24 pb-8 px-4 md:px-12 min-h-screen bg-[#141414]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl md:text-2xl">
          Search results for: <span className="font-semibold">"{query}"</span>
        </h2>
        <button
          onClick={onClear}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
          Clear
        </button>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No results found for "{query}"
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Try searching with different keywords
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {results
            .filter(item => item.poster_path || item.backdrop_path)
            .map((item) => (
              <div key={item.id} className="pb-32">
                <MovieCard
                  item={item}
                  onPlayTrailer={onPlayTrailer}
                  onMoreInfo={onMoreInfo}
                  mediaType={item.media_type || 'movie'}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
