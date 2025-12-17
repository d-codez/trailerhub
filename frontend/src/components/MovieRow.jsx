import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieRow = ({ title, items, onPlayTrailer, onMoreInfo, mediaType = 'movie' }) => {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.clientWidth * 0.8;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative mb-8 md:mb-12 group/row">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-4 px-4 md:px-12">
        {title}
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-0 bottom-0 z-40 w-12 md:w-16 bg-black/50 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 ${
            showLeftArrow ? 'visible' : 'invisible'
          }`}
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </button>

        {/* Cards container */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-2 md:gap-3 overflow-x-scroll scrollbar-hide px-4 md:px-12 pb-32 -mb-28"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              onPlayTrailer={onPlayTrailer}
              onMoreInfo={onMoreInfo}
              mediaType={mediaType}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-0 bottom-28 z-40 w-12 md:w-16 bg-black/50 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 ${
            showRightArrow ? 'visible' : 'invisible'
          }`}
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
